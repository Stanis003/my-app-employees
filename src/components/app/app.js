import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props)
            this.state={
                data: [
                    {name:'John C.', salary: 800, increase:true, rise: false, id: 1},
                    {name:'Max W.', salary: 3000, increase:false, rise: true, id: 2},
                    {name:'Lex C.', salary: 15000, increase:false, rise: false, id: 3}
                ]
            }
            this.maxIdd= 4;
    }

    deleteItem = (id) =>{
        this.setState(({data})=>{

            return {
                data: data.filter(item=> item.id !== id)
            }

        })
    }
    onToggleIncrease = (id) => {

           this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxIdd++
        }
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    render(){
        const employees = this.state.data.length;
        const encreased = this.state.data.filter(item=>item.increase).length;
        return(
            <div className="app"> 
                 <AppInfo
                 employees={employees} encreased={encreased}/>
     
                 <div className="searh-panel">
                 <SearchPanel/>
                 <AppFilter/>
                 </div>  
                 <EmployeesList 
                 data={this.state.data}
                 onDelete={this.deleteItem}
                 onToggleIncrease={this.onToggleIncrease}
                 onToggleRise={this.onToggleRise}
                 />
                 <EmployeeAddForm
                 addItem={this.addItem}/>
            </div>
          
         )
    }
   
}
export default App;