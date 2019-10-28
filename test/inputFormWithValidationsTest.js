import InputFormWIthValidations from "../pageObjectModel/InputFormWIthValidations";

describe("Input form with validations", () => {
    it("Input form with validations", () => {
        InputFormWIthValidations.open();
        InputFormWIthValidations.firstName.setValue("Zoey");
        InputFormWIthValidations.lastName.setValue("Cakovska");
        InputFormWIthValidations.email.setValue("zoetthedog@gmail.com");
        InputFormWIthValidations.phoneNumber.setValue("0756789");
        InputFormWIthValidations.address.setValue("78 Cannon Street");
        InputFormWIthValidations.city.setValue("London");
        InputFormWIthValidations.state.selectByVisibleText("Georgia");
        InputFormWIthValidations.zipCode.setValue("3244");
        InputFormWIthValidations.websiteDomainName.setValue("ZoeyTheDog");
        InputFormWIthValidations.negativeRadioButton.click();
        InputFormWIthValidations.projectDescription.setValue("Zoey Budalata");
        InputFormWIthValidations.sumbitButton.click();
    });
});