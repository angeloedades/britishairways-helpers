/*
Get IATA flightpairs with Price in the Low Price Finder page

https://aedad.es/2017/07/04/british-airways-helper-scripts-tools/
*/

$('tr.lpfDestination').each(function(){
    console.log( $(this).attr("data-arrival-city") + " from " + $(this).attr("data-departure-airport") + " for " + $(this).find('span.price').text() );
})

/*
Example output:

ABZ from LHR for £37*
ALC from LGW for £34
AMS from LGW for £37*
*/