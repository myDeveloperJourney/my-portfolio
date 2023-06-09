import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import ProjectCard from '@/components/ProjectCard';
import Form from '@/components/Form';
import projectData from '@/public/project-data';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Daniel Scott's Portfolio Page</title>
        <meta name="description" content="Welcome to Daniel Scott's Portfolio Page; this is a site to showcase skills and projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.homeMain}>
        <section className={styles.pageSection}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Libero, unde? Odit, maiores aliquid est, saepe fugit veniam 
            pariatur magni quasi itaque dolorum sunt repudiandae adipisci, 
            iste expedita voluptatem corporis unde.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Libero, unde? Odit, maiores aliquid est, saepe fugit veniam 
            pariatur magni quasi itaque dolorum sunt repudiandae adipisci, 
            iste expedita voluptatem corporis unde.
          </p>
        </section>
        <section className={`${styles.pageSection} ${styles.skillsSection}`}>
          <h2>Skills</h2>
          <div className={styles.iconsContainer}>
            <Image src="/html5_icon.png" width={64} height={64} alt="html5" className='first'/>
            <Image src="/css3_icon.png" width={64} height={64} alt="css3"/>
            <Image src="/javascript_icon.png" width={64} height={64} alt="javascript"/>
            <Image src="/react_icon.png" width={64} height={64} alt="react"/>
            <Image src="/sass_icon.png" width={64} height={64} alt="sass"/>
            <Image src="/nodejs_icon.png" width={64} height={64} alt="nodejs"/>
            <Image src="/server_icon.png" width={64} height={64} alt="mongodb"/>
            <Image src="/python_icon.png" width={64} height={64} alt="python"/>
          </div>
        </section>
        <section className={styles.pageSection}>
          <h2>Projects</h2>
          <div className={styles.projectsWrapper}>
            {
              projectData.map((project, index) => {
                return (
                  <ProjectCard 
                    src={project.src} 
                    title={project.title} 
                    key={index} 
                  />
                )
              })
            }
          </div>
        </section>
        <section className={styles.pageSection}>
          <h2>Contact</h2>
          <Form />
        </section>
      </main>
    </>
  );
}
