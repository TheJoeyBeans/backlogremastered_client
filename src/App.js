import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home, SignUp } from '../src/components';

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
            </Switch>
        </Router>
    );
}

export default App;
