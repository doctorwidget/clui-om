*** Settings ***
Documentation    Tests of the Beta (Card Tricks) page
Resource         resource.robot


*** Variables ***
${BETA URL}     http://${SERVER}/page-beta
${DECK}         css=span.deckCensus   #  shows cards remaining in deck
${HAND}         css=span.numCards     #  shows count of all cards
${CARD}         css=div.cardDisplay span.cardDisplay  # individual card
${DRAW}         Draw A Card           # text for button that draws
${SHUFFLE}      Shuffle Deck          # text for button that shuffles


*** Test Cases ***
Card Tricks Page Analysis
    Go To    ${BETA URL}
    Core Text Should Be As Expected

Draw Some Cards
    Go To    ${BETA URL}
    Click Button  ${DRAW}
    Element Text Should Be          ${DECK}    51
    Element Text Should Be          ${HAND}    1
    Locator Should Match X Times    ${CARD}    1
    Click Button   ${DRAW}
    Element Text Should Be          ${DECK}    50
    Element Text Should Be          ${HAND}    2
    Locator Should Match X Times    ${CARD}    2
    Click Button   ${DRAW}
    Element Text Should Be          ${DECK}    49
    Element Text Should Be          ${HAND}    3
    Locator Should Match X Times    ${CARD}    3
    Click Button   ${DRAW}
    Element Text Should Be          ${DECK}    48
    Element Text Should Be          ${HAND}    4
    Locator Should Match X Times    ${CARD}    4
    Click Button   ${DRAW}
    Element Text Should Be          ${DECK}    47
    Element Text Should Be          ${HAND}    5
    Locator Should Match X Times    ${CARD}    5
    Click Button   ${SHUFFLE}
    Element Text Should Be          ${DECK}    52
    Element Text Should Be          ${HAND}    0
    Locator Should Match X Times    ${CARD}    0
         
    
*** Keywords ***
Core Text Should Be As Expected
    Title Should Be                 Page Beta
    Element Text Should Be          css=h1       Card Tricks
    Element Text Should Be          ${DECK}      52
    Element Text Should Be          ${HAND}      0
    Locator Should Match X Times    ${CARD}      0




