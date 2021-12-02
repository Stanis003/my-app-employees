
import './app-filter.css'
const AppFilter =()=>{
    return(
        <div className="btn-group">
            <button 
            className="btn btn-light"
            type="button">
                All employees
            </button>
            <button 
            className="btn btn-outline-light"
            type="button">
                To upp
            </button>
            <button 
            className="btn btn-outline-light"
            type="button">
                Pay more 1000$
            </button>
        </div>
    )
}
export default AppFilter;