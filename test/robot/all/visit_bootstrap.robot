*** Settings ***
Documentation    Tests of the demo page showing Om-bootstrap in action
Resource         resource.robot


*** Variables ***
${BOOTSTRAP URL}    http://${SERVER}/bootstrap-demo
${OUTPUT}   css=div.outerbox p
${MENU}     css=ul.dropdown-menu

*** Test Cases ***
Kioo Demo Page Analysis
    Go To      ${BOOTSTRAP URL}
    Core Text Should Be As Expected
    All Buttons Should Echo Their Label
    Menu Should Work As Expected

*** Keywords ***
Core Text Should Be As Expected
    Title Should Be   Bootstrap
    Element Text Should Be    css=h1       Bootstrap UI Components In Om
    Element Text Should Be    ${OUTPUT}    Nothing yet

Button Echoes Label
    [Arguments]     ${label}
    Click Button    ${label}
    Element Text Should Be    ${OUTPUT}   User interacted with BUTTON labeled ${label}
    
All Buttons Should Echo Their Label
    Button Echoes Label    Default
    Button Echoes Label    Primary
    Button Echoes Label    Success
    Button Echoes Label    Info
    Button Echoes Label    Warning
    Button Echoes Label    Danger
    Button Echoes Label    Link

Menu Should Work As Expected
    Element Should Not Be Visible      ${MENU}
    # NOTE that Click Button finds the button based on the visible text
    # even though said visible text is nested inside an inner <span>!!!
    Click Button                       More...
    Element Should Be Visible          ${MENU}

