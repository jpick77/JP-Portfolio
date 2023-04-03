import './index.scss'
import React, {useState} from 'react'
import Header from '../Header'
import Footer from '../Footer';


function Contact  () {
    



const [name, setName] = useState('');
const [email,setEmail] =useState('');
const [message, setMessage] =useState('');
const [setIsSubmitting] = useState(false);
const [submitSuccess, setSubmitSuccess] = useState(false);

const handleSumbit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (responseData.success) {
        setSubmitSuccess(true);
      } else {
        console.log(responseData.error);
      }
    
    } catch (error) {
      console.log(error);
    }

    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return <p>Your message wase sent!</p>;
  }

return (
    <>
    
    <Header />
    <br></br>
  <h1 className='contact-header'>Contact</h1>

    <div>
    <form className="contact-form" onSubmit={handleSumbit} >
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
    </div>
    <br></br>
    <Footer />
    </>
  );
}
       
    


export default Contact