import { Link, Outlet } from "react-router-dom";

const Links = () => {
  return (
    <div className="main">
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"./main"}>Main</Link>
        <Link to={"./about"}>About</Link>
      </div>
      <div className="pages">
        <Outlet />
      </div>
    </div>
  );
};

export default Links;
