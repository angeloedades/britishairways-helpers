/*
Gets information from the British Airways low price finder page on a given tab

https://www.britishairways.com/travel/low-price-finder/public/en_gb
*/

/*
Get a list of IATA codes only present in the select tab

Example output:
WAW,
ZAG,
ZTH,
ZRH,
*/
$('tr.lpfDestination').each(function() {
    console.log(
        $(this).attr("data-arrival-airport") + ", "
    );
})

/*
Get a list of IATA codes original and destination pairs only present in the select tab

Example output:
LHR-ABZ, 
LGW-ALC, 
LHR-AMS, 
LGW-AYT,
*/
$('tr.lpfDestination').each(function() {
    console.log(
        $(this).attr("data-departure-airport") + "-" +
        $(this).attr("data-arrival-airport") + ", "
    );
})

/*
Get a list of IATA codes original and destination pairs only present and price in the select tab

Example output:
LHR - ABZ £31
LGW - ALC £29
LHR - AMS £36
LGW - AYT £105
*/
$('tr.lpfDestination').each(function() {
    console.log(
        $(this).attr("data-departure-airport"), "-",
        $(this).attr("data-arrival-airport"),
        $(this).find('span.price').text()
    );
})