# Ybank Test Assignment
## Requirements
### Security
As authentication was out of the scope, there is no authentication validation on any request. 

### Logic
All business rules (no account overspending)_is being checked and updating accounts balance after each transaction

### Best practices
This app was done using Domain Driven Design approach, so all business logic/rules are outside of the framework files and can be located in /ybank folder

### Tests
The following business rules were tested:

 - No account overspending
 - Accounts balance updated automatically
 - Accounts must exist to make the transaction
 - Transactions must have amount > 0
 - No transactions from the same account to the same account
