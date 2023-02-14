module.exports = {
  '/**/*.{ts,json,md,mdx,html,css,tsx,js,jsx}': [
    'nx report',
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    'nx format:write --uncommitted --libs-and-apps',
  ],
};
