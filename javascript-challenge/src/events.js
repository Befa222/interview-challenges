
/** 
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

const { default: compareAsc } = require("date-fns/compareAsc");
const { default: startOfDay } = require("date-fns/startOfDay");



/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/


let eventsList = [
  { id: 2, 
  startOfDay: '2011-07-29 10:01:11', 
  endOfDay: '2011-07-29 11:01:11', 
  title: 'Practice' }, 

  { id: 1, 
    startOfDay: '2011-08-29 15:10:11',
    endOfDay: '2011-08-29 16:30:11', 
    title: 'Break' },
   
    { id: 3, 
      startOfDay: '2011-08-29 10:10:11',
      endOfDay: '2011-08-29 12:30:11', 
      title: 'Trying challenge' },

      { id: 4, 
        startOfDay: '2011-05-29 2:10:11',
        endOfDay: '2011-05-29 5:30:11', 
        title: 'Gaming' },
  
  
  ];
// console.log(eventsList.map(e=>e.startOfDay).sort(compareAsc))


const groupEventsByDay = (events) => {
 
  if (events = eventsList)
 
  return console.log(events.map(e=>e.startOfDay).sort(compareAsc))
  
};

 module.exports = groupEventsByDay

/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  moveEventToDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/
const moveEventToDay = (eventsByDay, id, toDay) => {
  return eventsByDay;
};
