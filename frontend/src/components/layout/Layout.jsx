import { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Layout({ children, activePage, setActivePage }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main className={`main${collapsed ? ' expanded' : ''}`}>
        <Topbar onMenuToggle={() => setCollapsed((prev) => !prev)} />
        <div className="content">{children}</div>
      </main>
    </>
  )
}

export default Layout
