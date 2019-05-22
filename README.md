
Refactionjs

## Usage
```bash
   $ git clone https://github.com/Jon00000/developer-candidate-test.git
   $ cd developer-candidate-test
   $ npm install
   $ npm run server      #start the fake backend sever, port:3000
   $ npm start           #start front end sever, port:8000 
```

## Architecture after Rebuild
    ├── /mock/           # backend server and db
    ├── /src/            # frontend 
    │ ├── /components/   # UI components
    │ ├── /routes/       # Pages(Containers)
    │ ├── /models/       # Organize models with reducers, effects and subscriptions 
    │ ├── /services/     # Rest API
    │ ├── /utils/        # Tools
    │ ├── route.js       # Routers for SPA
    │ ├── index.js       # Main entrance
    │ ├── index.less    
    │ └── index.html    
    ├── package.json     # Dependencies
    

## Features
* Rebuild the business logic, web serving, and data access, now it is more clear than before.
* Client side development with React and third party UI library.
* Rewrite the code with ES6 features.
* Full support with Weblogic, Babel, linter.
* Better statement management with Redux, Redux-saga
* More reasonable filter logic
* ...


## Contact
#### Developer
* Author: Jon Zhu
* e-mail: zhujundn@gmail.com

