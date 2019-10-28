class InputFormWIthValidations {
    open(){
        browser.url("input-form-demo.html");
    }
    get firstName(){
        return $("[name=\"first_name\"]");
    }
    get lastName(){
        return $("[name=\"last_name\"]")
    }
    get email(){
        return $("[name=\"email\"]")
    }
    get phoneNumber(){
        return $("[name=\"phone\"]")
    }
    get address(){
        return $("[name=\"address\"]")
    }
    get city(){
        return $("[name=\"city\"]")
    }
    get state(){
        return $("[name=\"state\"]")
    }
    get zipCode(){
        return $("[name=\"zip\"]")
    }
    get websiteDomainName(){
        return $("[name=\"website\"]")
    }
    get positiveRadioButton(){
        return $("/html[1]/body[1]/div[2]/div[1]/div[2]/section[1]/form[1]/fieldset[1]/div[10]/div[1]/div[1]/label[1]");
    }
    get negativeRadioButton(){
        return $("/html[1]/body[1]/div[2]/div[1]/div[2]/section[1]/form[1]/fieldset[1]/div[10]/div[1]/div[2]/label[1]");
    }
    get projectDescription(){
        return $("[name=\"comment\"]")
    }
    get sumbitButton(){
        return $(".btn.btn-default");
    }
}
export default new InputFormWIthValidations();