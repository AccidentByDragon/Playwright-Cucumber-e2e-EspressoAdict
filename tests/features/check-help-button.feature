Feature: Check help button
  As a user I want to be able to use the help button from any part of the game

  Scenario Outline: The help button works on the first scene
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "<location>"
    And that my position is "<location>"
    When i click the "Help" button
    Then the Help description should appear
    When i click the "Continue" button
    Then the Help description should disappear

    Examples:
      | location            |
      | outside the cafe    |
      | inside the cafe     |
      | on an empty street  |
      | in a crowded bar    |
      | in the country-side |
      | at the concert      |