(function () {

"use strict";

var myChem = {};

myChem.chemicalElementNames = {};

myChem.chemicalElements = {};

myChem.getChemicalElementNames = function() {

	jQuery.ajax({
		type: "POST",
		url: "php/getChemicalElementNames.php",
		data: function( Flashcards.byId ) {
			console.log( Flashcards.byId );
		}
		success: function( strChemicalElementNames ) {

			var arChemicalElementNames = strChemicalElementNames.split( "\n" );

			var chemicalElementNames = {};

			for ( var i = 0; i < arChemicalElementNames.length; i++ ) {

				var line = arChemicalElementNames[ i ].split( "\t" );

				var chemicalElementId = line[ 0 ];

				var chemicalElementName = line[ 1 ];

				chemicalElementNames[ chemicalElementId ] = chemicalElementName;

			}

			myChem.chemicalElementNames = chemicalElementNames;

			myChem.htmlChemicalElementNames();

		}
	});

};

myChem.htmlChemicalElementNames = function() {

	var strHtml = "<table><tbody>";

	console.log(myChem.chemicalElementNames);

	for ( var id in myChem.chemicalElementNames ) {
		console.log( id );
    	if ( myChem.chemicalElementNames.hasOwnProperty( id ) ) {

        	strHtml += "<tr><td>" + myChem.chemicalElementNames[ id ] + "</td></tr>";

        }
    }

    strHtml += "</tbody></table>";

	jQuery( "body" ).append( strHtml );

};

myChem.loadPeriodicTableElectronConfigurationChange = function() {

	jQuery.ajax({
		url: "php/getChemicalElements.php",
		success: function( strChemicalElementNames ) {

			//console.log( strChemicalElementNames );

			var arChemicalElements = strChemicalElementNames.split( "\n" );

			var diChemicalElements = {};

			for ( var i = 0; i < arChemicalElementNames.length; i++ ) {

				var line = arChemicalElementNames[ i ].split( "\t" );

				var chemicalElementId = line[ 0 ];

				var chemicalElementName = line[ 1 ];

				chemicalElementNames[ chemicalElementId ] = chemicalElementName;

			}

		}
	});

};

})();