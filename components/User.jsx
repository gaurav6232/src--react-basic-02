import { useEffect } from "react";
import axios from "../utils/axios";
import { useState } from "react";

const User = () => {
    const [first, setfirst] = useState(null);
    const getusers = async () => {
        try {
            const { data } = await axios.get("/users");
            setfirst(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("Component Created!");
        return () => {
            console.log("Component Destroyed");
        };
    }, []);

    console.log(first);

    return (
        <div>
            <h1>Users</h1>
            <button onClick={getusers}>Click</button>
            <hr />
            <p>{JSON.stringify(first)}</p>
        </div>
    );
};

export default User;
