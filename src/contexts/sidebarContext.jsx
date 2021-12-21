import { createContext, useState } from 'react'

const SidebarContext = createContext([{}, () => {}])

function SidebarProvider({ children }) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    const value = {
        isOpenSidebar,
        setIsOpenSidebar,
    }

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

export { SidebarContext, SidebarProvider }
