import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const userContact = {
  mail: "alphonse.r.dsouza@gmail.com",
  phone: "918904800738",
  messengerId: "alphonse.dsouza.73",
};

const MAIL_TO = `mailto:${userContact.mail}`;
const WHATSAPP_TO = `https://api.whatsApp.com/send?phone=${userContact.phone}`;
const MESSENGER_TO = `https://m.me/${userContact.messengerId}`;

const contactMedium = [
  {
    id: 1,
    title: "Email",
    subtitle: userContact.mail,
    linkTo: MAIL_TO,
    linkTitle: "Send a message",
    iconView: <MdOutlineEmail className="contact__option-icon" />,
  },
  {
    id: 2,
    title: "WhatsApp",
    subtitle: `+91 **********`,
    linkTo: WHATSAPP_TO,
    linkTitle: "Send a message",
    iconView: <BsWhatsapp />,
  },
  {
    id: 3,
    title: "Messenger",
    subtitle: "Alphonse D'souza",
    linkTo: MESSENGER_TO,
    linkTitle: "Send a message",
    iconView: <RiMessengerLine />,
  },
];

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_g0895jn",
        "template_sr986yr",
        form.current,
        "6KdXeMvKW-c8FqOSR"
      ).then((result) => {
          console.log(result.text);
        },(error) => {
          console.log(error.text);
        }
      );
      //To reset content
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactMedium.map((medium) => {
            return (
              <article className="contact__option" key={medium.id}>
                {medium.iconView}
                <h4>{medium.title}</h4>
                <h5>{medium.subtitle}</h5>
                <a href={medium.linkTo} target="_blank" rel="noreferrer">
                  {medium.linkTitle}
                </a>
              </article>
            );
          })}
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
