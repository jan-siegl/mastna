import './App.scss';
import Form from "./form/Form";
import Landing from "./landing/landing";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useState} from "react";

function App() {
    const [lang, setLang] = useState("cz");

    function handleClickCz(e) {
        e.preventDefault()
        setLang("cz")
    }
    function handleClickEn(e) {
        e.preventDefault()
        setLang("en")
    }
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/rsvp">
                        <Form lang={lang} />
                    </Route>
                    <Route path="/">
                        <Landing lang={lang} />
                    </Route>
                </Switch>
                <div className="lang-switch">
                    <a href="#" className={lang === "cz" ? "active" : ""} onClick={handleClickCz}>CZ</a>
                    <a href="#" className={lang === "en" ? "active" : ""} onClick={handleClickEn}>EN</a>
                </div>
            </div>
        </Router>
    );
}

export default App;
