/**
 * Copyright 2017-present, Callstack.
 * All rights reserved.
 *
 * initialStartInstructions.js
 *
 * @flow
 */
const dedent = require('dedent');
const chalk = require('chalk');

module.exports = (
  { port, platform }: { port: string, platform: string }
) => dedent`
  Bundle is now available at:
                 
    ${chalk.cyan(`http://localhost:${port}/index.${platform}.bundle`)}
  
  You can now go to your ${platform} device and run the app.
`;