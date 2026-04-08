function StatCard({ color, icon, label, value, change, changeType }) {
  return (
    <div className={`stat-card stat-card--${color}`}>
      <div className="stat-card__icon">
        <i className={icon}></i>
      </div>
      <div className="stat-card__info">
        <span className="stat-card__label">{label}</span>
        <h2 className="stat-card__value">{value}</h2>
        <span className={`stat-card__change ${changeType}`}>
          {changeType === 'positive' && <i className="fas fa-arrow-up"></i>}
          {changeType === 'neutral' && <i className="fas fa-minus"></i>}
          {changeType === 'negative' && <i className="fas fa-arrow-down"></i>}
          {' '}{change}
        </span>
      </div>
    </div>
  )
}

export default StatCard
