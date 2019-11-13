'use strict';

module.exports = {
  apps: [{
    name: 'service-base',
    script: './dist/app.js',
    // watch: [ 'dist' ],
    env: {
      NODE_ENV: 'production',
    },
    // ignore_watch: [ '[\/\\]\./', 'node_modules', 'dist/type' ],
    max_memory_restart: '150M',
    instances: 1,
    exec_mode: 'cluster',
    min_uptime: '60s',
    max_restarts: 10,
  }],
};
