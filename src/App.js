import React ,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component'

class App extends Component{
  
  constructor(){
    super();
    this.state={
      monsters:[],
      searchBox:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>this.setState({ monsters:users }))
  }
  changeHandler=(e)=>{
    this.setState({searchBox : e.target.value})
  }
  render(){
    const { monsters, searchBox } =this.state
    const FilteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchBox.toLowerCase()))
    return(
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        {/* setState is asynchronous and the second parameter execute after the setState */}
        <SearchBox placeholder='Search monsters'
          handlechange={this.changeHandler} />      
        <CardList monsters={FilteredMonsters} />
      </div>
    )
  }
}

export default App;
