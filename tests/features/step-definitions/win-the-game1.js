
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import {
  getMenuChoiceElement,
  checkIfDescriptionContainsString,
  cheatIfNeeded,
  getAllCurrentMenuChoices
} from './helpers.js';

/*Given('that my position is {string}', async function(a){
  // TODO: implement step
});

Given('that I navigated to the position {string}', async function(a){
  // TODO: implement step
});*/

When('I wait long enough for the description to contain the text {string}', async function (partOfDescription) {
  // press wait repeatedly until the description contains a certain text
  while (!await checkIfDescriptionContainsString(this, partOfDescription, true)) {
    // cheat if the health is low, since each wait deteriorates the health
    // and we don't want flaky tests (that fail every once in a while)
    await cheatIfNeeded(this);
    // press wait
    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();
  }
});

Then('I should recieve {float} {string}', async function(amount, recievedObject){
  // TODO: implement step
  if (recievedObject === "money" || recievedObject === "espressocups") {
    let value = +await this.getText(await this.get("." + recievedObject + " .val"));   
     
    expect(value).to.be.above(amount - 1);
  }
  if (recievedObject === "beer") {
    let bagContain = await this.getText(await this.get('.bag-content'));
    expect(await bagContain).to.contain(recievedObject);
  }
  
  
});

Then('I should get the option to {string}', async function(option){
  // TODO: implement step
  //let optionIndex = await this.getText(getAllCurrentMenuChoices(this, option)); 
  let { choices } = await getAllCurrentMenuChoices(this)
  console.log(choices);
  expect(choices).to.contain(option);
});

Given('I choose to {string}', async function(choice){
  // TODO: implement step
  await this.page.getByText(choice, {exact: true}).click();
});