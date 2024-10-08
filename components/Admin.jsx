import React, { useContext } from "react";
import { DataContext } from "../utils/Context";
const Admin = () => {
    const [data, setdata] = useContext(DataContext);
    const filterdData = data.filter((d) => d.role === "admin");
    return (
        <div>
            <h1>Admin Data</h1>
            <ol>
                {data.length > 0
                    ? filterdData.map((d, i) => <li key={i}>{d.name}</li>)
                    : "No Data Found"}
            </ol>
        </div>
    );
};

export default Admin;
