import '../App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import FrontPage from "./FrontPage";
import { StoreProvider, createStore } from 'easy-peasy'

const store = createStore({
  languages: [],
});

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px"}}>
        <Router>
          <AuthProvider>
            <StoreProvider store={store}>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route pass="/front-page" component={FrontPage} />
              </Switch>
            </StoreProvider>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
