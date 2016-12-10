'use strict'



var htmlTableRow = function (train) {
	return `<tr><td>${train.trainnumber}</td><td>${train.linecolor}</td><td>${train.inservice}</td></tr>`
}

$(document).ready(function(){
	$.get('/trains/data', function(trainData){
		var tableHTMLString = trainData.map(htmlTableRow).join('');
		$('#trainData').html(tableHTMLString);
	});

	$('#addTrain').submit(function(event){
		$.post('/trains/data', $('#addTrain').serialize());
	});
});
