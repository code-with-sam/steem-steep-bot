const moment = require('moment');

module.exports.isToday = function(date, format){
  var today = moment();
  let postDate = moment(date, format);
  isToday = today.isSame(postDate, 'd')
  return isToday
}

module.exports.randomString = function randomString() {
    let string = ''
    let allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 32; i++){
      string += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }
    return string;
}
