var myChem = {};

myChem.getChemicalElementNames = function() {

	jQuery.ajax({
		url: "php/getChemicalElementNames.php",
		success: function( data ) {

			myChem.chemicalElementNames = data;

		}
	});

	//return chemicalElementNames;
}