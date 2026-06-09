- software installation
  PowerShell execution policy issue
    step 1:-Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    step 2:-npx playwright install
    step 3:-npx playwright --version
  PowerShell script execution blocked
    step 1:- Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    step 2:-npm init playwright@latest
        or
    step 2:-npx playwright install
    step 3:-npx playwright --version
- playwright (tests/navigation.spec.js)
- navigation functions (tests/navigation.spec.js)
- folder structure & css selectors (tests/xpath.spec.js)
- xpath (tests/xpath.spec.js)
- edit button (tests/edit.spec.js)
- buttons (tests/buttons.spec.js)
- radio button (tests/radiobuttons.spec.js)
- checkbox (tests/radiobuttons.spec.js)
- screenshot, video record (screenshot.spec.js, videorecord.spec.js)
- tables
- dropdown

below sessions are from Nithesh tutor
- video record
- js alert
- dom alert

- iframe (20 may) -- completed
- file upload (21 may) -- completed / revised
- mouse action (22 may) -- 
- keyboard action (23 may)
- drag and drop
- window handling
- tables -- completed
- Assertions

// allure-playwright:
// npm install -D allure-playwright allure-commandline
// to server report:
// npx allure serve allure-results
// debug:
// npx playwright test --debug

// Practise project url:
// https://letcode.in/test
// https://testautomationpractice.blogspot.com/

// Realtime project url:
// https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// https://adactinhotelapp.com/
