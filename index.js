const url = require('url');
const loremIpsum = require('lorem-ipsum');

function clamp(val, min, max) {
  return Math.max(Math.min(val, max), min);
}

module.exports = async (request) => {
  const count = clamp(parseInt(url.parse(request.url).query) || 10, 1, 1000);
  console.log(`Generating ${count} lines of lorem ipsum...`);
  return loremIpsum({
    count,
    unit: 'sentences',
  });
};
