'use strict';

// Get the current date and time
const now = new Date();

// Create an options object for formatting the date and time
const options = {
	weekday: 'long', // Full weekday name
	month: 'long', // Full month name
	day: 'numeric', // Day of the month
	year: 'numeric', // 4-digit year
	hour: '2-digit', // 2-digit hours (12-hour format)
	minute: '2-digit', // 2-digit minutes
	second: '2-digit', // 2-digit seconds
	hour12: true, // Use 12-hour format
	timezone: 'EST'
};

// Format the date and time according to the options
const dateTimeFormatter = new Intl.DateTimeFormat('en-US', options);
const formattedDateTime = dateTimeFormatter.format(now);

export default formattedDateTime;
