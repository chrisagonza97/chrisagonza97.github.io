/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import {
  FaLinkedin,
  FaGithub,
  FaSuitcase,
  FaGraduationCap,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
} from 'react-icons/fa';
import {
  SiRedux,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiJava,
  SiTypescript,
  SiYarn,
} from 'react-icons/si';
// <span className='highlight-yellow'></span>
// <span className='highlight-red'></span>
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        />
        <title>Christopher Gonzalez's site</title>
      </Head>
      <header>
        <div className='header-sub-container'>
          <div className='header-left'></div>
          <div className='header-mid '>
            <div className='empty-div'></div>
            <div className=''>
              <div className='header-content'>
                <img alt='personal image' id='headshot' src='/react_logo.png' />
                <h1 id='my-name'>-Christopher Gonzalez-</h1>
                <h3 id='sub-title'>Frontend Engineer/ Software Engineer</h3>
                <div className='icon-links'>
                  <a
                    href='https://www.linkedin.com/in/christopher-gonzalez-646234186/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaLinkedin size={40} />
                  </a>
                  <a href='https://github.com/chrisagonza97'>
                    <FaGithub size={40} />
                  </a>
                </div>
              </div>
            </div>
            <div className='empty-div'></div>
          </div>
          <div className='header-right'></div>
        </div>
      </header>
      <section className='about-me animated animatedFadeInUp fadeInUp'>
        <h2 className='about-me-title'>About Me</h2>
        <div className='row'>
          <div className='info-grid'>
            <div className='about-left'>
              <p>
                <strong>Full Name:</strong>
                <p className='my-value'>Christopher Gonzalez</p>
              </p>
              <p>
                <strong>E-mail:</strong>
                <p className='my-value'>
                  <span className='highlight-yellow'>
                    chris.a.gonzalez97@gmail.com
                  </span>{' '}
                </p>
              </p>
            </div>
          </div>
          <h2 id='about-me-greeting'>Hello!</h2>
          <p id='about-me-para'>
            My name is Christopher Gonzalez, a{' '}
            <span className='highlight-red'>react</span> front-end developer
            with a strong portfolio. I am well versed in the front-end ecosystem
            and quick to adapt to new technologies that arise.
            <br /> I was a{' '}
            <span className='highlight-red'>Research Assistant</span> for the{' '}
            <span className='highlight-yellow'>
              CSUDH Computer Science Department
            </span>{' '}
            starting October 2019 for two years. I graduated with a{' '}
            <span className='highlight-yellow'>B.S in Computer Science</span> in
            Spring 2020, and did research with Dr. Tang and the Computer Science
            Department from October 2019 to October 2021. Now, my goal is for my
            next role to be a{' '}
            <span className='highlight-yellow'>Frontend/Software Engineer</span>{' '}
            .
          </p>
          <div className='icon-links'>
            <a href='https://www.linkedin.com/in/christopher-gonzalez-646234186/'>
              <FaLinkedin size={40} />
            </a>
            <a href='https://github.com/chrisagonza97'>
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </section>
      <section className='my-resume'>
        <h2 className='my-resume-title animated animatedFadeInUp fadeInUp'>
          My Resume
        </h2>
        <h3 className='my-resume-subtitle animated animatedFadeInUp fadeInUp'>
          Work Experience
        </h3>
        <div className='experience-timeline animated animatedFadeInUp fadeInUp'>
          <div className='timeline-left'>
            <FaSuitcase size={30} />
          </div>
          <div className='timeline-right'>
            <div className='timeline-align-left'>
              <h3 className='timeline-role'>Research Assitant</h3>
              <p className='timeline-time'>October 2019 - October 2021 </p>
              <p className='timeline-description'>
                Participated in an NSF project titled, ”Optimal and Efficient
                Resource Allocation in Policy-Driven Data Centers: A Network
                Flow Approach” with Dr. Bin Tang at{' '}
                <span className='highlight-red'>
                  CSU Dominguez Hills Computer Science Department
                </span>
                <br />
                <span className='highlight-yellow'>
                  Collected, plotted, and analyzed data
                </span>{' '}
                from different algorithms in order to draw conclusions for paper
                submission
                <br />
                Presented progress and ideas for paper as well as relevant
                publications
                <br /> Presented our paper published in{' '}
                <span className='highlight-red'>IEEE ICCCN 2020</span> <br />
                <strong>Key Accomplishments:</strong>
                <ul>
                  <li>
                    Our paper entitled "Throughput Maximization of Virtual
                    Machine Communications in Bandwidth-Constrained Data
                    Centers" was{' '}
                    <span className='highlight-yellow'>published</span> at the
                    IEEE GLOBECOM 2021
                  </li>
                  <li>
                    Our paper entitled "FT-VMP: Fault-Tolerant Virtual Machine
                    Placement in Cloud Data Centers" was{' '}
                    <span className='highlight-yellow'>published</span> in
                    IEEE's International Conference on Computer Communications
                    and Networks 2020
                  </li>
                  <li>
                    Our paper entitled “Performance Comparison of Fault-Tolerant
                    Virtual Machine Placement Algorithms in Cloud Data Centers”
                    was <span className='highlight-yellow'>published</span> at
                    1st Annual Computer Science Conference for CSU
                    Undergraduates (2021)
                  </li>
                  <li>
                    Developed server consolidation algorithm that can turn off
                    up to <span className='highlight-yellow'>40-50%</span> more
                    servers than existing work
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <h3 className='my-resume-subtitle animated animatedFadeInUp fadeInUp'>
          Education
        </h3>
        <div className='experience-timeline animated animatedFadeInUp fadeInUp'>
          <div className='timeline-left'>
            <FaGraduationCap size={30} />
          </div>
          <div className='timeline-right'>
            <div className='timeline-align-left'>
              <h3 className='timeline-role'>
                Bachelor's of Science in Computer Science
              </h3>
              <p className='timeline-time'>
                California State University Dominguez Hills- Spring 2020
              </p>
              <p className='timeline-description'>Cum Laude, 3.58 GPA</p>
            </div>
          </div>
        </div>
        <a
          id='resume-link'
          href='https://docs.google.com/document/d/1uo_zy8z0H4MdOjOcuEIoH76EutBx4PnMtIdrirL9C6c/edit?usp=sharing'
        >
          <h3 className='my-resume-subtitle my-resume-link animated animatedFadeInUp fadeInUp'>
            Link to my Resume
          </h3>
        </a>
      </section>
      <div className='my-skills-container '>
        <section className='my-skills animated animatedFadeInUp fadeInUp'>
          <h2 className='my-skills-title'> My Skills</h2>
          <div className='skill-item-container'>
            <div className='skill-item-pair'>
              <div className='skill-item'>
                <span className='icon-container'>
                  <FaCss3Alt className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>CSS</h3>
                </div>
              </div>
              <div className='skill-item'>
                <span className='icon-container'>
                  <FaHtml5 className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='skill-item-pair'>
              <div className='skill-item'>
                <span className='icon-container'>
                  <SiReact className='skill-item' size={70} />{' '}
                </span>

                <div className='skill-item text-center'>
                  <h3>React</h3>
                </div>
              </div>
              <div className='skill-item'>
                <span className='icon-container'>
                  <SiRedux className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>React-Redux</h3>
                </div>
              </div>
            </div>
            <div className='skill-item-pair'>
              <div className='skill-item'>
                <span className='icon-container'>
                  <SiJavascript className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>Javascript</h3>
                </div>
              </div>
              <div className='skill-item'>
                <span className='icon-container'>
                  <SiNextdotjs className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>Next.js</h3>
                </div>
              </div>
            </div>
            <div className='skill-item-pair'>
              <div className='skill-item'>
                <span className='icon-container'>
                  <FaGithub className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>Github</h3>
                </div>
              </div>
              <div className='skill-item'>
                <span className='icon-container'>
                  <SiJava className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>Java</h3>
                </div>
              </div>
            </div>
            <div className='skill-item-pair'>
              <div className='skill-item'>
                <span className='icon-container'>
                  <FaNpm className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>NPM</h3>
                </div>
              </div>
              <div className='skill-item'>
                <span className='icon-container'>
                  <SiTypescript className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>Typescript</h3>
                </div>
              </div>
            </div>
            <div className='skill-item-pair'>
              <div className='skill-item'>
                <span className='icon-container'>
                  <SiYarn className='skill-item' size={70} />
                </span>

                <div className='skill-item text-center'>
                  <h3>Yarn</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className='my-projects'>
        <div className='my-projects-container'>
          <h2 className='my-projects-title animated animatedFadeInUp fadeInUp'>
            My Projects
          </h2>
          <div className='project-container'>
            <div className='project-background'>
              <div className='logo-image-container'>
                <img
                  alt='reddit logo image'
                  className='logo-image'
                  src='/reddit_logo.png'
                />
              </div>
            </div>
            <div className='project-descript show-on-hover'>
              <h3> Reddit Sortitt</h3>
              <h4>
                A react-redux minimal reddit clone that also allows you to sort
                through posts by specific dates{' '}
                <a
                  href='https://main.d8b12h6h0wuv8.amplifyapp.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live site
                </a>{' '}
                <a
                  href='https://github.com/chrisagonza97/sortitt'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repo
                </a>
              </h4>
            </div>
          </div>
          <div className='project-container'>
            <div className='project-background'>
              <div className='logo-image-container'>
                <img
                  alt='spotify logo image'
                  className='logo-image'
                  src='/spotify_logo.png'
                />
              </div>
            </div>
            <div className='project-descript show-on-hover'>
              <h3> Spotify Jamming</h3>
              <h4>
                A react web app that uses spotify api to make spotify playlists{' '}
                <a
                  href='https://main.d1wgs2guugfl7b.amplifyapp.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live site
                </a>{' '}
                <a
                  href='https://github.com/chrisagonza97/SpotifyJAMMING/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repo
                </a>
              </h4>
            </div>
          </div>
          <div className='project-container'>
            <div className='project-background'>
              <div className='logo-image-container'>
                <img
                  alt='codepen logo image'
                  className='logo-image'
                  src='/codepen_logo.png'
                />
              </div>
            </div>
            <div className='project-descript show-on-hover'>
              <h3> Codepen.io projects</h3>
              <h4>
                An assortment of smaller scale react projects made in codepen{' '}
                <a
                  href='https://codepen.io/chrisagonza97/pens/showcase'
                  target='_blank'
                  rel='noreferrer'
                >
                  Codepen
                </a>{' '}
              </h4>
            </div>
          </div>
        </div>
      </section>
      <div className='contact-me-container'>
        <section className='contact-me'>
          <div className='content'>
            <h1 className='contact-title'>Contact Me</h1>
            <div className='contact-content'>
              <form
                action='mailto:chris.a.gonzalez97@gmail.com'
                method='post'
                id='register'
              >
                <div className='name'>
                  <input
                    className='boxShadow'
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name *'
                    required
                  />
                </div>
                <div className='subject'>
                  <input
                    className='boxShadow'
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='Subject *'
                    required
                  />
                </div>
                <div className='email'>
                  <input
                    className='boxShadow'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email *'
                    required
                  />
                </div>
                <div className='message'>
                  <textarea
                    className='boxShadow'
                    id='message'
                    name='message'
                    placeholder='Message *'
                    required
                  ></textarea>
                  <label id='counter'></label>
                </div>
                <input type='submit' value='Submit' className='submit' />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
