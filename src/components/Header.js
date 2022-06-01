// Import Assets
import profile from '../assets/profile.jpeg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Sunny Malhotra" />

            <div className='header__content'>
                <h1>Hi, I'm Sunny Malhotra</h1>
                <p>Blockchain Developer</p>
                <td>&nbsp;</td>
                <a href="mailto: sunny.malhotra1304@gmail.com" className="button">sunny.malhotra1304@gmail.com</a>
                <td>&nbsp;</td>
                <a href="https://twitter.com/sunnymalhotra10" className="button">Twitter</a>
                <td>&nbsp;</td>
                <a href="https://www.linkedin.com/in/sunny-malhotra-343b8a30/" className="button">LinkedIn</a>
                <td>&nbsp;</td>
                <a href="https://github.com/sunnymalhotra" className="button">GitHub</a>
            </div>
        </section>
    );
}

export default Header;