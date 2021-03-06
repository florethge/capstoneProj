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
### Project Structure
```
|-- README.md
|-- api
|   |-- capstoneEnviroment.postman_environment.json
|   `-- todoist.json
|-- package-lock.json
|-- package.json
|-- pom
|   |-- data
|   |   |-- constants.js
|   |   `-- roles.js
|   |-- pages
|   |   |-- addProject-page.js
|   |   |-- date-page.js
|   |   |-- inbox-page.js
|   |   |-- login-page.js
|   |   |-- menuFavorites-page.js
|   |   |-- navbar-page.js
|   |   |-- signup-page.js
|   |   `-- task-page.js
|   `-- tests
|       |-- addTask.test.js
|       |-- login.test.js
|       `-- newProject.test.js
`-- report.html
```

### Project Stack
- Node
- Testcafe
- JavaScript
- Newman

### Dependencies
- dotenv
- randomstring
- eslint
- eslint plugin testcafe
- testcafe reporter html
- newman

### Newman Setup
1. Go to the api folder and onto the json file.
```
api/capstoneEnviroment.postman_environment.json
```
2. Modify the following line:
```
"value": "your_own_token",
```

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
|eslint| Run Eslint|
|api-newman-tests| Run Api tests using Newman and Postman|

