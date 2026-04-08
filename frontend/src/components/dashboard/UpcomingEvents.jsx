import Card from '../common/Card'

const events = [
  { day: '15', month: 'Jan', title: 'Spring Semester Begins', location: 'All departments' },
  { day: '22', month: 'Jan', title: 'Faculty Meeting',        location: 'Main Auditorium' },
  { day: '30', month: 'Jan', title: 'Add/Drop Deadline',      location: 'All courses' },
]

function UpcomingEvents() {
  return (
    <Card icon="fas fa-calendar" title="Upcoming">
      <div className="event-list">
        {events.map((event) => (
          <div key={event.title} className="event-item">
            <div className="event-date">
              <span className="event-day">{event.day}</span>
              <span className="event-month">{event.month}</span>
            </div>
            <div className="event-info">
              <strong>{event.title}</strong>
              <span>{event.location}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default UpcomingEvents
