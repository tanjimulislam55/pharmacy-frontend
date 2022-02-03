import React, { useState } from 'react'
import Login from './Login/Login'
import Registration from './Registration/Registration'

export default function SignIn() {
    const [openRegistration, setOpenRegistration] = useState(false)
    const [openLogin, setOpenLogin] = useState(true)

    return (
        <div>
            {openRegistration && <Registration setOpenRegistration={setOpenRegistration} setOpenLogin={setOpenLogin} />}

            {openLogin && <Login setOpenRegistration={setOpenRegistration} setOpenLogin={setOpenLogin} />}
        </div>
    )
}
