document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        initialDate: '2021-09-11',
        eventColor: '#62DE9C',
        allDaySlot: false,
        slotLabelFormat: {
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        },
        slotDuration: '01:00:00',
        customButtons: {
          selectLecturer: {
            text: 'Select Lecturer!',
            click: function() {
              alert('clicked the custom button!');
            }
          },
          selectWeek: {
            text: 'custom!',
            click: function() {
              alert('clicked the custom button!');
            }
          },
          search: {
            text: 'custom!',
            click: function() {
              alert('clicked the custom button!');
            }
          }
        },
        headerToolbar: {
          start: 'prev title next',
          center: '',
          end: 'selectLecturer'
          },
          titleFormat: { year: 'numeric', month: 'long', day: '2-digit' },
        events: [
          {
            title: 'Java Class',
            start: '2021-09-05T06:00:00',
            end: '2021-09-05T08:00:00',
            url: 'http://meet.google.com/', // meeting link
          },
          {
            title: '.NET Lecture',
            start: '2021-09-05T12:00:00',
            end: '2021-09-05T14:00:00',
            url: 'http://meet.google.com/', // meeting link
            color: "#65E3E8"
          },
          {
            title: 'Android Test',
            start: '2021-09-06T09:00:00',
            end: '2021-09-06T12:00:00',
            url: 'http://meet.google.com/', // meeting link
            color: "#65E3E8"
          },
          {
            title: 'UX Research',
            start: '2021-09-07T07:00:00',
            end: '2021-09-07T10:00:00',
            url: 'http://meet.google.com/', // meeting link
            color: "#65E3E8"
          },
          {
            title: 'UI / UX',
            start: '2021-09-07T13:00:00',
            end: '2021-09-07T17:00:00',
            url: 'http://meet.google.com/', // meeting link
          },
          {
            title: 'Java Test',
            start: '2021-09-08T08:00:00',
            end: '2021-09-08T12:00:00',
            url: 'http://meet.google.com/', // meeting link
          },
          {
            title: 'Revision',
            start: '2021-09-09T06:00:00',
            end: '2021-09-09T09:00:00',
            url: 'http://meet.google.com/', // meeting link
          },
          {
            title: '.NET Test',
            start: '2021-09-09T13:00:00',
            end: '2021-09-09T16:30:00',
            url: 'http://meet.google.com/', // meeting link
          },
          {
            title: '.NET Test',
            start: '2021-09-10T09:00:00',
            end: '2021-09-10T16:11:00',
            url: 'http://meet.google.com/', // meeting link
          },
          {
            title: '.NET Test',
            start: '2021-09-11T06:00:00',
            end: '2021-09-11T08:30:00',
            url: 'http://meet.google.com/', // meeting link
          },
        ]
    });
    calendar.render();
});