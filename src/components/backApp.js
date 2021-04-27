//import { render } from '@testing-library/react';
import React from 'react'
import {Saludo} from './components/Saludo'
import {ToDoList} from './components/ToDoList/ToDoList'

function App() {

    return (
      
      <div class="container"> 
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
          <ToDoList   />
        
          <Saludo />
          </div>
          <div class="col-1"></div>
          </div>
        </div>
      
      );
}


export default App;
