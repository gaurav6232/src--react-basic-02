import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const Context = (props) => {
    const [data, setdata] = useState([
        { name: "Anurag", role: "user" },
        { name: "Ayush", role: "admin" },
        { name: "Sarthak", role: "user" },
        { name: "Hitesh", role: "user" },
        { name: "Harsh", role: "admin" },
    ]);

    return (
        <DataContext.Provider value={[data, setdata]}>
            {props.children}
        </DataContext.Provider>
    );
};

export default Context;
