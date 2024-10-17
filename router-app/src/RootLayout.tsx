import { Outlet } from "react-router-dom"
import { Navigation } from "./components/home/Navigation"

export const RootLayout = () => {
    
    return (
        <> {/* //content to renter*/}
            <Navigation />

            <main> {/* //content to be rendered based on chosen link corresponding to the created BrowserRouter routes */}
                <Outlet /> {/* //allows content of chosen link to be rendered */}
            </main>
        </>
    )
}