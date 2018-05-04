const converter = function(input) {
    var newString = [];
    for(var i = 0; i < input.length; i++) {
        newString.push(Math.random() >= 0.5 ? input.charAt(i).toUpperCase() : input.charAt(i).toLowerCase());
    }
    return newString.join('');
};