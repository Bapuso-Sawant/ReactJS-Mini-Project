import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';



class Avatar extends Component{

  constructor(){
    super();
    this.state = {
      name : "Welcome To Avatar World"
    }
  }

  namechange(){
    this.setState({
       name : "Subscribe To Sawant's Channel"
    })
  }

  render(){

    const avatarlistarray = [
       {
         id:1,
         name:"Baapuso",
         work:"Full Stack Developer"
       },
       {
         id:2,
         name:"Sawant",
         work:"ML Enginner"
       },
       {
         id:3,
         name:"Prashant",
         work:"Web Developer"
       },
       {
         id:4,
         name:"Suraj",
         work:"Software Developer"
       }
    ]

    const arrayavatarcard = avatarlistarray.map( (avatarcard, i) =>{
      return <Avatarlist key={i} id={avatarlistarray[i].name}
                          name={avatarlistarray[i].name}
                          work={avatarlistarray[i].work}/>
    } )


  return (
        <div className="mainpage">
          <h1>{this.state.name} </h1>
          {arrayavatarcard}
          <button onClick = { () => this.namechange() }> Subscribe </button>
        </div>
      )
  }
}

export default Avatar;
