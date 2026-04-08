import { useState } from 'react'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {activePage === 'dashboard' && <Dashboard />}
    </Layout>
  )
}

export default App
