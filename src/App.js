import './App.scss';
import Form from "./form/Form";
import Eliska from "./img/eliska.png"
import Adam from "./img/adam.png"
import Kolaz from "./img/kolaz.png"
import Front from "./img/front-2.png"
import Ruze from "./img/ruze.png"
import Mapa from "./img/mapa.png"

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
            <div className="main-wrapper">
                <img src={Ruze} alt=""/>
                <h3>Vítáme vás na stránkách naší svatby. Budeme moc rádi, když s námi oslavíte náš den.</h3>
                <div className="main">
                    <p>
                        Obřad proběhne ve 13:00, dojeďte tedy prosím s pohodlným předstihem. <br/>
                        Program dne bude k dispozici na místě. <br/>
                        Zatím počítáme s tím, že svatba bude moci normálně proběhnout. Pokud by se něco změnilo v
                        návaznosti na aktuální opatření, budeme vás tady informovat.
                    </p>

                    <h2>Co na sebe?</h2>
                    <p>Ikdyž se to může zdát, nenutíme nikoho do žádného speciálního dresscodu. Pokud byste se ale
                        cítili na outtfit připomínající přelom tisíciletí, nebráníme se tomu. Je pro nás hlavní, abyste
                        se cítili pohodlně.</p>

                    <h2>Co můj + 1?</h2>
                    <p>Chceme, abychom si všichni dohromady svatbu naplno užili. Pokud jsme to s vámi předem
                        neprobírali, nepočítáme s +1.</p>

                    <h2>A co děti?</h2>
                    <p>Rádi uvidíme vaše ratolesti, nicméně neplánujeme žádný speciální program pro děti.</p>

                    <h2>Kde budu spát?</h2>
                    <p>
                        Ubytování se nabízí v několika variantách. Do dotazníku nám prosím vyplňte svou preferenci.<br/>
                        1) Penziony v Lomnici nad Popelkou (pro více soukromí), ve vaší vlastní režii<br/>
                        2) Ubytování v továrně - vícelůžkové pokoje s postelí a peřinou, cca 300 Kč/os/noc<br/>
                        3) Ubytování v továrně - vícelůžkové pokoje s matrací na zemi a peřinou, cca 200 Kč/noc<br/>
                        4) Ubytování v továrně - na vlastní karimatce ve spacáku<br/>
                        5) Na pozemku továrny, venku pod širákem, v autě a pod. <br/><br/>
                        Kapacity jsou limitované, takže kdo dřív přijde, má větší šanci na svou preferovanou variantu.
                    </p>

                    <h2>Dary?</h2>
                    <p>Pokud nemáte v rukávu nějaký skvělý nápad na svatební dar, můžete se inspirovat <a
                        href="https://youtu.be/eqayXnc2XKY">tady</a>.</p>

                    <h2>Něco s sebou?</h2>
                    <p>Máme na vás spíše netradiční prosbu. Protože memes hrají velkou roli v našich životech a potažmo
                        i v našem seznámení, chtěli bychom, aby s sebou každý host přivezl svůj nejoblíbenější meme
                        (nebo i více). Všechny je pak vystavíme.</p>

                    <h2>Kde to bude?</h2>
                    <p>
                        továrna Mastných, bývalá tklacovna v Lomnici nad Popelkou <br/>
                        Abyste si mohli dopředu zmapovat terén, další info najdete na stránkách <a href="https://www.tovarna-mastnych.eu/">továrny.</a> <br/>
                        Kolem Lomnice je sousta hezkých turistických tras, takže můžete v neděli po svatbě vyrazit
                        rovnou na výlet do okolí. <br/>
                        <br/>
                        Lomnice nad Popelkou <br/>
                        Antala Staška 212 <br/>
                        512 51
                    </p>

                    <img src={Mapa} alt="Mapa"/>

                    <p><a href="https://mapy.cz/zakladni?x=15.3690748&y=50.5277814&z=17&source=firm&id=13016957">odkaz na mapy.cz</a></p>
                    <p>
                        <b>Autem:</b> <br/>
                        Po dálnici, parkovat lze u továrny (1,5 hod z Prahy)<br/>
                        <b>Vlakem:</b><br/>
                        Do stanice Lomnice nad Popelkou a poté 700m pěšky<br/>
                        (2,5 hod z Prahy)<br/>
                        <b>Autobusem:</b><br/>
                        Do stanice Lomnice n.Pop.,aut.nádr.a poté 750m pěšky<br/>
                        (2 hod z Prahy)<br/>
                        <b>Povozem:</b><br/>
                        Přímou cestou přes Hradec<br/>
                        (15 hod z Brna)
                    </p>
                </div>
                <img src={Front} alt=""/>
            </div>
        </div>
    );
}

export default App;
