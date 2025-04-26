import Navbar from "../../components/Navbar"
import './Home.css'
import car3 from '../../assets/car3.jpg';
function Home() {
    return (
        <>
            <div className="header">
                <Navbar />
                <div className="header-content">
                    <span>Bienvenue à Super Car Wash</span>
                    <img id="header-content-image" src={car3} alt="Voiture propre" />
                </div>
            </div>
        </>

    )
}
export default Home