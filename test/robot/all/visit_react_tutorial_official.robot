*** Settings ***
Documentation     Tests of the vanilla react tutorial page.  
Resource          resource.robot

*** Variables ***
${REACT OFFICIAL URL}   http://${SERVER}/react-tut
${REACT OM URL}         http://${SERVER}/react-om-tut
${ALFRED}               Alfred E. Neuman
${NONSENSE}             Spam eggs ham toast beans sausage AND bacon.

*** Keywords ***
Go To React Official Page
     Go To              ${REACT OFFICIAL URL} 

Go To React Om Page
     Go To              ${REACT OM URL}

React Official Page Should Be Open
    Title Should Be    Vanilla React

Heading Should Be As Expected
    Element Text Should Be     css=h1   Sanity Tests for Raw React

Official Page Should Be As Expected
    Locator Should Match X Times    css=h2.commentAuthor    3
    Page Should Contain             Pete Hunt
    Page Should Contain             Jordan Walke
    Page Should Contain             Albert Nicholas Mouse
    Page Should Not Contain         ${ALFRED}
    Page Should Not Contain         ${NONSENSE}

Om Page Should Be As Expected
    # note the wacky difference of h3 here rather than h2
    Locator Should Match X Times    css=h3.commentAuthor    2
    Page Should Contain             S. Nathaniel Fitz
    Page Should Contain             C. Bonacich

Javascript Should Be As Expected
    Page Should Contain Element     css=script[src="/js/react.js"]
    Page Should Contain Element     css=script[src="/js/sanity_react.js"]

Input Author
    [Arguments]    ${author}
    Input Text     commentAuthor    ${author}

Input Comment
    [Arguments]    ${body}
    Input Text     commentText     ${body}

Submit Comment
    Click Button    commentPost

Post New Comment 
    Input Author    ${ALFRED}
    Input Comment   ${NONSENSE}
    Submit Comment

Page Should Have Changed
    Locator Should Match X Times    css=h2.commentAuthor   4
    Element Should Contain          css=input[name="commentAuthor"]     ${EMPTY}
    Element Should Contain          css=input[name="commentText"]       ${EMPTY}
    Page Should Contain             ${ALFRED}
    Page Should Contain             ${NONSENSE}

*** Test Cases ***
React Official Page Analysis
    Go To React Official Page
    React Official Page Should Be Open
    Heading Should Be As Expected
    Official Page Should Be As Expected
    Javascript Should Be As Expected
    Post New Comment
    Page Should Have Changed

React Om Page Analysis
     Go To React Om Page
     Wait Until Page Contains    Nathaniel
     Title Should Be     React + Om = ???
     Element Text Should Be    css=h1     The React Tutorial. Now With More Om.
     Om Page Should Be As Expected


