exports.Validation = (type='string',isRequired=false,field,compareField=null,fieldName,itemLength=null)=>{

    if (isRequired && !field){
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field required!`
    }

    if (type === 'string' && typeof field === 'string'){
        if (field && field.length > 255){
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field max length=255!`
        }
        if (itemLength && field.length > itemLength){
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field max length=${itemLength}!`
        }
    }
    if (type === 'number' && typeof field === 'number'){
        if (field <= 0){
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field value more then 0!`
        }
    }
    if (type === 'password'){
        if (!field || !compareField || field !== compareField){
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field and confirm_password field required and must be same!`
        }
    }
    if (type === 'email' && !ValidateEmail(field)){
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field not valid!`
    }
    if (type === 'array'){
        let success = true
        field.map((item)=>{
            if (item.length > itemLength){
                success = false
            }
        })
        if (!success) {
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field each item length must be less then 4!`
        }
    }

    return ''
}

const ValidateEmail = (email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

