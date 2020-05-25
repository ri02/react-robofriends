import React, {Component} from 'react';
import CardList from './card-list';
import {robots} from './robots';
import SearchBox from './search-box'
import 'tachyons'

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
     this.setState({
      searchField: event.target.value
     })
  }
  render() {
    const filteredRobots = this.state.robots.filter((robot)=> {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc ">
        <h1 > Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} searchField={this.state.searchField}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
