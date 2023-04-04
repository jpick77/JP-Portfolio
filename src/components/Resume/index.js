import './index.scss'
import ResumePic from '../images/resume.png'
import ResumeDoc from '../Resume/resume.pdf'
import Footer from '../Footer'
import Header from '../Header'

const Resume = () => {
    return (
        <>
            <Header />
            <br></br>

        <h1 className='resume-link'>Resume</h1>
        <div className='resume-pics'>
        <a href={ResumeDoc} target='blank' >
                {/* Algorhythyms */}
                <img className="pic-resume" src={ResumePic} alt=''></img>
                </a>
        </div>
        <br></br>
        <Footer />
        </>
    )
}


export default Resume