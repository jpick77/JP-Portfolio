import Algor from '../images/music.png'
import Dog from '../images/dog.png'
import Password from '../images/password.png'
import Weather from '../images/weather.png'
import Quiz from '../images/quiz.png'
import Work from '../images/work.png'
import './index.css'
import Footer from '../Footer'



import Header from '../Header'

const Project = () => {
    return (
        <>
            <Header />
            <br></br>

            <div className="container-project">
                
                <h1 className="project">Projects</h1>
                
            </div>

            <div className="project-pics">
            <a href="https://teamirteklu.github.io/Algorhythyms-Project/" target='blank' >
                {/* Algorhythyms */}
                <img className="pic" src={Algor} alt=''></img>
                </a>
                <a href="https://stark-meadow-18260.herokuapp.com/" target='blank' >
                {/* Algorhythyms */}
                <img className='pic' src={Dog} alt=''></img>
                </a>
                <a href="https://jpick77.github.io/Password-Generator/" target='blank' >
                {/* Algorhythyms */}
                <img className='pic' src={Password} alt=''></img>
                </a>
                <a href="https://jpick77.github.io/Weather-App/" target='blank' >
                {/* Algorhythyms */}
                <img className='pic' src={Weather} alt=''></img>
                </a>
                <a href="https://jpick77.github.io/Web-Quiz/" target='blank' >
                {/* Algorhythyms */}
                <img className='pic' src={Quiz} alt=''></img>
                </a>
                <a href="https://jpick77.github.io/Work-Schedule/" target='blank' >
                {/* Algorhythyms */}
                <img className='pic' src={Work} alt=''></img>
                </a>

            </div>

            <Footer />
            
        </>
    )
}


export default Project