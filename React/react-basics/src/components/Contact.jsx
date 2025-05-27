import ContactCard from "./ContactCard";
import contactList from "../contacts";

function createCard(contact) {
  // Since we have to create too many cards we can do this directly 
  // by calling this fn repetedly using the .map() fn
  return (
   <ContactCard 
   key={contact.id}
   name={contact.name}
   phone={contact.phoneNo}
   email={contact.email}
   /> 
  )
}

function Contact() {
  return (
    <div className="flex gap-2 justify-center grow">
      {/* <ContactCard name="Tom" phone="12353" email="tom@company.com"/>
      <ContactCard name="David" phone="35234" email="dave@2d.com"/>
      <ContactCard name="Biggie" phone="09783" email="bigbuttler@boho.com"/> */}
      {contactList.map(createCard)}
    </div>
  )
}

export default Contact;