import React from 'react'
import './css/ToDoList.css'

var filtredData

export class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.props=props;
        this.state={
        inputValue:"",
        namsur:"",
        tech:"",
        spe:"",
        city:"",
        tasks:[]
       }
    }
    // Método que comprueba y agrega un nuevo item
    addHandle(){
        if(this.state.namsur!=="" && this.state.tech!=="" && this.state.spe!=="" && this.state.city!==""){
           
            let task=[];
            task.push(this.state.namsur);
            task.push(this.state.spe);
            task.push(this.state.tech);
            task.push(this.state.city);

            this.setState({
                tasks:[...this.state.tasks,task],            
            })

            this.setState({
                namsur:"",
                spe:"",
                tech:"",
                city:""
            })
        
        let op="op"
        document.querySelector('#spe [value="' + op + '"]').selected = true; 
        }else{
            return;
        }
    }
    // Método que agrega según campo input
    handleInput(event){       
        switch(event.target.name) {
            case "namsur":
                this.setState({
                    namsur: event.target.value,   
                })
            break;
            case "tech":
                this.setState({
                    tech: event.target.value,   
                })
            break;
            case "spe":
                this.setState({
                    spe: event.target.value,   
                })
            break;
            case "city":
                this.setState({
                    city: event.target.value,   
                })
                break;
            default:    
        } 
    }
    // Método que agrega según la opción select
    handleSelect(e){
        if(e.target.value!=="op"){ // Mientras sea distinto de la opción "Elige una opción"
            this.setState({
                spe: e.target.value,   
            })   
        }
    }  
    // Método que elimina un item
    deleteItem(item){   
        filtredData = this.state.tasks.filter((items)=>{
            return items !== item
        })  
        this.setState({
            tasks:filtredData
        })    
    }
    render(){
        return(
            <>           
            <div className="container">
                <div className="row mb-1">
                    <div className="col-3">
                        Name and Surname
                    </div>
                    <div class="col-9">
                        <input value={this.state.namsur} name="namsur" onChange={(e)=>this.handleInput(e)} className="form-control" type="text" placeholder="Enter Name" aria-label="default input example"></input>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-3">
                        Specialty
                    </div>
                    <div className="col-9">
                    <select name="spe" id="spe" className="form-select" aria-label="Default select example" onClick={(e)=>this.handleSelect(e)}>
                    <option value="op" selected>Elige una opción</option>
                    <option value="Software development (Desktop)">Software developement (Desktop)</option>
                    <option value="Software development">Software developement</option>
                    <option value="Web development (Frontend)">Web developement (Frontend)</option>
                    <option value="Web development (Backend)">Web developement (Backend)</option>
                    <option value="Web development (FullStack)">Web developement (FullStack)</option>
                    <option value="Software development (Mobile)">Software developement (Mobile)</option>
                    <option value="Software developement (VideoGames)">Software developement (VideoGames)</option>
                    <option value="Data Base Administration">Data Base Administration</option>
                    <option value="Software Engineering">Sotware Engineering</option>
                    <option value="IT Securty">IT Securty</option>
                    <option value="DevOps Engineering">DevOps Engineering</option>
                    <option value="System Administration">System Administration</option>
                    </select>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-3">
                        Main Technology
                    </div>
                    <div className="col-9">
                    <input value={this.state.tech} id="esp" name="tech" onChange={(e)=>this.handleInput(e)} className="form-control" type="text" placeholder="Enter main dev technolgy" aria-label="default input example"></input>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">
                        City
                    </div>
                    <div className="col-9">
                    <input value={this.state.city} name="city" onChange={(e)=>this.handleInput(e)} className="form-control" type="text" placeholder="Enter City" aria-label="default input example"></input>
                    </div>
                </div>
            
                </div>        
                <div className="derecha">
                    <button className="btn btn-dark bg-dark btn-add mt-2 mb-4" onClick={()=>this.addHandle()}>Agregar</button>
                </div>

                <div className="text-aligned">
              
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Especialidad</th>
                            <th>Teconolgía</th>
                            <th>Ciudad</th>
                            <th>Operación</th>
                        </tr>
                    </thead>
                    <tbody >
                    { this.state.tasks.map((campo,index)=>{return <tr key={campo[0]}>    
                            <td>{campo[0]}</td>
                            <td>{campo[1]}</td>
                            <td>{campo[2]}</td>
                            <td>{campo[3]}</td>
                            <td className="centro"><button className="btn btn-danger btn-sm" onClick={(e)=>this.deleteItem(campo)}>Eliminar</button></td>                         
                        </tr>                 
                    
                     }) }
                     </tbody>
                </table>
                </div>
            </>
        )
    }
}