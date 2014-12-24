"""Demonstration of using a Python module as a custom Robot library."""

from robot.libraries.BuiltIn import BuiltIn

__all__ = ['is_even', 'is_odd', 'matryoshka_tests']

def is_even(somenum):
    """Passes if and only if somenum is an even integer."""
    parsed = int(somenum)  # all keyword inputs are strings on arrival!
    remainder = parsed % 2
    if remainder == 0:
        return True
    else:
        raise Exception("Expected even integer but found: {}".format(somenum))

def is_odd(somenum):
    """Passes if and only if somenum is an odd integer."""
    parsed = int(somenum)  # all keyword inputs are strings on arrival!
    remainder = (1 + parsed) % 2
    if remainder == 0:
         return True
    else:
        raise Exception("Expected odd integer but found: {}".format(somenum))
   
def not_exposed_as_keyword():
    """Robot won't see this because it's not part of __all__."""
    return True

def get_lib():
    s = BuiltIn().get_library_instance('Selenium2Library')
    return s

def matryoshka_tests():
    """Some basic page analysis to be sure we understand how all of the Russian
    dolls are connected: 

    This function is in its own custom Python module
    This module is called and used from within Robot Framework 
    Robot framework uses Selenium2Library (a separate project)
    Selenium2Library uses Selenium Webdriver (yet another separate project)

    See the ``_element_find()`` function inside the Selenium2Library source at
    https://github.com/rtomac/robotframework-selenium2library/blob/master/src/Selenium2Library/keywords/_element.py

    """
    s = get_lib()
    elts = s._element_find("css=li", False, False)
    print("Found {} li elements!".format(len(elts)))
    first = elts[0]
    print("Name of first elt: {}".format(first))
    # each element is an instance of
    # selenium.webdriver.remote.webelement.WebElement, 
    # which means we've finally broken through to the underlying Selenium library!
    # ultimately we're interested in the get_attribute() method of this class
    print("Text of first elt: {}".format(first.text))
    print("Class of first elt: {}".format(first.get_attribute("class")))

    spamdiv = s._element_find("css=div#page-contents div", True, False)
    classes = spamdiv.get_attribute("class")
    print("Class of first child of page contents: {}".format(classes))

    return len(elts)



