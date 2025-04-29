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
                    <div class="box">
                        <div className="content">
                            <img src={car3} alt="Voiture propre" />
                            <h2>Super Car Wash <br /> <span>Manage your business</span> </h2>
                            <a href="#">Start now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Home