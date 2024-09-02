import styles from './HeroStyle.module.css';
import heroImg from '../../assets/profile.png'; 
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/Yogesh Resume.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon=theme==='light'? sun:moon;
    const twitterIcon=theme==='light'? twitterLight:twitterDark;
    const githubIcon=theme==='light'? githubLight:githubDark;
    const linkedinIcon=theme==='light'? linkedinLight:linkedinDark;

  return (
  <section id="hero" className={ styles.container }>
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={heroImg} 
            alt="Profile picture of Yogesh" 
        />
        <img
         className={styles.colorMode}
          src={themeIcon} 
          alt="Color mode icon" 
          onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>Yogeshwaran</h1>
        <h2>Fullstack developer</h2>
        <span>
            <a href="https://www.linkedin.com/in/s-yogesh-waran-b25770290/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Yogesh0925" target="_blank">
            <img src={githubIcon} alt="GitHub" />
            </a>
        </span>
        <p className={styles.description}>
        I’m a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. My journey in web development began with a keen interest in creating visually appealing and user-friendly interfaces, which quickly expanded into a deep dive into full-stack development.
        </p>
        <a href={CV} download>
            <button className="hover" >Resume</button>
        </a>
    </div>
  </section>
  ); 
}

export default Hero; 