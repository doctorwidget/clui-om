*** Settings ***
Documentation    Tests of the demo page showing Kioo templating with Om.
Resource         resource.robot


*** Variables ***
${KIOO URL}    http://${SERVER}/kioo-om-tut
${KIOO FRAG}   css=div[id='kioo-other-frag']

*** Test Cases ***
Kioo Demo Page Analysis
    Go To      ${KIOO URL}
    Core Text Should Be As Expected
    Popup Link Should Work As Expected   home   home
    Popup Link Should Work As Expected   next   next
    Hover Div Should Work As Expected
    Toggle Button Should Work As Expected

*** Keywords ***
Core Text Should Be As Expected
    Title Should Be   Kioo
    Element Text Should Be    css=h1   Enlive Style Templating For React
    Element Text Should Be    css=p[id='output']    SPARTA
    Element Text Should Be    css=div.content       Hello World

Popup Link Should Work As Expected
    [Arguments]   ${link text}   ${popup text}
    Click Link    ${link text}     # defaults to visible text within <a> only
    ${msg}=       Confirm Action   # closes popup, saves message
    Should Be Equal  ${msg}    ${popup text}

Hover Div Should Work As Expected
    # the hover div should start out with no class attribute
    ${initial}=    Get Element Attribute    ${KIOO FRAG}@class
    Should Be Equal    ${initial}           ${EMPTY}
    # the hover div should gain class attributes when hovered over
    Mouse Over      ${KIOO FRAG}
    Sleep          10ms
    ${hovering}=   Get Element Attribute    ${KIOO FRAG}@class
    Should Be Equal    ${hovering}         gold vanilla-border


Toggle Button Should Work As Expected
    Click Button    toggle   # when in doubt, defaults to id, name or value
    Element Text Should Be   css=p[id='output']    ATHENS
    Click Button    toggle
    Element Text Should Be   css=p[id='output']    SPARTA



