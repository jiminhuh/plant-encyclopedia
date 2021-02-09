

function Plants() {
    return (
        <div className="plants">
            <div className="plants-form">
                <h3>What's your new plant?</h3>
                <form action="submit">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>
                    <br/>
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" id="date"/>
                    <br/>
                    <label htmlFor="watering">Watering:</label>
                    <br/>
                    <label htmlFor="watering-monday">Monday</label>
                    <input type="checkbox" name="watering" id="watering-monday"/>
                    <label htmlFor="watering-monday">Tuesday</label>
                    <input type="checkbox" name="watering" id="watering-tuesday"/>
                    <label htmlFor="watering-monday">Wednesday</label>
                    <input type="checkbox" name="watering" id="watering-wednesday"/>
                    <label htmlFor="watering-monday">Thursday</label>
                    <input type="checkbox" name="watering" id="watering-thursday"/>
                    <label htmlFor="watering-monday">Friday</label>
                    <input type="checkbox" name="watering" id="watering-friday"/>
                    <label htmlFor="watering-monday">Saturday</label>
                    <input type="checkbox" name="watering" id="watering-saturday"/>
                    <label htmlFor="watering-monday">Sunday</label>
                    <input type="checkbox" name="watering" id="watering-sunday"/>
                    <br/>
                    <input type="button" value="submit"/>
                </form>
            </div>

            <table></table>
        </div>
    )
}

export default Plants
