import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/card-list';
import SearchBox from '../components/search-box';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import 'tachyons'

import{setSearchField} from '../actions'

const mapStateToProps = state => {
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
 return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}}

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: []
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}));

}

  render() {
    const {robots} = this.state
    const {searchField, onSearchChange} = this.props
    const filteredRobots = robots.filter((robot)=> {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ?
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
