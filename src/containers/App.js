import React, { Component } from 'react';
import CardList from '../component /cardList';
import SearchRobots from '../component /searchRobots';
import Scroll from '../component /scroll'



class App extends Component {
 constructor(){
   super()
   this.state = {
     robots : [],
     searchfield : ''
   }
 }
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({robots:users})) 
 }
 onsearchChange = e => this.setState({searchfield : e.target.value})
 
 render(){
  const filterRobots = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })

   return !this.state.robots.length? <h1>Loading</h1> : (
     <div className='tc bg-blue'>
       <h1>Robots Friends</h1>
        <SearchRobots searchChange = {this.onsearchChange}/>
        <Scroll>
       <CardList robots = {filterRobots}/>
       </Scroll>
     </div> 
   )
 }
}
export default App
  
      



  

