import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='bg-dark pb-3'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='text-center mb-5'>
              <h2 className='display-3 font-weight-bold border-bottom border-light d-inline-block custom-font custom-heading'>
                Contact Me
              </h2>
              <p className='pt-1 custom-paragraph text-center'>
                Submit the form below to get in touch with me.
              </p>
            </div>
            <div className='bg-light p-5 border border-primary rounded-4 shadow-lg'>
              <form action='https://getform.io/f/bolgrrea' method='POST'>
                <div className='mb-4'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    className='form-control form-control-lg'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    className='form-control form-control-lg'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <textarea
                    name='message'
                    rows={3}
                    placeholder='Your Message'
                    className='form-control form-control-lg'
                    required
                  />
                </div>
                <button type='submit' className='btn btn-primary btn-lg text-center w-30'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;