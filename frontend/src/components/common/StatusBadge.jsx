const statusMap = {
  active: 'status--active',
  pending: 'status--pending',
  inactive: 'status--inactive',
  'on leave': 'status--inactive',
}

function StatusBadge({ status }) {
  const cls = statusMap[status.toLowerCase()] ?? 'status--inactive'
  return <span className={`status-badge ${cls}`}>{status}</span>
}

export default StatusBadge
