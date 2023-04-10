const nextYear = new Date().getFullYear() + 1;
const myCalender = new CalendarPicker('#myCalendarWrapper', {
   // If max < min or min > max then the only available day will be today.
   min: new Date(),
   max: new Date(nextYear, 10), // NOTE: new Date(nextYear, 10) is "Nov 01 nextYear"
   locale: 'en-US', // Can be any locale or language code supported by Intl.DateTimeFormat, defaults to 'en-US'
   showShortWeekdays: false // Can be used to fit calendar onto smaller (mobile) screens, defaults to false
});


const currentDateElement = document.getElementById('current-date');

if( currentDateElement!== null){

    currentDateElement.textContent = myCalender.value;
}
const currentDayElement = document.getElementById('current-day');
if(currentDayElement !== null){
    currentDayElement.textContent = myCalender.value.getDay();
}

const currentToDateString = document.getElementById('current-datestring');
if(currentToDateString!== null){
    currentToDateString.textContent = myCalender.value.toDateString();
}
 
 
 
myCalender.onValueChange((currentValue) => {
   currentDateElement.textContent = currentValue;
   currentDayElement.textContent = currentValue.getDay();
   currentToDateString.textContent = currentValue.toDateString();
   console.log(`The current value of the calendar is: ${currentValue}`);
});




