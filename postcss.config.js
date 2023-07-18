module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', 'ie >= 11'],
      replace: true,
      // Add other options if needed
    }),
    // Add other PostCSS plugins if you have any
  ],
};
