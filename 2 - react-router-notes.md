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














