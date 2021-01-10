/*
Get Cancelled Flights

Get a list of cancelled flights from https:/*www.britishairways.com/rtad/travel/public/en_gb
*/

/*
Get a list of only BA flight numbers

Example output: BA0015
*/
$('tr.cancelled').each(function() {
    console.log($(this).children('td[headers=flight-header]').text())
});

/* Get a list of BA flight numbers and destinations

Example output: BA0015 sSIN
*/
$('tr.cancelled').each(function() {
    console.log(
        $(this).children('td[headers=flight-header]').text(),
        $(this).children('td[headers=to-header]').text(),
    )
});

/* Get a list of BA flight numbers and destinations including originating airport

Example output: BA0015 LHR SIN
*/
$('tr.cancelled').each(function() {
    console.log(
        $(this).children('td[headers=flight-header]').text(),
        $(this).children('td[headers=from-header]').text(),
        $(this).children('td[headers=to-header]').text(),
    )
});

/* Get a list of BA flight numbers and destinations including originating airport and time with date

Example output: BA0015 LHR SIN 21:50 10 JAN
*/
$('tr.cancelled').each(function() {
    console.log(
        $(this).children('td[headers=flight-header]').text(),
        $(this).children('td[headers=from-header]').text(),
        $(this).children('td[headers=to-header]').text(),
        $(this).children('td[headers=dep-time-header]').text().substr(0, 5) + " " + $(this).children('td[headers=dep-time-header]').text().substr(5),
    )
});