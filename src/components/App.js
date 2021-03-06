import '../App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from '../contexts/AuthContext';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import FrontPage from "./FrontPage";
import FrontPageLogged from "./FrontLoggedIn";
import Results from "./Results";
import Inbox from "./Inbox";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/front-page-logged" component={FrontPageLogged} />
              <PrivateRoute path="/inbox" component={Inbox} />              
              <Route path="/signup" component={Signup}>
                <Signup />
              </Route>
              <Route path="/results" component={Results} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/front-page" component={FrontPage} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
