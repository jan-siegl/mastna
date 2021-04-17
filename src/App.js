import './App.scss';
import Form from "./form/Form";
import Eliska from "./img/eliska.png"
import Adam from "./img/adam.png"
import Kolaz from "./img/kolaz.png"

function App() {
    return (
        <div className="App">
            {/*<Form/>*/}
            <div className="hero">
                <h1>Adam Slaměna & Eliška Machátová</h1>
                <img src={Kolaz} alt="Adam a Eliska"/>
                <p>24/7/2021 13:00</p>
                <a href="#">dejte nám vědět, že dorazíte</a>
            </div>
        </div>
    );
}

export default App;
