import background from '../assets/background.jpg'
import Button from './Button'

function Showcase() {
    return (
        <div className="showcase">
            <div className="showcase-image"></div>
            <div className="showcase-text">
                <div className="showcase-title">
                    Welcome to Plantopedia
                </div>
                <div className="showcase-sub-title">
                    Keep track of your plants and try to collect them all! 
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Showcase
