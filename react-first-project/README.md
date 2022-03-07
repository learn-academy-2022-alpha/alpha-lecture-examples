# Create React App

Process
- ensure you are in the correct directory
- create a new project
- $ yarn create react-app whatever-you-want-to-name-your-app-folder
- cd into the project
- open the folder in your text editor
- start the project server: $ yarn start
- after the server is started, React will open a new tab in the browser on localhost:3000 automatically
- to stop the server and get back to your file structure: $ control + c

Files of note
- public/index.html
- src/index.js
- src/App.js - where all the coding starts

App.js
- delete all the content of App.js
- replace with a class component

```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    return(
      <>
        <h1>Hello Alpha!</h1>
        <h2>Happy React day!</h2>
      </>
    )
  }
}

export default App
```


Additional Components
- you can make as many additional components
- create a folder called components inside the src folder
- add the basic component pieces - import, class declaration, render, return, fragments, export

```javascript
// src/components/Footer.js

import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return(
      <>
        <p>Crafted by the Alpha Classroom</p>
      </>
    )
  }
}

export default Footer
```

Importing Components
- all additional components must be imported to App.js
- components must be called
- components can be called as many times as you want

```javascript
// src/App.js

import React, { Component } from 'react'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return(
      <>
        <h1>Hello Alpha!</h1>
        <h2>Happy React day!</h2>
        <Footer />
        <Footer />
        <Footer />
        <Footer />
      </>
    )
  }
}

export default App
```
