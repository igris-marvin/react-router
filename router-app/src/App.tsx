import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Services } from "./pages/services/Services"
import { About } from "./pages/about/About"
import { RootLayout } from "./RootLayout"
import { LoginLayout } from "./layout/LoginLayout"
import { Login } from "./pages/login/Login"

const browser_router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} > // enclosing router, specifies a layout o be used
      <Route index element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<LoginLayout />}>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={browser_router}/>
    </>
  )
}

export default App
