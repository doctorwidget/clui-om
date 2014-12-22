*** Settings ***
Documentation     Tests of the vanilla page, and only the vanilla page. 
Force Tags        vanilla
Resource          resource.robot

*** Variables ***
${VANILLA URL}   http://${SERVER}/vanilla
${SPAMIT}        Zugzug
${SPAMMED}       ${SPAMIT}${SPAMIT}${SPAMIT}
${TIMESTAMP PREFIX}   Dynamically created by the Google Closure at:
${OUTPUT CLASS}     css=p[class="vanilla-border"]
${OUTPUT ID}        css=p[id="spamOutput"]

*** Keywords ***
Go To Vanilla Page
     Go To              ${VANILLA URL} 

Vanilla Page Should Be Open
    Title Should Be    Vanilla ClojureScript

Heading Should Exist
    Element Text Should Be     css=h1   Sanity Test For Raw ClojureScript

Dynamic Timestamp Should Exist
    Page Should Contain        ${TIMESTAMP PREFIX}

Spam Should Not Exist Before
    Page Should Not Contain    ${SPAMIT}
    Page Should Not Contain    ${SPAMMED}
    Element Should Contain     css=input[name="spamInput"]   ${EMPTY}

Spam!
   Input Text     spamInput     ${SPAMIT}
   Click Button   spamBtn

Page Should Be Altered As Expected
    Element Should Contain     css=input[name="spamInput"]    ${EMPTY}
    Page Should Contain        ${SPAMMED}
    Page Should Not Contain    ${SPACE}${SPAMIT}${SPACE}
    Page Should Not Contain    ${TIMESTAMP PREFIX}

Output Element Should Have Vanilla Border
    Page Should Contain Element     ${OUTPUT CLASS}
    Page Should Contain Element     ${OUTPUT ID}

Click On Output Element
    Click Element                  ${OUTPUT ID}

Output Element Should Not Have Vanilla Border
    Page Should Not Contain Element    ${OUTPUT CLASS}
    Page Should Contain Element        ${OUTPUT ID}

Check User Agent
    Click Element     css=button[id="agentBtn"]
    ${message}=       Confirm Action            # NOTE!!! Retrieves value!
    Should Be Equal   ${message}      User Agent is: MacIntel 

*** Test Cases ***
Vanilla Page Analysis
    Go To Vanilla Page
    Vanilla Page Should Be Open
    Heading Should Exist
    Dynamic Timestamp Should Exist
    Spam Should Not Exist Before
    Spam!
    Page Should Be Altered As Expected
    Output Element Should Have Vanilla Border
    Click On Output Element
    Output Element Should Not Have Vanilla Border
    Click On Output Element
    Output Element SHould Have Vanilla Border
    Check User Agent
    

