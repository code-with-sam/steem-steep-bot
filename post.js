const steem = require('steem');
const config = require('./config');
const util = require('./util')

const ACCOUNT_NAME = config.username
const ACCOUNT_WIF = config.postingKey


/*
postingData -- example
{
  uniqueUrlString: '',
  commentTitle: '';,
  beneficiaries: [];,
  body: `post body here`,
  postBody: '';,
  tags: [],
  imageSize: { height:560, width:560}
}
*/

module.exports.post = function(postingData){
    steem.api.setOptions({ url: 'wss://steemd.privex.io' });

    postingData.uniqueUrlString = util.randomString() + '-post'
    postingData.app = 'steepshot/0.0.12-b'
    postingData.primaryTag = postingData.tags[0] || 'photography',
    postingData.otherTags = postingData.tags.slice(1),
    postingData.beneficiaries.push({
      account: 'steepshot',
      weight: 100*10
    });

    let operations = [
      ['comment',
      {
        parent_author: '',
        parent_permlink: postingData.primaryTag,
        author: ACCOUNT_NAME,
        permlink: postingData.uniqueUrlString,
        title: postingData.commentTitle,
        body: postingData.postBody,
        json_metadata : JSON.stringify({
          tags: postingData.allTags,
          image_size: postingData.imageSize,
          app: postingData.app
        })
      }
    ],
    ['comment_options', {
      author: ACCOUNT_NAME,
      permlink: postingData.uniqueUrlString,
      max_accepted_payout: '100000.000 SBD',
      percent_steem_dollars: 10000,
      allow_votes: true,
      allow_curation_rewards: true,
      extensions: [
        [0, {
          beneficiaries: postingData.beneficiaries
        }]
      ]
    }]
  ];

  steem.broadcast.send(
      { operations: operations, extensions: [] },
      { posting: ACCOUNT_WIF },
      (err, result) => {
          console.log(err,result);
      }
  )
}
