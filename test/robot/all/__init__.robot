*** Settings ***
Documentation     Shared settings for all of the clui-om tests
Resource          resource.robot
Suite Setup       Browser Setup
Suite Teardown    Browser Teardown


*** Keywords ***    
Browser Setup
    Open Browser     ${HOME URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}

Browser Teardown
    Close All Browsers



