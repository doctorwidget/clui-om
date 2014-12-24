"""Library of custom test functions for use with Robot.

All functions in the ``__all__`` directory are exposed by default. Inside Robot
they are used in their more-natural-language form, where underscores are
replaced by spaces.

"""
from robot.libraries.BuiltIn import BuiltIn

__all__ = []


def get_selenium():
   return BuiltIn().get_library_instance('Selenium2Library')

