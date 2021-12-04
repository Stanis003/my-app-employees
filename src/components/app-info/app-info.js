
import './app-info.css';
const AppInfo = ({encreased, employees}) => {
       
    return(
        
        <div className="app-info">
            <h1>Accounting for employees in the company SoftServe</h1>
            <h2>Total employees {employees}</h2>
            <h2>Premium: {encreased}</h2>
        </div>
    )
}
export default AppInfo;