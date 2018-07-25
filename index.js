const url = require('url');
const loremIpsum = require('lorem-ipsum');

module.exports = async (request) => {
  const count = parseInt(url.parse(request.url).query) || 10;
  console.log(`Generating ${count} lines of lorem ipsum...`);
  return loremIpsum({
    count,
    unit: 'sentences',
  });
};
