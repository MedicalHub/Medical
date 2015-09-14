PolyMap = function (type,name,value,attrs) {
	if(type == 'String') {

		html='<div><paper-input'+ 
//' allowedPattern = '+ '^[a-zA-Z]' +
' alwaysFloatLabel' +
' autocapitalize ' +
' autocomplete ' +
' autocorrect ' +
' autofocus ' +
' auto-validate ' +
' char-counter ' +
//' disabled '+
' error-message ='+ 'Pattern-Violation' +
//' inputmode ='+ '' +
//' invalid ' +
' label ='+ attrs.label +
//' list ='+ '[AZ,BC]' +
//' max ='+ '' + 
//' maxlength ='+ '' +
//' min ='+ '' +
//' minlength ='+ '' +
' name ='+ name +
//' noLabelFloat ='+ false +
//' pattern ='+ '^[a-zA-Z]*' +
//' placeholder ='+ 'FirstName' +
' preventInvalidInput ' +
//' readonly '' +
' required ' +
//' size ='+ '' +
//' step ='+ '' +
' type ='+ 'text' +
//' validator ='+ '' +
' value ='+ value +
' ></paper-input></div>';

}
else if (type == 'Date'){
	html = '<div><paper-date-picker ' +
	' name = ' + name +
		' date = ' + value +
	' ></paper-date-picker> ' + 
	'<input ' + 
	' type = Date'  +	
	' name = ' + name +	
	'></input> ' +
	' </div>';
}
else if (type == 'Object') {
	html = "<paper-card >	<div class='card-content'>"+'\n';
}
else if (type == 'Array') {
	html = "<paper-card heading='Array'>	<div class='card-content'>"+'\n';
}
return html;

}