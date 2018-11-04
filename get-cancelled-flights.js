/*
Get Cancelled Flights

Get a list of cancelled flights from https://www.britishairways.com/rtad/travel/public/en_gb

https://aedad.es/2018/02/26/british-airways-get-cancelled-flight-information/
*/

$(‘tr.cancelled’).each(function() {
    console.log($(this).children(‘td[headers=flight-header]’).text(), “-“, $(this).children(‘td[headers=from-header]’).text(), “-“, $(this).children(‘td[headers=to-header]’).text(), “- DEP:”, $(this).children(‘td[headers=dep-time-header]’).text().replace(“26 Feb”, ” 26 Feb”))
});