
    $("#menu").mmenu({
        "slidingSubmenus": false,
        "extensions": [
            "pagedim-black",
            "theme-dark"
        ],
        "offCanvas": {
            "position": "right"
        }
    });


    $( function() {
        $( "#slider-range-min" ).slider({
            range: "min",
            value: 357,
            min: 1,
            max: 700,
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.value );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
    } );


