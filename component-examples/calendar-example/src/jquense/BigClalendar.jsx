import { Calendar, dateFnsLocalizer ,Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import { useEffect } from 'react'
const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

const Events = [{
  title: 'test event1',
  start:new Date(),
  end: (new Date()).addHours(1),
  allDay: false,
  // resource: ',
},
{
  title: 'test event2',
  start: moment(),
  end: moment(),
  allDay: true,
  // resource: ',
},
{
  title: 'test event3',
  start: moment(),
  end: moment(),
  allDay: true,
  // resource: ',
},
{
  title: 'test event4',
  start: moment(),
  end: moment(),
  allDay: true,
  // resource: ',
}]


export const MyCalendar = (props) => {
  useEffect(()=>{
    console.log(moment())
  })
  return (
    <div>
    <Calendar
      localizer={localizer}
      events={Events}
      startAccessor="start"
      endAccessor="end"
      tooltipAccessor="tooltipAccessor"
      style={{ height: 500 }}
      onSelectEvent={(e)=> alert(e.title)}
      //defaultView= {'month'|'week'|'work_week'|'day'|'agenda'}
      // defaultView= {'month'|'week'}
    />
  </div>
  );
};
