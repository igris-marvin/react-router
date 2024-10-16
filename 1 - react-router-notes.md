React is a Single Page Application (SPA)


Normally we would need to send a request to the server for a web page, but with react SPA handles all tof the routing in the browser on the front-end

When a link to a web page is clicked, react-router intercepts that request then swaps in the page that was requested where each page is just a react component defined in the Main file as a route.

# installing react router dom

```bash

> npm i react-router-dom@latest

```

# importing react router dom components

in your app tsx, add react router dom components

```tsx

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

```

BrowserRouter -> A component that wraps our entire web application and allows us to use the router within it

Routes and Route -> These components allows us to setup routes

Link -> this componets allows us to setup links between different components

# Setting up react router

*[ BEFORE ]*

```tsx

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

    return (
        <>
            <div>
                Hello World!
            </div>
        </>
    );
}

export default App

```

by returning a BrowserRouter in the app function we are setting up a route container which will have all out routes listed and each route containing its link/endpoint

*[ AFTER ]*

```tsx

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

    return (
        <BrowseRouter>
            <div>
                <Routes>
                    <Route path="/" element={ {/* <Component />*/} } />
                </Routes>
            </div>
        </BrowseRouter>
    );
}

export default App

```

for the Route component under Routes, add required attributes:

path -> this is the endpoint/path/link to the component/page

element -> wrapped in braces, this will the component/web page to link to

# intercepting page links / avoid sending requests of links to the server

Add an import of *NavLink* from *react-router-dom*

Under *BrowserRouter* add a header element and nest it with a nav element and an open *NavLink* Component with a value inside and pass attribute **to=""** and pass the link/path/endpoint of a Route

```tsx

import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

function App() {

    return (
        <BrowseRouter>
            <header>
                <nav>
                    <NavLink to="/">Home Link</NavLink>
                    <NavLink to="/next">Next Link</NavLink>
                <nav>
            </header>
            <div>
                <Routes>
                    <Route path="/" element={ {/* <Component />*/} } />
                    <Route path="/next" element={ {/* <Component />*/} } />
                </Routes>
            </div>
        </BrowseRouter>
    );
}

export default App

```

