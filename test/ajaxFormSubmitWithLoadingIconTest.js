import AjaxFormSubmitWithLoadingIcon from "../pageObjectModel/AjaxFormSubmitWithLoadingIcon";

describe("Ajax Form Submit with Loading icon Test", () => {
   it("Ajax Form Submit with Loading iconT Test", () => {
        AjaxFormSubmitWithLoadingIcon.open();
        let expected = "Form submited Successfully!";
        AjaxFormSubmitWithLoadingIcon.titleFiled.setValue("Zoey");
        AjaxFormSubmitWithLoadingIcon.commentFiled.setValue("Lepoticata");
        AjaxFormSubmitWithLoadingIcon.submitButton.click();
        browser.pause(1000);
        expect(AjaxFormSubmitWithLoadingIcon.submitControlField).to.equal(expected);

   });
});