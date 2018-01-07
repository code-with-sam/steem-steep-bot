const steepshot = require('./post');
const schedule = require('node-schedule');
const archive = require('./archive');
const util = require('./util')
const config = require('./config');

// 10am everyday
let scheduledTime = `${postingMinute} {config.postingHour} * * *`
let timer = schedule.scheduleJob(scheduledTime, function(){

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
