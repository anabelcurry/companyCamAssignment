# CompanyCam Automation Project

This repo contains a technical assignment for my CompanyCam application:

Create a free trial account to pick a page or workflow of your choice and write automation to verify something within that page or workflow is working as expected. This is purposely a bit vague, allowing your creativity to shine. No need to spend too much time on the project. It's just something for us to start the conversation with.

My chosen workflow is project label application.

## Project Label Application Verification

Single label application/removal:

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

Multiple label application/removal:

- Open existing project
- Open label pop up, apply all available preexisting labels and close without saving
- Verify that no labels were applied
- Open label pop up, apply all available preexisting labels and save
- Verify that all labels were applied

Unique label application/removal:

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
- ... This scenario is too complex for the time frame of this assignment.
