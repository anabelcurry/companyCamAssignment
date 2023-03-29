# Project Label Application Verification

## Prerequisite steps

- login to test account
- navigate to /projects

## Single label application/removal

- Open existing project
- Open label pop up, apply single existing label and close without saving
- Verify that label was NOT applied
- Open label pop up, apply single existing label and save
- Verify that label was applied
- Open label pop up, apply a second label and close without saving
- Veify that first label is still applied but second label was NOT
- Open label pop up, apply a second label and save
- Verify both labels are applied
- Open label pop up, remove second label without saving
- Verify that both labels are still applied
- Open label pop up, remove second label and save
- Verify that only first label is applied

## Multiple label application/removal

- Open existing project
- Open label pop up, apply all available preexisting labels and close without saving
- Verify that no labels were applied
- Open label pop up, apply all available preexisting labels and save
- Verify that all labels were applied

## Unique label application/removal:

- Open existing project
- Open label pop up, click create label
- Enter new label name then click cancel
- Verify new label NOT created
- Click create label again
- Enter new label name and color then click save
- Verify new label created
- Add new label and close without saving
- Verify that no labels were applied
- Open label pop up
- Verify that newly created label is still available
- Apply the newly created label and save
- Verify newly create label is applied
- Open label pop up, and click to edit the new label
- Change label name and color and save
- Verify that label name and color changes have applied
- ... 
