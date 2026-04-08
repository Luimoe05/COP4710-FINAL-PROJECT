import StatCard from '../common/StatCard'

const stats = [
  {
    color: 'blue',
    icon: 'fas fa-user-graduate',
    label: 'Total Students',
    value: '1,240',
    change: '12% from last semester',
    changeType: 'positive',
  },
  {
    color: 'purple',
    icon: 'fas fa-chalkboard-teacher',
    label: 'Instructors',
    value: '86',
    change: '4 new this year',
    changeType: 'positive',
  },
  {
    color: 'green',
    icon: 'fas fa-book-open',
    label: 'Active Courses',
    value: '312',
    change: 'Same as last term',
    changeType: 'neutral',
  },
  {
    color: 'orange',
    icon: 'fas fa-clipboard-check',
    label: 'Graduation Rate',
    value: '94.2%',
    change: '2.1% increase',
    changeType: 'positive',
  },
]

function StatsGrid() {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </section>
  )
}

export default StatsGrid
