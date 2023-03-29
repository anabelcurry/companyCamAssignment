export = {
    /* Login */
    fieldSignInEmail: '//input[@id="user_email_address"]',
    fieldSignInPassword:'//input[@id="user_password"]',
    btnSignIn: '//input[@type="submit"]',

    /* Project Page */
    btnOpenProject: (projectName: string): string =>
        `//*[text()="${projectName}"]`,
    projectTitle: '//*[@data-testid="projects__title-heading"]', 

    /* Project Labels */
    btnAddLabels: '//*[@data-testid="project__add-labels-button"]',
    btnEditLabels: '//div[@class="ccb-blue-minimal-large"]',
    btnLabelByIndex: (index: number): string => 
        `(//a[@class="toggle-label"])[${index}]`,
    btnSelectedLabel: '//*[@class="selected-label-indicator"]',
    btnSaveLabel: '//*[text()="Save"]',
    btnCancelLabel: '//*[text()="Cancel"]',
    activeLabel: '//*[contains(@class,"project-label label")]'
}