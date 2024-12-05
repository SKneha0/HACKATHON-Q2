import React from 'react'

function page() {
  return (
    <div >
      <div className='contact'>
        <h1>Contact Me</h1>
      </div>
      <div className='inboxes'>
       <div className='inbox'>
       <input type="text" name="Name" placeholder='Enter your Name' />
        <input type="email" name="Email" placeholder='Enter your Email' />
       </div>
       <div className='subject'>
        <input type="text" name="Subject" placeholder='subject' />
       </div>
       <div className='message'>
        <textarea name="Message" placeholder='Any Message'/>
          </div>
          <div className='bth'>
          <button > Send Message</button>

          </div>
      </div>
    </div>
  )
}

export default page
