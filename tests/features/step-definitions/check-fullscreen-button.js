import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';
import { expect as playwrightExpect } from 'playwright/test';

/*
Alla Följande steg finns redan i common steps:
Given('that I have started the game by navigating to {string}', async function (url)
Given('that I navigated to the position {string}', async function (to)
Given('that my position is {string}', async function (position)
When('i click the {string} button', async function (button)
*/

Then('the game should go fullscreen', async function () {
  expect(await this.page.getByText("::backdrop")).to.exist;
});

Then('i should exit fullscreen', async function () {
  await this.sleep(500);
  await playwrightExpect(this.page.getByText("Full Screen")).toBeVisible(); //kan vi göra detta istället?
});