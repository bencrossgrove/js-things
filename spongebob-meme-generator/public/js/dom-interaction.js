$(document).ready(function(){
    $('#convertTextBtn').on('click', function(e){
        e.preventDefault();
        var convertedStr = converter($('#rawTextInput').val());
        $('#convertedTextInput').val(convertedStr);
    });
    $('#resetFieldsBtn').on('click', function(e){
        $('#rawTextInput').val('');
        $('#convertedTextInput').val('');
    });
});