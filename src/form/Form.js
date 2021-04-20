import "./form.scss"
import React, { useState } from "react";
import useWrappedRefWithWarning from "react-bootstrap/useWrappedRefWithWarning";

function Form() {
    const succes = false
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwzGWkDS8k796ced8n0Vd0FkUnSD8CjGw5SHPJtlaPuiJlx05P3O4D1YBUyQQuT9w-NyA/exec'
    const form = document.forms['google-sheet']

    const [jmeno, setJmeno] = useState("");
    const [email, setEmail] = useState("");
    const [osob, setOsob] = useState("");
    const [deti, setDeti] = useState("");
    const [jidlo, setJidlo] = useState("");
    const [spani, setSpani] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("děkujeme, že jste nám dali vědět"))
            .catch(error => console.error('Něco se nepovedlo, zkuste to za chvíli, nebo nám napište, že to je rozbité', error.message))
    }
    if (succes) {
        return (
            <div className="form-wrapper">
                <div className="form-bubble">
                    <h2>děkujeme, že jste nám dali vědět</h2>
                </div>
            </div>
        )
    } else {
        return (
            <div className="form-wrapper">
                <div className="form-bubble">
                    <h2>dejte nám vědět, jestli dorazíte</h2>
                    <form autoComplete="off" name="google-sheet" onSubmit={handleSubmit}>
                        <div className="label-group label-group--text">
                            <label htmlFor="jmenoTxt">jméno:</label>
                            <input type="text" name="jmeno" id="jmenoTxt" value={jmeno} onChange={e => setJmeno(e.target.value)}/>
                        </div>

                        <div className="label-group label-group--text">
                            <label htmlFor="emailTxt">email:</label>
                            <input type="text" name="email" id="emailTxt" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="label-group">
                            <label htmlFor="osobyTxt">osob:</label>
                            <div className="label-inline">
                                <input type="radio" id="osobTxt1" name="osob" value="1" onChange={e => setOsob(e.target.value)}/>
                                <label htmlFor="osobTxt1">1</label>
                            </div>
                            <div className="label-inline">
                                <input type="radio" id="osobTxt2" name="osob" value="2" onChange={e => setOsob(e.target.value)}/>
                                <label htmlFor="osobTxt2">2</label>
                            </div>
                            <div className="label-inline">
                                <input type="radio" id="osobTxt3" name="osob" value="3" onChange={e => setOsob(e.target.value)}/>
                                <label htmlFor="osobTxt3">3</label>
                            </div>
                            <div className="label-inline">
                                <input type="radio" id="osobTxt4" name="osob" value="4" onChange={e => setOsob(e.target.value)}/>
                                <label htmlFor="osobTxt4">4</label>
                            </div>
                            <label htmlFor="detiiTxt">z toho dětí:</label>
                            <div className="label-inline">
                                <input type="radio" id="detiTxt0" name="deti" value="0" onChange={e => setDeti(e.target.value)}/>
                                <label htmlFor="detiTxt0">0</label>
                            </div>
                            <div className="label-inline">
                                <input type="radio" id="detiTxt1" name="deti" value="1" onChange={e => setDeti(e.target.value)}/>
                                <label htmlFor="detiTxt1">1</label>
                            </div>
                            <div className="label-inline">
                                <input type="radio" id="detiTxt2" name="deti" value="2" onChange={e => setDeti(e.target.value)}/>
                                <label htmlFor="detiTxt2">2</label>
                            </div>
                            <div className="label-inline">
                                <input type="radio" id="detiTxt3" name="deti" value="3" onChange={e => setDeti(e.target.value)}/>
                                <label htmlFor="detiTxt3">3</label>
                            </div>
                        </div>

                        <div className="label-group">
                            <label htmlFor="">jsem:</label>
                            <div className="label-inline">
                                <input type="radio" id="vegeTxt" name="jidlo" value="vegetarian" onChange={e => setJidlo(e.target.value)}/>
                                <label htmlFor="vegeTxt">vegetarián</label>
                            </div>
                            <div className="label-inline">
                                <input type="radio" id="veganTxt" name="jidlo" value="vegan" onChange={e => setJidlo(e.target.value)}/>
                                <label htmlFor="veganTxt">vegan</label>
                            </div>
                            <div className="label-inline">
                                <input type="radio" id="vseTxt" name="jidlo" value="vsezravec" onChange={e => setJidlo(e.target.value)}/>
                                <label htmlFor="vseTxt">všežravec</label>
                            </div>
                        </div>

                        <div className="label-group">
                            <label htmlFor="">rád:</label>
                            <div className="label-inline">
                                <input type="radio" id="penzionTxt" name="spani" value="penzion" onChange={e => setSpani(e.target.value)}/><br className="mobile"/>
                                <label htmlFor="penzionTxt">zajistím si lůžko v nedalekém penzionu</label>
                            </div>
                            <br/>
                            <div className="label-inline">
                                <input type="radio" id="postelTxt" name="spani" value="postel" onChange={e => setSpani(e.target.value)}/><br className="mobile"/>
                                <label htmlFor="postelTxt">přespím v továrně na posteli</label>
                            </div>
                            <br/>
                            <div className="label-inline">
                                <input type="radio" id="matraceTxt" name="spani" value="matrace" onChange={e => setSpani(e.target.value)}/><br className="mobile"/>
                                <label htmlFor="matraceTxt">přespím v továrně na matraci</label>
                            </div>
                            <br/>
                            <div className="label-inline">
                                <input type="radio" id="karimatkaTxt" name="spani" value="karimatka" onChange={e => setSpani(e.target.value)}/><br className="mobile"/>
                                <label htmlFor="karimatkaTxt">ulehnu kdekoliv uvnitř na vlastní karimatku</label>
                            </div>
                            <br/>
                            <div className="label-inline">
                                <input type="radio" id="sirakTxt" name="spani" value="sirak" onChange={e => setSpani(e.target.value)}/><br className="mobile"/>
                                <label htmlFor="sirakTxt">nespím a když už tak v autě/pod širákem</label>
                            </div>
                            <br/>
                            <div className="label-inline">
                                <input type="radio" id="odjedeTxt" name="spani" value="odjede" onChange={e => setSpani(e.target.value)}/><br className="mobile"/>
                                <label htmlFor="odjedeTxt">pojedu večer domů</label>
                            </div>
                        </div>
                        <input className="btn-submit" type="submit" name="submit" value="už se těším"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
