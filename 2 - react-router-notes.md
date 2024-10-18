# New router format

Components:

## RouterProvider:

We use a *RouterProvider* component instead of a *BrowserRouter*

In the RouterProvider component we pass a router component to which is the programmer created *BrowserRouter*

## Creating a BrowserRouter

We introduce a constant binding which will bind the BrowserRouter created using the **createBrowserRouter(createRoutesFromElements(<Route>..{more routes}..<Route/>))**

The first Route wraps all other Routes

```tsx

import { 
    createBrowserRouter,
    Route,
    Link,
    NavLink,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import RootLayout from '../layout/RootLayout.tsx'

//create browser router
const browser_router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}> //enclose routes within a this Route component
            <Route index element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Route>
    )
)

function App() {

    return ( //pass the created browser router to the RouterProvider
        <RouterProvider router={browser_router} />
    );
}

---
//add

export const RootLayout = () => {

    return <>
        <header>
            <nav>
                <h1>Navigation Links</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about"></NavLink>
            </nav>
        </header>

        <main>
            <Outlet /> //where we have the outleet component, it will render the selected routes defined in th createBrowserRoute.
        </main>
    </>
}
```

# Nested Routes

Example:

```tsx

//...

    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />}><Route/>
        <Route path="/about" element={<About />}><Route/>
        <Route path="/sub" element={<SubLayout />}>

            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
        <Route/>
    </Route>
//...

---
```

```tsx

import { Outlet, Link } from 'react-router-dom'

export const SubLayout = () => {

    return (
        <>
            <header>
                <nav>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}


```

# Catch non-existent pages

Under the main Route create another route with path '*', which will catch any and all path whihc are attempted to be accessed but do not exist.

Error pages component from react can also be used for this purpose.

```tsx

//...
    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />}><Route/>
        <Route path="/about" element={<About />}><Route/>
        <Route path="/sub" element={<SubLayout />}>

            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
        <Route/>

        {/* Other path route / Ctach All link */}
        <Route path="*" element={<NotFound />}></Route>
    </Route>
//...

```

```tsx

export const NotFoundLayout = () => {

    return (
        <>
            <main>
                <h2>Error 404, Page not found</h2>
                <p>Go <Link to="/">Home</Link></p>
            </main>
        </>
    )
}

```

# Loaders -> useLoaderData hook

add an attribute loader on a Route that requires data to be fetched before the Component on that Route is loaded. This Route will accept an executable function (not a Component) that fetches said data.

```tsx

{/* ... */}
    <Route 
        path="/listdata" 
        element={<ListData />}
        loader={dataLoader} //pass the function that fetches and returns data, it will executed first before the Component is rendered
    ></Route>
{/* ... */}

```

create an executable function (camelCase) that fetches data a Component in a route needs before it is loaded

```tsx

//loader function
export const dataLoader = async () => {
    // assuming you have an API/json server running to fetch data from
    const response = await fetch("http://localhost:4000/data")

    return response.json()
}

```

catch the fetched data that was fetched by a loader function, use the react-router-dom 'useLoaderData' hook which then that data can be used.

```tsx

import { useLoaderData } from 'react-router-dom'

export const ListData = () => {

    const listData = useLoaderData();

    return (
        <>
            <div>
                {
                    listData.map((item, index) => {
                        return (
                            <>
                                <p key={index}>{item}</p>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}