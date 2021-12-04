
import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        { name: 'all', label: 'All employees' },
        { name: 'rise', label: 'To upp' },
        { name: 'salary', label: 'Salary more 1000$' }
    ];

    const buttons = buttonsData.map(({ name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={()=> props.onUpdateFilter(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group app">
            {buttons}
        </div>
    )
}

export default AppFilter;
