import ContactCard from "./ContactCard";
import contactList from "../contacts";

function Contact() {
  return (
    <div className="flex gap-2 justify-center grow">
      {/* <ContactCard name="Tom" phone="12353" email="tom@company.com"/>
      <ContactCard name="David" phone="35234" email="dave@2d.com"/>
      <ContactCard name="Biggie" phone="09783" email="bigbuttler@boho.com"/> */}
      {contactList.map((contact) => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          phone={contact.phoneNo}
          email={contact.email}
        />
      ))}
    </div>
  )
}

export default Contact;