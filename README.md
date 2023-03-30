# CompanyCam Automation Project

This repo contains a technical assignment for my CompanyCam application:

## Assignment

"Create a free trial account to pick a page or workflow of your choice and write automation to verify something within that page or workflow is working as expected. This is purposely a bit vague, allowing your creativity to shine. No need to spend too much time on the project. It's just something for us to start the conversation with."

My chosen workflow is project label application, specifically single existing label application. (for step by step break down outline and other possible scenarios, see /outline.md)

## Installing and Running Tests

### Getting Started

Run `git clone https://github.com/anabelocurry/companyCamAssignment.git && cd companyCamAssignment && npm install`

This will clone the repository, download codeceptjs, navigate your terminal to the new repository folder and install node package manager locally

### Running Tests Locally

The default helper for this repo is playwright.

Use codecept.conf.js to run tests with Playwright:

#### Examples

Run _this test_:

`npx codeceptjs run tests/project-labels.spec.ts`

Run _everything_:

`npx codeceptjs run`

### Credits

By Anabel Curry
