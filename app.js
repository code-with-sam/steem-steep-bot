const steepshot = require('./post');
const schedule = require('node-schedule');

// 10am everyday
let timer = schedule.scheduleJob('* 10 * * *', function(){



  steepshot.post({
    uniqueUrlString: '',
    commentTitle: '',
    beneficiaries: [],
    body: `post body here`,
    postBody: '',
    tags: ['photography', 'life'],
    imageSize: { height:560, width:560}
  })

});
