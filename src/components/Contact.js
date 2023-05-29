import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mess, setMess] = useState('')

  const [errName, setErrName] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const [errMess, setErrMess] = useState('')

  const handleSubmitContact = (e) => {
    e.preventDefault()

    if (name !== '' && email !== '' && mess !== '') {
      alert('Submit success')
      setName('')
      setEmail('')
      setMess('')
    }

    if (name === '') setErrName('Name is required !')

    if (email === '') setErrEmail('Email is required !')

    if (mess === '') setErrMess('Message is required !')

  }

  return (
    <div className='page-content container-fluid contact'>
      <h2>Contact Us</h2>

      <div className='row'>
        <div className='col-md-6 text-left border-right'>
          <h3>We're here to help you!</h3>
          <p>Have a question, comment, or brilliant idea you'd like to share? Send us a little note below - we love to hear from you and will always reply!</p>
          <div className='d-flex'>
            <div className='col-6'>
              <i className="fas fa-phone"></i>
              <h5>Phone Number</h5>
              <p>Call Us: 800-123-4567</p>
            </div>
            <div className='col-6'>
              <i className="far fa-envelope"></i>
              <h5>Email</h5>
              <p>demo@demo.com</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='col-6'>
              <i className="fas fa-map-marker-alt"></i>
              <h5>Location</h5>
              <p>71 Pilgrim Avenue Chevy Chase, MD 20815, USA</p>
            </div>
            <div className='col-6'>
              <i className="far fa-clock"></i>
              <h5>Open Hours</h5>
              <p>Mon-Fri: 9:00 am - 6:00 pm
                Sat: 9:00 am - 4:00 pm <br />
                Sun: 9:00 am - 2:00 pm <br />
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 text-left'>
          <h3>Do you want to get in touch?</h3>
          <p>Let us know how we can help you.</p>
          <form>
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Name"
                aria-describedby="helpId"
                value={name}
                onChange={e => {
                  setName(e.target.value)
                  if (name !== '')
                    setErrName('')
                }}
              />
              <small>{errName}</small>
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                aria-describedby="helpId"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (email !== '')
                    setErrEmail('')
                }}
              />
              <small>{errEmail}</small>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                placeholder='Message'
                rows="3"
                value={mess}
                onChange={e => {
                  setMess(e.target.value)
                  if (mess !== '')
                    setErrMess('')
                }}
              >
              </textarea>
              <small>{errMess}</small>
            </div>

            <button onClick={handleSubmitContact}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
