import React from "react";

function EmployeeCard({name, image, email, phone}) {
    return (
        <div className="md:flex bg-white text-gray px-8 my-5 py-5 items-center justify-between">
            <img    
                style={{maxWidth: "50px"}}
                className="border border-gray-300"
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