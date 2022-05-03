import React,{Component}from "react";
import CardList from '../components/CardList';
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundray from "../components/ErrorBoundry";
import './App.css'


class  App extends Component {
  constructor(){
    super()
    this.state = {
      robots:[],
      searchfield:''

    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    
    .then(users=>this.setState({robots: users}))
    
  }
  onSearchchange=(event)=>{

    this.setState({searchfield: event.target.value})
    
    
   
  }

  render(){
    const {robots,searchfield}=this.state;
    const filteredRobots=robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
       <h1>Loading</h1> :
    
    
 
  (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchchange={this.onSearchchange}/>
      <Scroll>
        <ErrorBoundray>
      <CardList robots={filteredRobots}/>
      </ErrorBoundray>
      </Scroll>
      </div>
      
    );
    
  }
  
 
}

export default App;