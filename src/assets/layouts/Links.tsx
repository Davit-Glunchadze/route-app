import { Link, Outlet } from "react-router-dom";

const Links = () => {
  return (
    <div className="main">
      <div className="links">
        <div className="link1">
          <Link to={"/"}>Home</Link>
          <Link to={"./about"}>About</Link>
        </div>
        <div className="link2">
          <Link to={"./1"}>Fact-1</Link>
          <Link to={"./2"}>Fact-2</Link>
          <Link to={"./3"}>Fact-3</Link>
          <Link to={"./4"}>Fact-4</Link>
          <Link to={"./5"}>Fact-5</Link>
          <Link to={"./6"}>Fact-6</Link>
          <Link to={"./7"}>Fact-7</Link>
          <Link to={"./about/8"}>Fact-8</Link>
        </div>
      </div>
      <div className="pages">
        <Outlet />
      </div>
    </div>
  );
};

export default Links;
