# Student Accounts COBOL Application Test Plan

This test plan covers all business logic implemented in the COBOL student accounts application. Use this plan to validate the system with business stakeholders and as a basis for future unit and integration tests in Node.js.

| Test Case ID | Test Case Description                | Pre-conditions                | Test Steps                                                                 | Expected Result                                 | Actual Result | Status (Pass/Fail) | Comments |
|--------------|--------------------------------------|-------------------------------|----------------------------------------------------------------------------|-------------------------------------------------|---------------|--------------------|----------|
| TC01         | View account balance                 | Account exists                | 1. Start app<br>2. Select 'View Balance'                                   | Current balance is displayed                    |               |                    |          |
| TC02         | Credit account with valid amount     | Account exists                | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter valid amount        | Amount is credited, new balance shown           |               |                    |          |
| TC03         | Credit account with invalid amount   | Account exists                | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter invalid amount      | Error message, balance unchanged                |               |                    |          |
| TC04         | Debit account with valid amount      | Account exists, sufficient funds | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter valid amount         | Amount is debited, new balance shown            |               |                    |          |
| TC05         | Debit account with insufficient funds| Account exists, insufficient funds | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount > balance     | Error message, balance unchanged                |               |                    |          |
| TC06         | Debit account with invalid amount    | Account exists                | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter invalid amount       | Error message, balance unchanged                |               |                    |          |
| TC07         | Exit application                     | None                          | 1. Start app<br>2. Select 'Exit'                                            | Application exits gracefully                    |               |                    |          |
| TC08         | Invalid menu selection               | None                          | 1. Start app<br>2. Enter invalid menu option                              | Error message, prompt for valid input           |               |                    |          |

---
Fill in the Actual Result, Status, and Comments after executing each test case.