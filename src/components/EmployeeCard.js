import React from "react";

function EmployeeCard({name, image, email, phone}) {
    return (
        <div className="md:flex bg-white shadow text-gray px-10 my-4 py-4 items-center justify-between">
            <img    
                style={{maxWidth: "50px"}}
                className="border border-gray"
                src={image}
                alt="employeeImg"
            />
            <p className="text-md">{name}</p>
            <p className="text-md">{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default EmployeeCard;
