import './App.scss';
import Form from "./form/Form";
import Landing from "./landing/landing";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/rsvp">
                        <Form/>
                    </Route>
                    <Route path="/">
                        <Landing/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
