String.prototype.spacify = function() {
  return this.split('').join(' ');
}

String.prototype.reverseWords = function(str) {
  var tokenArray = [];

  tokenArray = this.split(' ');
  return tokenArray.reverse().join(' ');
}

String.prototype.reverse = function() {
  
}