import React from 'react'

const validations = (email) => {
    let errors = {}
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.from)){
        errors.from = "Please use a valid email. (e.g., example@example.com)"
    }
    if(email.subject.length > 50){
        errors.subject = "Please limit the subject to 50 characters"
    }
    if(email.text.length > 256){
        errors.text = "Maximum 256 characters allowed for the message"
    }
    return errors
}

export default validations