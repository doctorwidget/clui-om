*** Settings ***
Documentation     A test suite with a single test for visiting the home page.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file. See resource.robot for the 
...               various resources used in this file. 
Force Tags        Parrot
Default Tags      Lumberjack
Resource          resource.robot

*** Keywords ***
Should Find Expected List
    Locator Should Match X Times    css=ul   1
    Locator Should Match X Times    css=li   14

Should Have Expected Links
    Page Should Contain Link    Vanilla
    Page Should Contain Link    Svg and Om

Should Have Expected Javascript
    Page Should Contain Element    css=script[src="/js/sanity.js"]

*** Test Cases ***
Home Page Analysis
    [Documentation]  Spam eggs toast ham
    # I am a test la la la
    [Tags]           Shrubbery
    Go To Home Page
    Home Page Should Be Open
    Welcome Message Should Exist
    Should Find Expected List  
    Should Have Expected Links
    Should Have Expected Javascript