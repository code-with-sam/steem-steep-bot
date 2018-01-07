const steem = require('steem');

const ACCOUNT_NAME = ''
const ACCOUNT_WIF = ''


/*
postingData -- example
{
  uniqueUrlString: '',
  commentTitle: '';,
  beneficiaries: [];,
  body: `post body here`,
  postBody: '';,
  tags: [],
  primaryTag: tags[0] || 'photography',
  otherTags: tags.slice(1),
  imageSize: { height:560, width:560}
}
*/

module.exports = function(postingData){
    postingData.app = 'steepshot/0.0.12-b'
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
