import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { events } from '../data/events'

function Calendar() {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="80vh"
        events={events}
      />
    </div>
  )
}

export default Calendar
