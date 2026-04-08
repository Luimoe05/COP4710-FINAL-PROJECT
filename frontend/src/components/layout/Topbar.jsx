function Topbar({ onMenuToggle }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-toggle" onClick={onMenuToggle}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search students, courses, records..." />
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-btn">
          <i className="fas fa-bell"></i>
          <span className="badge">3</span>
        </button>
        <button className="icon-btn">
          <i className="fas fa-envelope"></i>
          <span className="badge">7</span>
        </button>
        <div className="topbar-divider"></div>
        <div className="topbar-user">
          <span>Welcome back, <strong>Admin</strong></span>
        </div>
      </div>
    </header>
  )
}

export default Topbar
