const steepshot = require('./post');
const schedule = require('node-schedule');
const archive = require('./archive');
const util = require('./util')

// 10am everyday
let timer = schedule.scheduleJob('* 10 * * *', function(){

    for (var i = 0; i < archive.length; i++) {
      let item = archive[i]

      if ( util.isToday(item.date, item.dateFormat) ) {
          steepshot.post({
            commentTitle: item.title,
            postBody: item.description,
            tags: item.tags,
            imageSize: item.imageSize,
            imageLink : item.imageLink
          })
      } else {
        console.log('checking next post... ')
      }
    }

});
