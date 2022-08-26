import React from "react";
import ContactItemImage from "./ContactItemImages";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton";

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton onDelete={onDelete} id={id} />
    </div>
  );
}

export default ContactItem;
