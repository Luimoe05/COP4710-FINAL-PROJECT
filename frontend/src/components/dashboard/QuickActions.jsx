import Card from '../common/Card'

const actions = [
  { icon: 'fas fa-user-plus',     label: 'Add Student' },
  { icon: 'fas fa-file-alt',      label: 'New Report' },
  { icon: 'fas fa-calendar-plus', label: 'Schedule' },
  { icon: 'fas fa-envelope',      label: 'Send Notice' },
]

function QuickActions() {
  return (
    <Card icon="fas fa-bolt" title="Quick Actions">
      <div className="quick-actions">
        {actions.map((action) => (
          <button
            key={action.label}
            className="quick-action-btn"
            onClick={() => alert(`${action.label} clicked`)}
          >
            <i className={action.icon}></i>
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </Card>
  )
}

export default QuickActions
