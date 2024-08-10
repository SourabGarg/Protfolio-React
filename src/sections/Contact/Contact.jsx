import React, { useEffect } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzjd8vRngve-uEUvL5Wbo8RfK7_IEeQYQqFrpO36qPeh1piUdVY35igYvcKAgecqp0aKQ/exec';
    const form = document.forms['submit-to-google-sheet'];
    const sendMessage = document.getElementById("submit-button");
    const innerMessage = document.getElementById("message");

    form.addEventListener('submit', e => {
      sendMessage.value = "Sending!";
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          innerMessage.innerHTML = "Message sent successfully!";
          sendMessage.value = "Submit";
          setTimeout(function(){
            innerMessage.innerHTML = "";
          }, 3000);
          form.reset();
        })
        .catch(error => console.error('Error!', error.sendMessage));
    });
  }, []);

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form name="submit-to-google-sheet" action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <div id="send-message"></div> 
        <input className="hover btn" id="submit-button" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
