import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instaLight from '../../assets/insta-dark.svg';
import instaDark from '../../assets/insta-light.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const instaIcon = theme === 'light' ? instaLight : instaDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  
  console.log('Current theme:', theme);
  console.log('Selected Instagram icon:', instaIcon);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sourab
          Garg
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/sourabgarg/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/SourabGarg/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.instagram.com/sourab_garg/" target="_blank">
            <img src={instaIcon} alt="Instagram icon" />
          </a>
        </span>
        <p className={styles.description}>
        A full-stack enthusiast excels primarily in backend, web, and software development.
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
