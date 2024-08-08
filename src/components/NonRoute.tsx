import { Link } from "react-router-dom";

function NonRoute() {
  return (
    <div>
      <p>Not a route</p>
      <Link to="/">Form for timer</Link>
    </div>
  );
}

export default NonRoute;
