import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="notFound">
      <h2>This is an Error Page</h2>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default ErrorPage;
