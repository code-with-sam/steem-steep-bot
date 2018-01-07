const steem = require('steem');

const ACCOUNT_NAME = ''
const ACCOUNT_WIF = ''

let uniqueUrlString = ''
let commentTitle = '';
let beneficiaries = [];
let body = `post body here`
let postBody = '';
let tags = []
let primaryTag = tags[0] || 'photography'
let otherTags = tags.slice(1)
let imageSize = { height:560,width:560}
  let operations = [
    ['comment',
    {
      parent_author: '',
      parent_permlink: primaryTag,
      author: ACCOUNT_NAME,
      permlink: uniqueUrlString,
      title: commentTitle,
      body: postBody,
      json_metadata : JSON.stringify({
        tags: allTags,
        image_size: imageSize,
        app: "steepshot/0.0.12-b"
      })
    }
  ],
  ['comment_options', {
    author: ACCOUNT_NAME,
    permlink: uniqueUrlString,
    max_accepted_payout: '100000.000 SBD',
    percent_steem_dollars: 10000,
    allow_votes: true,
    allow_curation_rewards: true,
    extensions: [
      [0, {
        beneficiaries: beneficiaries
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
