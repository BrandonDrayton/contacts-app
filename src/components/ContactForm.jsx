import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [contactArray, setContactArray] = useState([{ name: "Bryan", email: "b@b.com", phone: "111-111-1111", street: "123 Made up street", city: "Whoseville", state: "LOL", zip: "12312", showContact: false }]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactArray([...contactArray, { name, email: email, phone: phone, street: street, city: city, state: state, zip: zip, showContact: showContact }]);
  };
  const sortedContacts = contactArray.sort((a, b) => a.name - b.name)
  console.log(sortedContacts)
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <h1>Contact Form</h1>
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div >
        <div>
          <label label htmlFor="email">
            E-mail:
          </label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div >
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="phone" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        </div >
        <div>
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" name="street" value={street} onChange={(e) => setStreet(e.target.value)}></input>
        </div >
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}></input>
        </div >
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)}></input>
        </div >
        <div>
          <label htmlFor="zip">Zip:</label>
          <input type="number" id="zip" name="zip" value={zip} onChange={(e) => setZip(e.target.value)}></input>
        </div >
        <div>
          <button type="submit">Submit</button>
        </div >
      </form >
      <div>
        <h3>{contactArray.sort((a, b) => a.name.localeCompare(b.name)).map((contact, i) => {
          return (
            <div key={i} id={i + 1}>
              <button type="submit" onClick={() => setShowContact(true)}>More Details</button>
              {console.log(contact)}
              {!showContact ? <div  >
                <li>{contact.name}</li>
                <li>{contact.city}</li>
                <li>{contact.state}</li>
              </div> : <div >
                <li>{contact.name}</li>
                <li>{contact.email}</li>
                <li>{contact.phone}</li>
                <li>{contact.street}</li>
                <li>{contact.city}</li>
                <li>{contact.state}</li>
                <li>{contact.zip}</li>
              </div>}
            </div>
          )
        })}
        </h3>
      </div>
    </div >
  );
}
export default ContactForm;