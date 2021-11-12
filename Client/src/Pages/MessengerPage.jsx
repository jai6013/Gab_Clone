import React from 'react'
import Messanger from '../Components/Messanger/Messanger'
import { Navbar } from '../Components/Navbar/NavBar'
import { Theme } from '../Styles/Theme'

export const MessengerPage = () => {

    return (
        <>
        <Theme>
        <Navbar/>
        <Messanger/>
        </Theme>
        </>
    )
}
