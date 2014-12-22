*** Settings ***
Documentation     Tests of the vanilla react tutorial page.  
Resource          resource.robot

*** Variables ***
${REACT OFFICIAL URL}   http://${SERVER}/react-tut
${ALFRED}               Alfred E. Neuman
${NONSENSE}             Spam eggs ham toast beans sausage AND bacon.

*** Keywords ***
Go To React Official Page
     Go To              ${REACT OFFICIAL URL} 

React Official Page Should Be Open
    Title Should Be    Vanilla React

Heading Should Be As Expected
    Element Text Should Be     css=h1   Sanity Tests for Raw React

Page Should Be As Expected
    Locator Should Match X Times    css=h2.commentAuthor    3
    Page Should Contain             Pete Hunt
    Page Should Contain             Jordan Walke
    Page Should Contain             Albert Nicholas Mouse
    Page Should Not Contain         ${ALFRED}
    Page Should Not Contain         ${NONSENSE}

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
    Page Should Be As Expected
    Javascript Should Be As Expected
    Post New Comment
    Page Should Have Changed


