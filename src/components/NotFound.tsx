import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="dummy-page not-found">
      <h3>Page not found</h3>

      <Link to=".." className="link">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
