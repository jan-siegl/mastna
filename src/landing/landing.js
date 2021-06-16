import "./landing.scss"
import Kolaz from "../img/kolaz.png";
import Ruze from "../img/ruze.png";
import Mapa from "../img/mapa.png";
import Front from "../img/front-2.png";
import data from "../data/data.json"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Landing(props) {
    return (
     <div className="landing">
         <div className="hero">
             <h1>Adam Slaměna <br className="mobile"/>& <br className="mobile"/>Eliška Machátová</h1>
             <img src={Kolaz} alt="Adam a Eliska"/>
             <p>24/7/2021 13:00</p>
             <Link to="/rsvp">{data.[props.lang][0]}</Link>
         </div>
         <div className="main-wrapper">
             <img src={Ruze} alt=""/>
             <h3>{data.[props.lang][1]}</h3>
             <div className="main">
                 <p>
                     {data.[props.lang][2]} <br/>
                     {data.[props.lang][3]} <br/>
                     {data.[props.lang][4]}
                 </p>

                 <h2>{data.[props.lang][5]}</h2>
                 <p>{data.[props.lang][6]}</p>

                 <h2>{data.[props.lang][7]}</h2>
                 <p>{data.[props.lang][8]}</p>

                 <h2>{data.[props.lang][9]}</h2>
                 <p>{data.[props.lang][10]}</p>

                 <h2>{data.[props.lang][11]}</h2>
                 <p>
                     {data.[props.lang][12]}<br/>
                     {data.[props.lang][13]}<br/>
                     {data.[props.lang][14]}<br/>
                     {data.[props.lang][15]}<br/>
                     {data.[props.lang][16]}<br/>
                     {data.[props.lang][17]} <br/><br/>
                     {data.[props.lang][18]}
                 </p>

                 <h2>{data.[props.lang][19]}</h2>
                 <p>{data.[props.lang][20]} <a
                     href="https://youtu.be/eqayXnc2XKY" target="_blank">{data.[props.lang][21]}</a>.</p>

                 <h2>{data.[props.lang][22]}</h2>
                 <p>{data.[props.lang][23]}</p>

                 <h2>{data.[props.lang][24]}</h2>
                 <p>
                     {data.[props.lang][25]} <br/>
                     {data.[props.lang][26]} <a href="https://www.tovarna-mastnych.eu/" target="_blank">{data.[props.lang][27]}</a> <br/>
                     {data.[props.lang][28]} <br/>
                     <br/>
                     Lomnice nad Popelkou <br/>
                     Antala Staška 212 <br/>
                     512 51
                 </p>

                 <a href="https://mapy.cz/zakladni?x=15.3690748&y=50.5277814&z=17&source=firm&id=13016957" target="_blank"><img src={Mapa} alt="Mapa"/></a>

                 <p><a href="https://mapy.cz/zakladni?x=15.3690748&y=50.5277814&z=17&source=firm&id=13016957" target="_blank">{data.[props.lang][29]}</a></p>
                 <p>
                     <b>{data.[props.lang][30]}</b> <br/>
                     {data.[props.lang][31]}<br/>
                     <b>{data.[props.lang][32]}</b><br/>
                     {data.[props.lang][33]}<br/>
                     {data.[props.lang][34]}<br/>
                     <b>{data.[props.lang][35]}</b><br/>
                     {data.[props.lang][36]}<br/>
                     {data.[props.lang][37]}<br/>
                     <b>{data.[props.lang][38]}</b><br/>
                     {data.[props.lang][39]}<br/>
                     {data.[props.lang][40]}
                 </p>
             </div>
             <img src={Front} alt=""/>
         </div>
     </div>
    );
}

export default Landing;
