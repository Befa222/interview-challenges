

const { format, compareAsc } = require('date-fns');








const groupEventsByDay = require('./events')

test('groupEventsByDay', () => {
    expect(groupEventsByDay().map(e=>e.startOfDay).sort(compareAsc)).toEqual(groupEventsByDay())
});



test('moveEvent', () => {});
