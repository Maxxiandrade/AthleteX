const registerValidations = (userData)=>{
    let errors = {};
    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = "Email not valid."
    }
    if(!userData.email){
        errors.email = "This field cannot be empty."
    }
    if(userData.email.length > 35){
        errors.email = "The email addres can not have more than 35 characters."
    }

    if(!/\d/.test(userData.password)){
        errors.password = "Must contain a number!"
    }
    if(userData.password.length < 6 ){
        errors.password = "Password must be at least 6 characters long!"
    }
    if(userData.password.length > 10){
        errors.password = "Password cannot be more than 10 characters!"
    }

    return errors
}

export default registerValidations;