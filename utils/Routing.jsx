import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import Admin from "../components/Admin";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
};

export default Routing;
