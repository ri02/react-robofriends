import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/card-list';
import SearchBox from '../components/search-box';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import 'tachyons'

import{setSearchField, requestRobots} from '../actions'

const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
 return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
}}

class App extends Component {


componentDidMount(){
  this.props.onRequestRobots();

}

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props
    const filteredRobots = robots.filter((robot)=> {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending?
      <h1>LOADING</h1> :
      (<div className="tc ">
        <h1 > Robo Friends</h1>
        <SearchBox searchChange={onSearchChange} searchField={searchField}/>
       <Scroll>
         <ErrorBoundry>
            <CardList robots={filteredRobots}/>
         </ErrorBoundry>
       </Scroll>
      </div>
    );

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
