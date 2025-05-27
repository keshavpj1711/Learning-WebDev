import ContactCard from "./ContactCard";
import contactList from "../contacts";

function Contact() {
  return (
    <div className="flex flex-col gap-2 justify-between grow">
      {/* <ContactCard name="Tom" phone="12353" email="tom@company.com"/>
      <ContactCard name="David" phone="35234" email="dave@2d.com"/>
      <ContactCard name="Biggie" phone="09783" email="bigbuttler@boho.com"/> */}
      <div className="flex gap-2 justify-center">
        {contactList.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            phone={contact.phoneNo}
            email={contact.email}
          />
        ))}
      </div>

      <div className="text-xl flex justify-center">
        Created to learn about map function and arrow function
      </div>
    </div>
  )
}

export default Contact;