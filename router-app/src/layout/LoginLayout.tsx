import { Outlet } from "react-router-dom"


export const LoginLayout = () => {

    return (
        <>
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}