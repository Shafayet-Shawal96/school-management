import React from "react";

function ContactForm() {
  return (
    <form id="contact-form" action="assets/php/mail.php" method="post">
      <input name="name" placeholder="Name*" type="text" />
      <input name="email" placeholder="Email*" type="email" />
      <input name="subject" placeholder="Subject*" type="text" />
      <textarea name="message" placeholder="Message"></textarea>
      <button className="submit btn-style" type="submit">
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;
