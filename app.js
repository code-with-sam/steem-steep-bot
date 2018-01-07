const steepshot = require('./post');
const schedule = require('node-schedule');
const archive = require('./archive');
const moment = require('moment');


// 10am everyday
let timer = schedule.scheduleJob('* 10 * * *', function(){

    var today = moment();
    for (var i = 0; i < archive.length; i++) {
      let item = archive[i]
      let postDate = moment(item.date, item.dateFormat);

      if (today.isSame(postDate, 'd')) {
          console.log('post & data Match')
      }


      steepshot.post({
        uniqueUrlString: '',
        commentTitle: '',
        beneficiaries: [],
        body: `post body here`,
        postBody: '',
        tags: ['photography', 'life'],
        imageSize: { height:560, width:560}
      })
    }

});
