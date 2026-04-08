const navItems = [
  { id: 'dashboard', icon: 'fas fa-th-large', label: 'Dashboard' },
  { id: 'students', icon: 'fas fa-user-graduate', label: 'Students' },
  { id: 'instructors', icon: 'fas fa-chalkboard-teacher', label: 'Instructors' },
  { id: 'staff', icon: 'fas fa-users-cog', label: 'Staff & Admin' },
  { id: 'grades', icon: 'fas fa-chart-bar', label: 'Grades & Records' },
  { id: 'schedule', icon: 'fas fa-calendar-alt', label: 'Schedule' },
  { id: 'courses', icon: 'fas fa-book-open', label: 'Courses' },
]

function Sidebar({ collapsed, activePage, setActivePage }) {
  return (
    <nav className={`sidebar${collapsed ? ' collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <i className="fas fa-graduation-cap"></i>
          <span>UniDB</span>
        </div>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className={activePage === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                setActivePage(item.id)
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="avatar">
            <i className="fas fa-user"></i>
          </div>
          <div className="user-details">
            <span className="user-name">Admin User</span>
            <span className="user-role">System Admin</span>
          </div>
        </div>
        <a href="#" className="logout-btn">
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
    </nav>
  )
}

export default Sidebar
