import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <h2>About Me</h2>
                <div className="about__cards">
                    {/* {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    } */}
                </div>
                <p>
                I've spent the last decade in the world of Healthcare IT, gaining a wealth of consulting knowledge and a passion for delivering top-notch results. But now, it's time for a new adventure in the fast-paced world of software development. With my problem-solving skills and penchant for innovation, I'm ready to hit the ground running and apply my creative thinking skills on the front lines of this ever-evolving industry. My experience collaborating with clients and guiding them through best practices will be a real asset in my future role.
                </p>
                <p>
                Hi, my name is Jacob. I graduated from a coding bootcamp in April, 2023 as a full-stack web developer. I have an appreciation for both front and backend technologies, frameworks, and best practices, and strive to make a postive impact on humanity through technology.
                </p>
                <p>
                Would love to hear about any potential job opportunites, project ideas, tech community events, or your favorite hiking spot. I look forward to connecting!
                </p>
                {/* <a href={CV} download className='btn primary'>Download CV <HiDownload/></a> */}
            </div>
            <div className="about__right">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About