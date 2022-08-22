import "./Style/main.css";
import img1 from "./images/icon-sedans.svg";
import img2 from "./images/icon-suvs.svg";
import img3 from "./images/icon-luxury.svg";
function App()
{
    return (
        <div className="container">
            <div className="preview-card">
                <div className="preview-card-main preview-card-1">
                    <img
                        src={img1}
                        alt="Seden vehicel"
                        className="preview-card-details-image"
                    />
                    <h1 className="preview-card-details-h1">Sedans</h1>
                    <p className="preview-card-details-p">
                        Choose a sedan for its affordability and excellent fuel economy.
                        Ideal for cruising in the city or on your next road trip.
                    </p>
                    <a
                        href="#"
                        className="preview-card-details-link preview-card-details-link--1"
                    >Learn More</a
                    >
                </div>

                <div className="preview-card-main preview-card-2">
                    <img
                        src={img2}
                        alt="Seden vehicel"
                        className="preview-card-details-image"
                    />
                    <h1 className="preview-card-details-h1">SUVs</h1>
                    <p className="preview-card-details-p">
                        Take an SUV for its spacious interior, power, and versatility.
                        Perfect for your next family vacation and off-road adventures..
                    </p>
                    <a
                        href="#"
                        className="preview-card-details-link preview-card-details-link--2"
                    >Learn More</a
                    >
                </div>

                <div className="preview-card-main preview-card-3">
                    <img
                        src={img3}
                        alt="Seden vehicel"
                        className="preview-card-details-image"
                    />
                    <h1 className="preview-card-details-h1">Luxury</h1>
                    <p className="preview-card-details-p">
                        Cruise in the best car brands without the bloated prices. Enjoy the
                        enhanced comfort of a luxury rental and arrive in style.
                    </p>
                    <a
                        href="#"
                        className="preview-card-details-link preview-card-details-link--3"
                    >Learn More</a
                    >
                </div>
            </div>
        </div>

    );
}

export default App;
