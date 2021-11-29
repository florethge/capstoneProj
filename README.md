## Capstone Project for QA Wizeline Bootcamp
#### Author: Floreth Gonzalez

### Pre-requisites
1. Node.js (latest)
2. Web browser (of your choice: Chrome, Firefox, Safari)

### Project Setup
1. Clone *capstoneProj* repository
2. Go to the repository folder 
```
cd capstoneProj
```
3. Create a *.env* file with the following variables:
```
EMAIL = a_valid_email@email.com
PASSWORD = a_valid_password
```
4. Run:
```
npm install
```

### Dependencies
- dotenv
- randomstring
- eslint
- eslint plugin testcafe
- testcafe reporter html

### Scripts
| Script Name|Description|
|----------|:-------------|
| test-login-chrome |Runs all tests from *Login feature tests* fixture on a Chrome instance.|
| test-addTasks-chrome |Runs all tests from *Add new task* fixture on a Chrome instance.|
|test-addProject-chrome|Runs all tests from *Add new project* fixture on a Chrome instance.|
|test-login-headless|Runs all tests from *Login feature tests* fixture in parallel on Chrome and Firefox instances using headless mode.|   
|test-all-chrome|Runs all tests on a Chrome instance.|  
|test-allReport-chrome|Runs all tests on a Chrome instance generating an HTML Test Report.|   
|test-smoke-chrome|Run all smoke tests on a Chrome instance.|  
