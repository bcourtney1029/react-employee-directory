import React, {useState} from 'react';
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import employees from "./utils/employees.json";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sorted, setSorted] = useState(false);
    const [data, setEmployeeList] = useState(employees);

    // function to set the search term to whatever value the user has inputed
    function handleSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    // function to sort the employees by their first name
    function sortByName() {
        if (!sorted) {
            setEmployeeList(data.sort((a,b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployeeList(data.sort((a,b) => (a.name > b.name) ? -1 : 1));
            setSorted(false);
        }
    }

    const employeeFilter = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Layout>
               <h1 className="title text-5xl mt-16">Employee Directory</h1>
               <p className="text-lg mt-16">You can search by employee name or sort by employee name</p> 
               <Nav
                    handleSearchTerm={handleSearchTerm}
                    searchTerm={searchTerm}
                    sortByName={sortByName}
                />
                <EmployeeList data={employeeFilter}/>
                <Footer/>

            </Layout>
        </div>
    )
}

export default App;
