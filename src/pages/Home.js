import Logo from "../components/Logo";
import Nagivation from "../components/Nagivation";

const Home = () => { 
    return (
        <div className="home">
            <Nagivation />
            <Logo />
            <h1>Accueil</h1>            
        </div>
    )
};
export default Home;