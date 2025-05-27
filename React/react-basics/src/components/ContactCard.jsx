function ContactCard(props) {
  return (
    <div className="flex gap-2">
      <div>
        <img src={props.url} alt="" className="w-20 h-20"/>
      </div>
      <div>
        <div>Contact Info:{props.phone}</div>
        <div>Email: {props.email}</div>
      </div>
    </div>
  )
}

export default ContactCard;