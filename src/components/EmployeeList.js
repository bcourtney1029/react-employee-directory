import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList ({data}) {
    return (
        data.map(employee => (
            <EmployeeCard
                id={employee.id}
                image={employee.image}
                name={employee.name}
                email={employee.email}
                phone={employee.phone}
            />
        ))
    )
}

export default EmployeeList;