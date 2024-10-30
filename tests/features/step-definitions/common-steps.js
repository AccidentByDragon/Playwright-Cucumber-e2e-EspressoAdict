
import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';

Given('that I have started the game by navigating to {string}', async function (url) {
  await this.gotoUrl(url);
  // Important: wait for the relevant DOM element(s) to exist
  // - we should choose to wait for an element we expect to only be in the DOM
  //   with correct content/text to verify that the app has fully loaded
  await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]', 1000);
  await this.getWait('.choices ul li:nth-child(2)', 1000);
});

Given('that I navigated to the position {string}', async function (to) {
  await navigateTo(this, to);
});

Given('that my position is {string}', async function (position) { 
  expect(await getWhereIAm(this)).to.equal(position);
});

When('i click the {string} button', async function (button) {  
  await this.page.getByText(button).click();
});

When('i press {string}', async function (pressedKey) {
  console.log(pressedKey)
  await this.page.keyboard.press(pressedKey);
});

Then('my position should be {string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);
});