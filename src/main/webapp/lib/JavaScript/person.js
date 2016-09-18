// person.js

// Definition of fields to collect person data
// Definition of Person data structure
// Save functionality

var person = {
				givenName: "",
				familyName: "",
				addressLine1: "",
				addressLine2: "",
				suburb: "",
				state: "",
				country: ""
			};

function Person(givenName, familyName, addressLine1, addressLine2, suburb, state, country) {
	
	// Template for person object, consisting of a name and an address
	
	this.name = {
			givenName, familyName
	}
	
	this.address = {
			addressLine1, addressLine2, suburb, state, country
	}
	
	this.print = function() {
		console.log("Record Saved");
		console.log("Name: ");
		
		// Given Name field is not mandatory, so ensure name details are formatted
		// correctly if it is not provided
		
		if (this.name.givenName)
		{
			console.log(this.name.givenName + " " + this.name.familyName);
		}
		else
		{
			console.log(this.name.familyName);
		}
		console.log("Address: ");
		console.log(this.address.addressLine1);
		console.log(this.address.addressLine2);
		console.log(this.address.suburb);
		console.log(this.address.state);
		console.log(this.address.country);
	}
};

function save() {

	// Saves the record (print details to console)
	
	var savedGivenName = document.getElementById("givenName");
	var savedFamilyName = document.getElementById("familyName");
	var savedAddressLine1 = document.getElementById("addressLine1");
	var savedAddressLine2 = document.getElementById("addressLine2");
	var savedAddressSuburb = document.getElementById("suburb");
	var savedAddressState = document.getElementById("state");
	var savedAddressCountry = document.getElementById("country");
	
	// Check for missing mandatory fields.
	// If found, display alert and prevent save
	
	if (!savedFamilyName.value)
	{
		alert("Please enter the persons family name.");
		return;
	}
	
	if (!savedAddressLine1.value)
	{
		alert("Please enter the first line of the persons address.");
		return;
	}
	
	if (!savedAddressSuburb.value)
	{
		alert("Please enter the persons address suburb.");
		return;
	}
	
	if (!savedAddressState.value)
	{
		alert("Please enter the persons address state.");
		return;
	}
	
	if (!savedAddressCountry.value)
	{
		alert("Please enter the persons address country.");
		return;
	}
	
	var personSaved = new Person(savedGivenName.value, savedFamilyName.value, savedAddressLine1.value, savedAddressLine2.value, 
			                     savedAddressSuburb.value, savedAddressState.value, savedAddressCountry.value);
	
	personSaved.print();
	alert("Record saved.  Check the Javascript console.")
	
	savedGivenName.value = '';
	savedFamilyName.value = '';
	savedAddressLine1.value = '';
	savedAddressLine2.value = '';
	savedAddressSuburb.value = '';
	savedAddressState.value = '';
	savedAddressCountry.value = '';
	
};
