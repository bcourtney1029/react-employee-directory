import React from "react";

function Nav({handleSearchTerm, searchTerm, sortByName}) {
    return (
        <div className="md:flex justify-between my-5">
            <div className="md:mb-0 mb-4">
                <button onClick={sortByName} className="bg-primary focus:bg-white text-gray">Ascending/Descending Names</button>
            </div>
            <form>
                <input
                    value={searchTerm}
                    onChange={handleSearchTerm}
                    className="w-full py-2 px-2"
                    type="text"
                    placeholder="search for an employee"/>
            </form>
        </div>
    )
}

export default Nav;
