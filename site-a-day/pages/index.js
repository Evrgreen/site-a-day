import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import projects from '../projects.json';
import ProjectCard from '../components/projectCard';
export default function Home() {
  return (
    <>
      <nav>
        <Link href='/'>
          <a className='logo'>100 Lessons, 100 Days</a>
        </Link>
        <div>
          <Link href='/about'>
            <a>ABOUT</a>
          </Link>

          <a href='https://github.com/Evrgreen/site-a-day'>GITHUB</a>
        </div>
      </nav>
      <header className='heading'>
        <h2>
          Hi, my name's <strong>Robbie!</strong>
        </h2>
        <p>
          This project represents a single goal, to better myself as a
          Web-Developer. To that end I have tasked myself with learning 1 new
          thing about web-development for the nice round number of 100 days.
        </p>
        <h1>
          100 <strong>Lessons</strong>, 100 <strong>Days</strong>
        </h1>
      </header>
      <section className='projects'>
        <div className='project__latest'>
          <Link href='#'>
            <a>Check out my latest Project</a>
          </Link>
        </div>
        <div className='project__old'>
          <ol>
            {Object.entries(projects).map((value, index) => {
              {
                console.log(value);
              }
              return (
                <li>
                  <Link href='/project/[id]' as={'/project/' + value[1].title}>
                    <a>{value[1].title}</a>
                  </Link>
                </li>
              );
            })}
            <li>This Homepage </li>
          </ol>
        </div>
      </section>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          background: #0d1821;
          color: #0c7489;
        }
        .logo {
          margin: 5px 5rem;
          font-weight: 700;
        }
        nav div {
          width: 30%;
          display: flex;
          justify-content: space-around;
        }
        nav div > * {
          margin-top: 5px;
          font-weight: 800;
        }
        .heading {
          background-color: #a8d0db;
          padding: 5rem;
          color: #a37a74;
        }
        h1 {
          font-size: 4rem;
          font-weight: 300;
        }
        h2 {
          font-weight: 400;
        }
        p {
          width: 40%;
        }
        .projects {
          width: 90%;
          margin: 0 auto;
          background: #fcfcfc;
        }
        .project__latest {
          padding: 2rem;
          background: #0d1821;
          color: #0c7489;
        }
        .project__old {
          padding: 1rem 0 1rem 7rem;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);

          font-size: 1.6rem;
        }
        li {
          position: relative;
        }
        li::before {
          content: 'Project';
          position: absolute;
          top: 0;
          left: -7rem;
        }
      `}</style>
    </>
  );
}
