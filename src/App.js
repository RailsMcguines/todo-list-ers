import React from 'react'
import {ToDoList} from './components/ToDoList/ToDoList'
import './style.css'
import techprof from './assets/imgs/techprof.png'

function App() {
    return (
      <div className="container"> 
         <header className="row alto">
            <div className="col main-title"><h1>IT profile register</h1></div>
          </header>
          <div className="row">
            <div className="col-1">
              
            </div>   
            <div className="col-9">
            <ToDoList />

            </div>
            <div className="col-2">
              <img className="tech" src={techprof} alt="tech_profile" />
            </div>
          </div>
       
          <nav className="navbar fixed-bottom">
            <p className="autor">EnzoRodriguez@LocalhostXL - La Rioja 2021</p>
          </nav>
         
         
        </div>
      
      );
}


export default App;
