*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported Selenium2Library.
Library           Selenium2Library

*** Variables ***
${SERVER}         localhost:3000
${BROWSER}        Firefox
${DELAY}          0
${HOME URL}       http://${SERVER}/

*** Keywords ***
Go To Home Page
    [Documentation]         I'm a lumberjack and I'm okay
    Go To            ${HOME URL}  

Home Page Should Be Open
    Title Should Be    Clui-Om Home

Welcome Message Should Exist
    Element Text Should Be    css=h1    Welcome to Clui-Om

