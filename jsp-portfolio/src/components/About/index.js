import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import Profile from '../images/profile.png'



const About = () => {
    return (
        
    <>
    <Header /> 
    <br></br>
    
    <div className="text-home">
    
        <h1>About Me</h1>

        <img className="about-pic" src={Profile} alt=''></img>
        

    
    
    <p>
               🏆 My name is Jacob Pickron, I am the oldest of three. I was born in Houston
                and raised in San Antonio, Texas. I currently live in beautiful Breckenridge,
                Colorado. My passion outside of coding is football or "soccer" and cheering for 
                the greatest club in the world, Manchetser United. I also enjoy skiing, camping,
                and everything that comes with the outdoor lifestyle. I've really found a passion for coding
                and it has allowed my creative side to shine. I hope you can see that in my projects.
            </p>
    </div>
    <br></br>
        <Footer />
    </>
    )
}

export default About