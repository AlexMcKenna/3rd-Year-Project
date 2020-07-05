//sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
};
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
};
//Question title change function
function changeTitle(){
	var questions = ["1. Given a category ID, name and type, create a new category", 
	"2. Given a category ID, remove the record for that category",
	"3. Produce a summary report of books available in each category."];

	var qstNo = (questions[0]);	// Get first index of array of questions
	var question= '';			// an empty string
	
	title = qstNo; // give it a value
	
	$('#title').empty();		// remove the children	
	$('#title').append(question);	// add question
	for(var i=0; i<questions.length; i++){
		if(document.getElementById('button').clicked == true)
			{
   				qstNo++;
			}
	}
};
//server function for new page to run function in python
/*
function openNew(form) {
var newPage = window.open("");
opened.document.write("
	<html>
	<head>
		<title>MyTitle</title>
	</head>
	<body>
		test
	</body>
	</html>
");
};
*/
/*
	compareto function between inputted sql format and comparison of what it should be.
	vars: stringSelect: Inputted sql from user gathered from html form.
		  end: end of inputted statement - Should be ';'.
*/
function compareTo(){
	var stringSelect = document.getElementById("questionAnswer");
	var end = stringSelect.slice(-1);
		//simple select
		if (stringSelect.compareTo(select.indexOf("select")) == 0 && stringSelect.compareTo(select.indexOf("from")) == 0)
			document.getElementById("feedbackAnswer") == 
			"Answer submitted: Select. Syntax = 'Select ___ from ___;";
		if (stringSelect.compareTo(select.indexOf("select")) == 0 && stringSelect.compareTo(select.indexOf("from")) != 0)
			document.getElementById("feedbackAnswer") == 
			"The word 'from' is missing from your statement.";
		//simple insert
		else if (stringSelect.compareTo(select.indexOf("insert")) == 0 && stringSelect.compareTo(select.indexOf("into")) == 0)
			document.getElementById("feedbackAnswer") == 
			"Answer submitted: Insert. Syntax = 'insert into ___ values ___;";
		//insert without into
		else if (stringSelect.compareTo(select.indexOf("insert")) == 0 && stringSelect.compareTo(select.indexOf("into")) != 0)
			document.getElementById("feedbackAnswer") == 
			"The word 'into' is missing from your statement.";
		//simple alter
		else if (stringSelect.compareTo(select.indexOf("alter")) == 0)
			document.getElementById("feedbackAnswer") == 
			"Answer submitted: Alter. Syntax = 'insert into ___ values ___;";
		//missing semi colon
		else if (stringSelect.indexOf(end) != ";")
			document.getElementById("feedbackAnswer") == 
			"Semi colon - ';' missing, please add onto end of statement.";
		else
		//undefined answer		
			document.getElementById("feedbackAnswer") == 
			"Answer submitted: Undefined. Please enter a valid SQL statement ";
};
/*

Purpose of algorithm: Create a form, form info will be saved to a html, this html will be added to a part of a drop list in test selection
variables: Test name/html name, Test questions(Will require array)
https://stackoverflow.com/questions/18417114/add-item-to-dropdown-list-in-html-using-javascript
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_add
Pseudo:
object page(name, title, question[]){
	var name = getEle(name)
	var html = name + ".html" //for html file name
	var title = getEle(title)
	for(i = 0; i < 3; i++){
		var question[i] = getEle(question1).add()
		var question[i] = getEle(question2).add()
		var question[i]= getEle(question3).add()
	}
	...
	var option = document.createElement(page('option'));
	option.text = option.value = name
	select.add(page(option,0))
}  
*/
function create_test() {
	var test = {
		name:document.getElementById("name")
		questions = [document.getElementById("Question1"),document.getElementById("Question2"),document.getElementById("Question3")] 	
	}
    var select = document.getElementById("my-form");
    var option = document.createElement("option");
    option.text = test.name;
    select.add(option);
    select.appendChild(option); 
};

//Create a new page with onclick from function
window.onload = function open_page() {
	document.getElementById('test_open').onclick = function redirect(){
		window.location = 'opened_test.html';

	};

};