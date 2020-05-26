import React, {Component} from 'react';
import CardList from '../components/card-list';
import SearchBox from '../components/search-box';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import 'tachyons'

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}));

}

  onSearchChange = (event) => {
     this.setState({
      searchField: event.target.value
     })
  }
  render() {
    const {robots, searchField} = this.state
    const filteredRobots = robots.filter((robot)=> {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ?
      <h1>LOADING</h1> :
      (<div className="tc ">
        <h1 > Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} searchField={searchField}/>
       <Scroll>
         <ErrorBoundry>
            <CardList robots={filteredRobots}/>
         </ErrorBoundry>
       </Scroll>
      </div>
    );

  }
}

export default App;
