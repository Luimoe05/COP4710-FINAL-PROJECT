import Card from '../common/Card'
import StatusBadge from '../common/StatusBadge'

const students = [
  { name: 'Alice Johnson', id: 'STU-2024-001', program: 'Computer Science', status: 'Active',   avatarColor: '#6366f1' },
  { name: 'Bob Martinez',  id: 'STU-2024-002', program: 'Mathematics',      status: 'Active',   avatarColor: '#8b5cf6' },
  { name: 'Clara Lee',     id: 'STU-2024-003', program: 'Biology',           status: 'Pending',  avatarColor: '#ec4899' },
  { name: 'David Chen',    id: 'STU-2024-004', program: 'Engineering',       status: 'Active',   avatarColor: '#f59e0b' },
  { name: 'Emily Davis',   id: 'STU-2024-005', program: 'Physics',           status: 'On Leave', avatarColor: '#10b981' },
]

function RecentEnrollments() {
  return (
    <Card
      icon="fas fa-users"
      title="Recent Enrollments"
      headerAction={<a href="#" className="card__link">View All →</a>}
    >
      <table className="data-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>ID</th>
            <th>Program</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>
                <div className="user-cell">
                  <div className="user-cell__avatar" style={{ background: s.avatarColor }}>
                    {s.name[0]}
                  </div>
                  <span>{s.name}</span>
                </div>
              </td>
              <td className="mono">{s.id}</td>
              <td>{s.program}</td>
              <td><StatusBadge status={s.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export default RecentEnrollments
