import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';

import './app.css';
function App() {
    const data =[
        {name:'John C.', salary: 800, increase:true},
        {name:'Max W.', salary: 3000, increase:false},
        {name:'Lex C.', salary: 15000, increase:false},
    ];


    return(
       <div className="app"> 
            <AppInfo/>

            <div className="searh-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>  
            <EmployeesList data={data}/>
            <EmployeeAddForm/>
       </div>
     
    );
}
export default App;