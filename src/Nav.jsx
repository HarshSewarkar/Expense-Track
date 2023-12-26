import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/show">Show</Link>
        </div>
    );
};

export default Nav;
