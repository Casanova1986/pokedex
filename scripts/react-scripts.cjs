// Pass the Webpack 4 compatibility option to react-scripts and its child processes.
process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, '--openssl-legacy-provider']
  .filter(Boolean)
  .join(' ');
require('react-scripts/bin/react-scripts');
