// Import Assets
import profile from '../assets/profile.jpeg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Sunny Malhotra" />

            <div className='header__content'>
                <h1>Hi, I'm Sunny Malhotra(sunnymalhotra.eth)</h1>
                <p>Blockchain Developer</p>
                <a href="mailto: sunny.malhotra1304@gmail.com"className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;