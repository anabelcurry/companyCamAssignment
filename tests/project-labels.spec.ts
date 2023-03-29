import selectors from '../pages/selectors'
import steps from '../steps/steps'

Feature('projects');

Scenario('test single project label application', async ({ I }) => {
    await steps.signIn('anabelcurry@gmail.com', 'waterOffADucksBack');
    await I.waitUrlEquals('/projects');

    await steps.verifyAndClick(selectors.btnOpenProject('Automation Assignment'));

    // Open label pop up, apply single existing label and close without saving
    // Verify label was NOT applied
    await steps.openLabelPopup();
    await steps.verifyAndClick(selectors.btnLabelByIndex(1));
    await steps.verifyAndClick(selectors.btnCancelLabel);

    await I.dontSeeElement(selectors.activeLabel);
    
    //Open label pop up, apply single existing label and save
    //Verify that label was applied
    await steps.openLabelPopup();
    await steps.verifyAndClick(selectors.btnLabelByIndex(1));
    await steps.verifyAndClick(selectors.btnSaveLabel);

    await I.seeElement(selectors.activeLabel);

    //Open label pop up, apply a second label and close without saving
    //Verify that first label is still applied but second label was NOT
    await steps.openLabelPopup();
    await steps.verifyAndClick(selectors.btnLabelByIndex(2));
    await steps.verifyAndClick(selectors.btnCancelLabel);

    await I.assertEqual(await I.grabNumberOfVisibleElements(selectors.activeLabel), 1)

    //Open label pop up, apply a second label and save
    //Verify both labels are applied
    await steps.openLabelPopup();
    await steps.verifyAndClick(selectors.btnLabelByIndex(2));
    await steps.verifyAndClick(selectors.btnCancelLabel);

    await I.assertEqual(await I.grabNumberOfVisibleElements(selectors.activeLabel), 1)

    //Open label pop up, remove second label without saving
    //Verify that both labels are still applied
    await steps.openLabelPopup();
    await steps.verifyAndClick(selectors.btnLabelByIndex(2));
    await steps.verifyAndClick(selectors.btnSaveLabel);

    I.wait(3) // wait for new label to load
    await I.assertEqual(await I.grabNumberOfVisibleElements(selectors.activeLabel), 2)

    //Open label pop up, remove second label and save
    //Verify that only first label is applied
    await steps.openLabelPopup();
    await steps.verifyAndClick(selectors.btnLabelByIndex(2));
    await steps.verifyAndClick(selectors.btnSaveLabel);

    I.wait(3) // wait for sytstem to catch up (keeps logging as 8 when only 1 visible)
    await I.assertEqual(await I.grabNumberOfVisibleElements(selectors.activeLabel), 1)

    // Open label pop up, remove first label and save
    // Verify that no labels are applied
    await steps.openLabelPopup();
    await steps.verifyAndClick(selectors.btnLabelByIndex(1));
    await steps.verifyAndClick(selectors.btnSaveLabel);

    await I.dontSeeElement(selectors.activeLabel);
});
