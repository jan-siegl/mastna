import "./form.scss"

function Form() {
    return (
        <div className="form-wrapper">
            <div className="form-bubble">
                <h2>dejte nám vědět, jestli dorazíte</h2>
                <form>
                    <div className="label-group label-group--text">
                        <label htmlFor="">jméno:</label>
                        <input type="text"/>
                    </div>

                    <div className="label-group label-group--text">
                        <label htmlFor="">email:</label>
                        <input type="text"/>
                    </div>

                    <div className="label-group">
                        <label htmlFor="">osob:</label>
                        <div className="label-inline">
                            <input type="radio" id="1" name="1" value="1"/>
                            <label htmlFor="">1</label>
                        </div>
                        <div className="label-inline">
                            <input type="radio" id="2" name="2" value="3"/>
                            <label htmlFor="">2</label>
                        </div>
                        <div className="label-inline">
                            <input type="radio" id="3" name="3" value="3"/>
                            <label htmlFor="">3</label>
                        </div>
                        <div className="label-inline">
                            <input type="radio" id="4" name="4" value="4"/>
                            <label htmlFor="">4</label>
                        </div>
                        <label htmlFor="">z toho dětí:</label>
                        <div className="label-inline">
                            <input type="radio" id="0" name="0" value="0"/>
                            <label htmlFor="">0</label>
                        </div>
                        <div className="label-inline">
                            <input type="radio" id="1" name="1" value="1"/>
                            <label htmlFor="">1</label>
                        </div>
                        <div className="label-inline">
                            <input type="radio" id="2" name="2" value="3"/>
                            <label htmlFor="">2</label>
                        </div>
                        <div className="label-inline">
                            <input type="radio" id="3" name="3" value="3"/>
                            <label htmlFor="">3</label>
                        </div>
                    </div>

                    <div className="label-group">
                        <label htmlFor="">jsem:</label>
                        <div className="label-inline">
                            <input type="radio" id="1" name="1" value="1"/>
                            <label htmlFor="">vegetarián</label>
                        </div>
                        <div className="label-inline">
                            <input type="radio" id="2" name="2" value="3"/>
                            <label htmlFor="">vegan</label>
                        </div>
                        <div className="label-inline">
                            <input type="radio" id="3" name="3" value="3"/>
                            <label htmlFor="">všežravec</label>
                        </div>
                    </div>

                    <div className="label-group">
                        <label htmlFor="">rád:</label>
                        <div className="label-inline">
                            <input type="radio" id="0" name="0" value="0"/><br className="mobile"/>
                            <label htmlFor="">zajistím si lůžko v nedalekém penzionu</label>
                        </div><br/>
                        <div className="label-inline">
                            <input type="radio" id="1" name="1" value="1"/><br className="mobile"/>
                            <label htmlFor="">přespím v továrně na posteli</label>
                        </div><br/>
                        <div className="label-inline">
                            <input type="radio" id="2" name="2" value="3"/><br className="mobile"/>
                            <label htmlFor="">přespím v továrně na matraci</label>
                        </div><br/>
                        <div className="label-inline">
                            <input type="radio" id="3" name="3" value="3"/><br className="mobile"/>
                            <label htmlFor="">ulehnu kdekoliv uvnitř na vlastní karimatku</label>
                        </div><br/>
                        <div className="label-inline">
                            <input type="radio" id="3" name="3" value="3"/><br className="mobile"/>
                            <label htmlFor="">nespím a když už tak v autě/pod širákem</label>
                        </div><br/>
                        <div className="label-inline">
                            <input type="radio" id="3" name="3" value="3"/><br className="mobile"/>
                            <label htmlFor="">pojedu večer domů</label>
                        </div>
                    </div>
                    <input className="btn-submit" type="submit" value="už se těším"/>
                </form>
            </div>
        </div>
    );
}

export default Form;
