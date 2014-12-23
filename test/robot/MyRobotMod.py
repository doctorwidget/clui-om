"""
Library module for use with Robot.
Demonstrates the use of a *class* as the main organizational unit. 
If you give the class and the module the exact same name, Robot lets you require 
and use it with one name; there is no need to specify MyRobotMod.MyRobotMod.
"""
from robot.api import logger

class MyRobotMod(object):

    ROBOT_LIBRARY_SCOPE = 'TEST SUITE'

    def __init__(self, tag):
       """Demonstrates requiring a Robot library with an argument."""
       self._tag = tag

    def my_custom_echo(self, msg):
        """Echo a message using the standard Robot library."""
        final_msg = "{}: {}".format(self._tag, msg)
        logger.info(final_msg)
        return final_msg

