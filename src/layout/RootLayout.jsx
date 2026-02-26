import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <div>
            <NavBar />
            <main>
                <div className="black">
                </div>
                <div className="white"></div>
                <Outlet />
            </main>

        </div>
    )
}

export default RootLayout
