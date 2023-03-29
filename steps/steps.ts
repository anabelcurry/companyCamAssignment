import selectors from "../pages/selectors";

const {I} = inject();

export = {
    /**
     * Verifies element is visible before clicking
     * @param element 
     */
    verifyAndClick: async function (element) {
        await I.seeElement(element);
        await I.click(element);
     },
    /**
     * Signs user into account
     * @param email 
     * @param password 
     */
    signIn: async function(email, password) {
        // Navigate to project page by way of sign in page
        await I.amOnPage('/projects');

        // Login
        await I.fillField(selectors.fieldSignInEmail, email);
        await I.fillField(selectors.fieldSignInPassword, password);
        await this.verifyAndClick(selectors.btnSignIn);
    },
    openLabelPopup: async function () {
        I.wait(3); // waiting for elements to load
        const isLabelActive =
          (await I.grabNumberOfVisibleElements(selectors.btnAddLabels)) > 0;

        if (isLabelActive) {
            await this.verifyAndClick(selectors.btnAddLabels);
        } else {
            await this.verifyAndClick(selectors.btnEditLabels);
        }
    },
    /**
     * This needs some more thought. I need to decide what I want this function
     * to do. Either it can verify the add button and open the label pop up
     * or it can do the actual adding within the pop up. Scope creep.
     * 
     */
    addFirstAvailableLabelByIndex: async function (index) {
        I.wait(3); //waiting for elements to load
        const isLabelActive =
          (await I.grabNumberOfVisibleElements(selectors.btnAddLabels)) > 0;
        
          console.log(isLabelActive);
        if (isLabelActive) {
            await this.verifyAndClick(selectors.btnAddLabels);
            await this.verifyAndClick(selectors.btnLabelByIndex(index));
        } else {
            index = index + 1;
            console.log(index);
            await this.verifyAndClick(selectors.btnEditLabels);
            await this.verifyAndClick(selectors.btnLabelByIndex(index));
        }
    },
    /**
     * Currently non-functioning. Can't quite figure out why 
     * projectHasActivelabel is returning false evern when the activeLabel
     * element is visible on the page.
     */
    removeActiveLabels: async function () {
        const projectHasActiveLabel = async () => {
            const activeLabelCount = await I.grabNumberOfVisibleElements(
              selectors.activeLabel
            );
            return activeLabelCount > 0;
          };
        
        console.log(await I.grabNumberOfVisibleElements(selectors.activeLabel));
        // is returning 0 when I.seeElement(selectors.ActiveElement) = true
        console.log(await projectHasActiveLabel());
        // is returning false when I.seeElement(selectors.ActiveElement) = true

        if (await projectHasActiveLabel()) {
            await this.verifyAndClick(selectors.btnEditLabels)
            await this.verifyAndClick(selectors.btnSelectedLabel)
            await this.verifyAndClick(selectors.btnSaveLabel)
        } else {
            return
        };
    }

}