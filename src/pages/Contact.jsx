import React from "react";
import contactsdata from "../data/contactdata.json";
import ContactItem from "../components/ContactItem";
import Footer from "../components/Footer";

export default function Contact() {
  const ContactsList = contactsdata.map((data) => (
    <ContactItem key={data.id} data={data} />
  ));

  return (
    <div className="container_main" id="contact">
      <div className="container_sub">
        <div className="page_left">
          <h2 className="title">Contact</h2>
          <p>
            Thank you for looking at my portfolio!

            Please get in touch if you think I’m the right person ...
          </p>
        </div>
        <div className="page_right">
          <div className="contact_list">{ContactsList}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
