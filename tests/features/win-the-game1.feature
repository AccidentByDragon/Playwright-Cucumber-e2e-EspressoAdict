Feature: Win the game 1
One way to win the game

  Scenario: At the right place with the right starting values
    Given that I have started the game by navigating to "http://localhost:3000"    
    And that my position is "outside the cafe"

  Scenario: I navigate from outside the Cloud Forest Cafe to a crowded friendly bar   
   
    Given that my position is "outside the cafe"
    And that I navigated to the position "in a crowded bar"
    Then my position should be "in a crowded bar"

  Scenario: I stay at the crowded friendly bar and wait for the bartender to give me a "beer"
    Given that my position is "in a crowded bar"
    When I wait long enough for the description to contain the text "The bartender offers you a can of beer for free"
    Then I should recieve 1 "beer"

  Scenario: I navigate from outside the crowded friendly bar to the guitarist and the sax player
    Given that my position is "in a crowded bar"
    And that I navigated to the position "at the concert"
    Then my position should be "at the concert"

  Scenario: I stay with guitarist and the sax player
    Given that my position is "at the concert"
    When I wait long enough for the description to contain the text "The guitarist shouts out to you"
    Then I should get the option to "Jam with the band"

  Scenario: I choose to jam with the guitarist and the sax player
    Given that my position is "at the concert"
    And I choose to "Jam with the band"
    Then I should recieve 5 "money"

  Scenario: I navigate from the guitarist and the sax player to inside the Cloud Forest Cafe

    Given that my position is "at the concert"
    And that I navigated to the position "inside the cafe"
    Then my position should be "inside the cafe"

  Scenario: I stay at the Cloud Forest Cafe and wait for the barista to call a friend
    Given that my position is "inside the cafe"
    When I wait long enough for the description to contain the text "The barista is in a dark corner phoning a friend"
    Then I should get the option to "Give beer to barista"

  Scenario: I give the barista my beer
    Given that my position is "inside the cafe"
    And I choose to "Give beer to barista"
    Then I should recieve 2 "espressocups"

  Scenario: I buy the third espresso of the day
    Given that my position is "inside the cafe"
    And I choose to "Buy an espresso"
    Then I should recieve 1 "espressocups"

  Scenario: I buy the fourth espresso of the day
    Given that my position is "inside the cafe"
    And I choose to "Buy an espresso"
    Then I should recieve 1 "espressocups"

  Scenario: I buy the fifth espresso of the day
    Given that my position is "inside the cafe"
    And I choose to "Buy an espresso"
    Then I should recieve 1 "espressocups"
    And my position should be "I won"