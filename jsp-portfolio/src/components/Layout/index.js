import './index.scss'
import Header from '../Header';
import Footer from '../Footer';


const Layout = () => {
    return (
      <>
        <Header />
        <br></br>

        <div className="home-page">
          <div className="text-zone">
            <h2>Hi, <br /> I'm Jacob
            </h2>
            <br></br>
            <h1>Fullstack Web Developer</h1>
          </div>
          
        </div>
        <br></br>
        <Footer />
      </>
    )
}

export default Layout