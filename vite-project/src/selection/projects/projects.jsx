import styles from './project.module.css';
import Viberr from '../../assets/boots.png';
import frushburger from '../../assets/ticket.png';
import ProjectCard from '../../common/projectCard';

function projects(){
    return(
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={Viberr}
            link="https://github.com/Yogesh0925/Landing-Page"
            h3="Carved Rocks WebPage" p="Streaming App"/>
            <ProjectCard src={frushburger}
            link="https://github.com/Yogesh0925/Online-Ticket-Booking"
            h3="Online Ticket Booking" p="Booking App"/>
        </div>
    </section>
    )
}

export default projects