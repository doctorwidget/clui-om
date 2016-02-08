"""Library of custom test functions for use with Robot.

All functions in the ``__all__`` directory are exposed by default. Inside Robot
they are used in their more-natural-language form, where underscores are
replaced by spaces.

"""
from robot.libraries.BuiltIn import BuiltIn

__all__ = ['contains_all_substrings']


def get_selenium():
   return BuiltIn().get_library_instance('Selenium2Library')


def contains_all_substrings(target, *substrings):
    """Given a target string and a sequence of substrings, confirm that all of 
    the substrings in the list exist in the target string.

    For use as a Robot Framework keyword, so throws a LookupError if any of the
    substrings are missing. Returns the target string if the test passes.

    """
    for s in substrings:
        if s not in target:
              raise LookupError("Could not find {} in {}".format(s, target))
    return target
        
