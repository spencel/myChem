var myChem = {};

myChem.chemicalElementNames = undefined;

myChem.chemicalElements = undefined;

myChem.getChemicalElementNames = function() {

	jQuery.ajax({
		url: "php/getChemicalElementNames.php",
		success: function( strChemicalElementNames ) {

			console.log( typeof strChemicalElementNames );

			var arChemicalElementNames = strChemicalElementNames.split( "\n" );

			var chemicalElementNames = {};

			for ( var i = 0; i < arChemicalElementNames.length; i++ ) {

				var line = arChemicalElementNames[ i ].split( "\t" );

				var chemicalElementId = line[ 0 ];

				var chemicalElementName = line[ 1 ];

				chemicalElementNames[ chemicalElementId ] = chemicalElementName;

			}

			myChem.chemicalElementNames = chemicalElementNames;

		}
	});

}

function main() {

	myChem.getChemicalElementNames();

}