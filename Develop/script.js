$(document).ready(function () {
  // current day w/ moment
  $('#currentDay').text(moment().format('dddd, MMMM Do'));

  // onCLick happens on button click, 
  $('.saveBtn').on('click', function () {

    // setting sibling and parent information
    var time = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();

    // save to localStorage
    localStorage.setItem(time, value);

    // Show alert
    $('.alert').addClass('show');

    // remove 'show' after 5 seconds
    setTimeout(function () {
      $('.alert').removeClass('show');
    }, 5000);
  });

  function hourUpdater() {

    var currentHour = moment().hours();

    // loop through time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // compare current time to block
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  // load saved data from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});
