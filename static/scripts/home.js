function validateForm(){
	
	var validType = false;
	var validLength = false;	

	var name = document.getElementById("nameInput").value;
	var species = document.getElementById("speciesInput").value;
	var age = document.getElementById("ageInput").value;
	
	var isNameValidType = validateType(name, 'string');
	var isSpeciesValidType = validateType(species, 'string');
	var isAgeValidType = validateType(age, 'number');

	if ( isNameValidType && isSpeciesValidType && isAgeValidType ){
		console.log ( "name species age valid type");
		validType = true;
	}
	
	if ( validateLength(name) && validateLength(species) && validateLength(age)){
		validLength = true;
	}	

	return validLength && validType;
	
}

function validateType( inputData, type ){
	
	if(type == 'number'){
		return Number( inputData).toString() === inputData;
	}
	else if (type == 'string'){
		return String( inputData) === inputData;
	}
}

function validateLength(inputData){
	
	#return inputData.length > 0;	
}
	

