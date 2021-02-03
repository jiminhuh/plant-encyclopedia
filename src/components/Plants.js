

function Plants() {
    return (
        <div className="plants">
            <div className="plants-form">
                <h3>What's your new plant?</h3>
                <form action="submit">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" id="date"/>
                    <label htmlFor="watering">Watering:</label>
                    <input type="checkbox" name="watering" id="watering-monday"/>
                    <input type="checkbox" name="watering" id="watering-tuesday"/>
                    <input type="checkbox" name="watering" id="watering-wednesday"/>
                    <input type="checkbox" name="watering" id="watering-thursday"/>
                    <input type="checkbox" name="watering" id="watering-friday"/>
                    <input type="checkbox" name="watering" id="watering-saturday"/>
                    <input type="checkbox" name="watering" id="watering-sunday"/>
                </form>
            </div>

            <table></table>
        </div>
    )
}

export default Plants
