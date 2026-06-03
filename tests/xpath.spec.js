// DAY - 3
// folder structure
// .github - it store project automation and settings file.
// node_modules - it store all installed project dependencies / packages.
// playwright-report - it store the html test execution reports.
// test-results - it store test output files like screenshot, video recording and logs
// tests - it store all test script (test files).
// .gitignore - it tells git which files / folders to ignore.
// package-lock.json - it looks exact dependency version for installation.
// package.json - it stores project details and dependency information.
// playwright.config.js - it stores test configuration like browser, url and settings.

// CSS Selector
// Its used to select html elements based on there are id, tags, attribute name.
// faster than xpath
// simple and clear syntax
// works only from parent to child

// syntax:
// id selector - #idValue OR tagName#idValue
// class selector - .classValue OR tagName.classValue 
// attribute selector - [attributeName="attributeValue"] OR tagName[attributeName="attributeValue"]

// HTML (Hyper Text Markup Language)
// DOM (Document object model) 
// HTML DOM
// pink color - tag name
// orange color - attribute name
// blue color - attribute value
// black color - text

// shortcut key to inspect webpage:
// right click and choose "inspect" (webpage)
// CTRL + SHIFT + I or CTRL + SHIFT + C (webpage) 

// shortcut key to find css selector
// CTRL + F

// TASK - use all 3 types of css selector to select the element and share screenshot (use both syntax)

// DAY 4

// XPATH - is used to locate elements in HTML using a path
// two types:
// 1 - Relative xpath = starts with double forward slash "//"
// 2 - Absolute xpath = starts with single forward slash "/". using only in tables.

// Relative xpath
// Types:
// 1 - basic attribute xpath 
    // syntax: //tagName[@attributeName="attributeValue"]
    // definition: // - relative xpath, tagName - pink color, @ - select attribute, attributeName - orange color, attributeValue - blue color.

// 2 - x path with index
    // syntax: (//tagName[@attributeName="attributeValue"])[index]

// 3 - contains xpath
    // syntax: //tagName[contains(@attributeName,'attributeValue')] 
    // contains() - method or function
    // also known as "dynamic xpath"

// 4 - starts-with xpath
    // syntax //tagName[starts-with(@attributeName,'attributeValue')]
    // also known as "dynamic xpath"

// 5 - link text - to get the black color text
    // syntax: //tagName[text()='full_text']
    // text() - method or function
    // also known as "dynamic xpath"

// 6 - partial link text - to get the black color text
    // syntax: //tagName[contains(text(),'half_of_the_text')]
    // contains(), text() - method or function
    // also known as "dynamic xpath"

    