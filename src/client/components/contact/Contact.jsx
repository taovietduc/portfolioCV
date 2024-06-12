import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Liên hệ với mình</h1>
      <form className="contact-form">
        <label>
          Tên của bạn
          <input type="text" placeholder="Nhập tên của bạn" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Nhập email để mình liên hệ lại với bạn" />
        </label>
        <label>
          Lời nhắn
          <textarea placeholder="Bạn có thể nhập lời nhắn và có thể gửi mình cảm nhận về tài liệu ở đây!"></textarea>
        </label>
        <button type="submit">Gửi lời nhắn</button>
      </form>
    </div>
  )
}

export default Contact
