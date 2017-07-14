'use strict';

const files = require('../lib/files');

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path')
const crypto = require('crypto');
const request = require('request');

function setup() {
  const basedir = path.resolve(__dirname, '..');
  files.requirements(basedir).map(info => {
    mkdirp.sync(info.basedir);
    downloadIfNeeded(info.url, info.path);
  });
}

function downloadIfNeeded(url, dest) {
  if (!fs.existsSync(dest)) {
    console.log("Downloading", url, "to", dest, "...");
    request(url).pipe(fs.createWriteStream(dest));
  }
}

setup();
