*** Settings ***
Documentation    Tests of the Alpha (Colored Tiles) page
Resource         resource.robot
Library          CluiOmUtils


*** Variables ***
${ALPHA URL}     http://${SERVER}/page-alpha
${OUTPUT}        css=div.outerbox p
${PALETTES}      css=div.outerbox select
@{PROTOGENIE}    :slate    :navy    :haze    :gold    :tan 
@{OSAKI}         :orange   :umber   :green   :brown   :purple
@{CAMPFIRE}      :green    :cream   :orange  :flame   :brick
@{NYC}           :mauve    :brown   :rust    :sky     :soylent
@{CHEERY}        :lime     :baby    :pink    :red     :pumpkin

*** Test Cases ***
Colored Tile Page Analysis
    Go To    ${ALPHA URL}
    Core Text Should Be As Expected

Colored Tile Choices
    [Setup]    Go To   ${ALPHA URL}
    [Template]      Palette Choices Yield Color Names
    osaki           @{OSAKI}
    protogenie      @{PROTOGENIE}
    campfire        @{CAMPFIRE}
    nyc             @{NYC}
    cheery          @{CHEERY}
    
    
*** Keywords ***
Core Text Should Be As Expected
    Title Should Be    Page Alpha
    Element Text Should Be   css=h1    Colored Tiles


Palette Choices Yield Color Names
   [Arguments]    ${palette}    @{colors}
   Select From List By Value    ${PALETTES}    ${palette}
   ${result}=      Get Text     ${OUTPUT}
   Contains All Substrings   ${result}    @{colors}


