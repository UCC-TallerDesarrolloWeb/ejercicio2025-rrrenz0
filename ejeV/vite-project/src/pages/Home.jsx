import yogaImg from "../assets/home/yoga.webp";
import zumbaImg from "../assets/home/zumba.jpg";
import "@styles/Home.scss";

const Home = () => {
    return (
        <>
        <h2>Información del GYM</h2>
        <div className="card-home">
            <div>
                <img src="/home/funcional.jpg" alt="Funcional" />
                <h2>Funcional</h2>
            </div>
            <div>
                <img src="/home/taekwondo.jpg" alt="Taekwondo" />
                <h2>Taekwondo</h2>
            </div>
            <div>
                <img src={yogaImg} alt="Yoga" />
                <h2>Yoga</h2>
            </div>
            <div>
                <img src={zumbaImg} alt="Zumba" />
                <h2>Funcional</h2>
            </div>
        </div>
        </>
    )
}

export default Home;