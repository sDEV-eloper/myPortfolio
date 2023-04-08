import React from 'react'
import './contact.scss'
import Section from '../shared/section/section'
import ContactInfo from './ContactInfo'
import  Form from './form/Form'

function Contact() {
  return (
    <Section
    id='contact'
    title='CONTACT ME'
    background="dark"
    className="contact-section"
    >
<div className="contact-content-wrapper">
    <ContactInfo/>
    <Form/>
</div>
    </Section>
  )
}

export default Contact