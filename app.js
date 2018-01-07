const postToSteepShot = require('./post');

postToSteepShot({
  uniqueUrlString: '',
  commentTitle: '';,
  beneficiaries: [];,
  body: `post body here`,
  postBody: '';,
  tags: [],
  primaryTag: tags[0] || 'photography',
  otherTags: tags.slice(1),
  imageSize: { height:560, width:560}
})
