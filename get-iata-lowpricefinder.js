/*
Get IATA codes in a particular tab in the Low Price Finder page

https://aedad.es/2017/07/04/british-airways-helper-scripts-tools/
*/

$('tr.lpfDestination').each(function(){
    console.log( $(this).attr("data-arrival-city") + ", " );
})

/*
Example output:

WAW,
ZAG,
ZTH,
ZRH,
*/