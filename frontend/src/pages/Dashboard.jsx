import StatsGrid from '../components/dashboard/StatsGrid'
import RecentEnrollments from '../components/dashboard/RecentEnrollments'
import QuickActions from '../components/dashboard/QuickActions'
import UpcomingEvents from '../components/dashboard/UpcomingEvents'

function Dashboard() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Academic Management Portal — Overview</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline">
            <i className="fas fa-download"></i> Export
          </button>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Add New
          </button>
        </div>
      </div>

      <StatsGrid />

      <section className="main-grid">
        <div className="table-card">
          <RecentEnrollments />
        </div>
        <div className="side-panel">
          <QuickActions />
          <UpcomingEvents />
        </div>
      </section>
    </>
  )
}

export default Dashboard
