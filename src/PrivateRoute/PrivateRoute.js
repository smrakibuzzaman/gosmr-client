import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../components/hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading) {
        return (<Spinner animation="border" role="status"/>)
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;