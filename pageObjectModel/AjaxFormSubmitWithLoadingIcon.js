class AjaxFormSubmitWithLoadingIcon{
    open (){
        browser.url("ajax-form-submit-demo.html");
    }
    get titleFiled(){
        return $("#title");
    }
    get commentFiled(){
        return $("#description");
    }
    get submitButton(){
        return $("#btn-submit");
    }
    get submitControlField(){
        return $("#submit-control").getText();
    }

}

export default new AjaxFormSubmitWithLoadingIcon();