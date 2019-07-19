import React from 'react'

export default function ContactCard({ contacts }) {
  return (
    <div className='contact-card-wrap'>
      {contacts.map((contact) => (
        <div className='contact-card-box'>
          {/* {contact.id}<br /> */}
          {contact.name}<br />
          {contact.email}<br />
          {contact.address.street}, {contact.address.suite}, {contact.address.city} , {contact.address.zipcode}<br />
          {contact.phone}<br />
          {contact.website}<br />
          {contact.company.name}, {contact.company.catchPhrase}<br />
        </div>
      ))}
    </div>
  )
}