"""Functional tests for the home view of clui-om.

Set up to only work as a *module*, so run from one dir up with the -m flag.

e.g.  from one directory up:

    python -m pytests.test_home

"""
import unittest

from selenium import webdriver

from . import vars as v

class VisitHomeTest(unittest.TestCase):

    def setUp(self):
       self.browser = webdriver.Firefox()
       self.browser.get(v.SERVER)
       self.browser.implicitly_wait(1)  # 1 secon

    def tearDown(self):
       self.browser.quit()

   
    def test_home_page_renders(self):
        """The home page should contain certain values."""

        # the title should be as expected
        self.assertIn('Clui-Om Home', self.browser.title)
        
        # the header should be as expected
        header_text = self.browser.find_element_by_tag_name('h1').text
        self.assertIn('Welcome to Clui-Om', header_text)


    def test_all_links_exist(self):
        """We expect 14 list elements at last count."""
        elts = self.browser.find_elements_by_tag_name('li')
        self.assertEqual(14, len(elts))



if __name__ == '__main__':
      unittest.main()

    
