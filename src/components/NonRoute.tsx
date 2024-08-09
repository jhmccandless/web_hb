import { Link } from "react-router-dom";

function NonRoute() {
  return (
    <div>
      <p>Not a route</p>
      <Link to="/">homepage</Link>
    </div>
  );
}

export default NonRoute;
