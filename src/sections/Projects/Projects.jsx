import styles from './ProjectsStyles.module.css';
import dwarka from '../../assets/2.png';
import trainreaver from '../../assets/3.png';
import unihunt from '../../assets/5.png';
import newshub from '../../assets/6.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dwarka}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Dwarka"
          h4="Live"
          p="Pilgrimage Explorer"
        />
        <ProjectCard
          src={trainreaver}
          link="https://github.com/SourabGarg/IRCTC-Live-Train-Tracking"
          h3="Train Reaver"
          h4="Not Live"
          p="IRCTC Live Tracking"
        />
        <ProjectCard
          src={unihunt}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Uni Hunt"
          h4="Live"
          p="College Explorer"
        />
        <ProjectCard
          src={newshub}
          link="https://github.com/SourabGarg/News-Website"
          h3="News HUb"
          h4="Not Live"
          p="News + Stock + Weather"
        />
      </div>
    </section>
  );
}

export default Projects;
