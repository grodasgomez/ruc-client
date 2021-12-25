# ruc-client

Library for get persons by their RUC or name from the database of ruc.com.py
## Install

```npm
npm install ruc-client
```

# Usage

```bash
import { getPersons } from 'ruc-client'
const { data, total} = getPersons()
console.log(`There's ${total} persons: -> `, data)
```

# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [funny-commit](https://github.com/gndx/funny-initial-git-commit/)

# License
funny-commit is released under the [MIT License](https://opensource.org/licenses/MIT).