# Ybank Test Assignment
## Requirements
### Security
As authentication was out of the scope, there is no authentication validation on any request. 

### Logic
To avoid overconsuming the API, some simple business rules are also done in the client app, these rules can be find in the module classes, inside the `lib/ybank/models` folder

### Best practices
#### Domain
In order to keep all business logic/rules are outside of the framework files everything that is related to our `domain` is inside the `lib/ybank/` folder

#### Store
Each domain entity has it's own module in the vuex store
#### Components
Each domain entity has it's own related components inside it's own folder

### Tests
The following business rules were tested:

 - No account overspending
 - Accounts balance updated automatically
 - Accounts must exist to make the transaction
 - Transactions must have amount > 0
 - No transactions from the same account to the same account
 
## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
