*** Settings ***
Documentation     A test suite with a single test for visiting the home page.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file. See resource.robot for the 
...               various resources used in this file. 
Force Tags        Parrot
Default Tags      Lumberjack
Resource          resource.robot
Library           MyRobotMod     VisitHomeLogger
Library           AltRobotMod

*** Keywords ***
Should Find Expected List
    Locator Should Match X Times    css=ul   1
    Locator Should Match X Times    css=li   14

Should Have Expected Links
    Page Should Contain Link    Vanilla
    Page Should Contain Link    Svg and Om

Should Have Expected Javascript
    Page Should Contain Element    css=script[src="/js/sanity.js"]

Check Header At
    [Documentation]  Template-friendly keyword.
    [Arguments]      ${page-url}     ${expected-header}
    Go To            ${page-url}
    Element Text Should Be   css=h1    ${expected-header}


*** Test Cases ***
Home Page Analysis
    [Documentation]   Spam eggs toast ham
    # I am a test la la la
    [Tags]           Shrubbery
    Go To Home Page
    Home Page Should Be Open
    Welcome Message Should Exist
    Should Find Expected List  
    Should Have Expected Links
    Should Have Expected Javascript

# Note that we already have single-page test suites for each top-level route,
# which means the next test case is redundnat. However, our goal is to 
# demonstrate some of the amazingly-broad TIMTOWDI power of Robot. 
Templated Sanity Header Checks
    [Documentation]    Use *templated* tests to visit several top-level pages.
    [Template]         Check Header At
    ${HOME URL}              Welcome to Clui-Om
    ${HOME URL}vanilla       Sanity Test For Raw ClojureScript
    ${HOME URL}react-tut     Sanity Tests for Raw React
    ${HOME URL}react-om-tut  The React Tutorial. Now With More Om.


Test Of Custom Library MyRobotMod
    [Documentation]    Shows the My Custom Echo custom keyword in action
    My Custom Echo     Spam eggs ham toast beans bacon jam


Test Of Custom Library AltRobotMod
    Is Odd    5
    Is Even   6

More Custom Keyword Tests
    Go To Home Page
    ${census}=    Matryoshka Tests
    Log           Found ${census} <li> elements via custom keyword

