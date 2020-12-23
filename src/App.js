import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home, SignUp, SignIn } from '../src/components';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/register">
                    <SignUp />
                </Route>
                <Route exact path="/signIn">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
