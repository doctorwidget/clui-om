"""Demonstration of using a Python module as a custom Robot library."""

__all__ = ['is_even', 'is_odd']

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
