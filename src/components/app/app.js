import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'John C.', salary: 800, increase: true, rise: false, id: 1 },
                { name: 'Max W.', salary: 3000, increase: false, rise: true, id: 2 },
                { name: 'Lex C.', salary: 15000, increase: false, rise: false, id: 3 }
            ],
            term: '',
            filt: 'all'
        }
        this.maxIdd = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleProp = (id, prop) => {

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    onFilter = (items, filt) => {
        switch (filt) {

            case "salary":
                return items.filter(item => item.salary > 1000);

            case "rise":
                return items.filter(item => item.rise);

            default:
                return items;
        }
    }

    addItem = (name, salary) => {

        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxIdd++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    serchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    onUpdateFilter = (filt) => {
        this.setState({ filt });
    }

    render() {
        const { data, term, filt } = this.state;
        const employees = data.length;
        const encreased = data.filter(item => item.increase).length;
        const visibleData = this.onFilter(this.serchEmp(data, term), filt);

        return (
            <div className="app">
                <AppInfo
                    employees={employees} encreased={encreased} />

                <div className="searh-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filt}
                        onUpdateFilter={this.onUpdateFilter} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />

                <EmployeeAddForm
                    addItem={this.addItem} />
            </div>
        )
    }
}

export default App;