const path = require('path');

const analyzerBasedir = 'files/analyzers'
const analyzerInfos = [
  {
    basedir: analyzerBasedir,
    url: "http://repo1.maven.org/maven2/org/sonarsource/javascript/sonar-javascript-plugin/3.1.1.5128/sonar-javascript-plugin-3.1.1.5128.jar",
    filename: "sonarjs.jar"
  }
];

function localPath(basedir, info) {
  return path.resolve(basedir, info.basedir, info.filename);
}

exports.requirements = basedir => analyzerInfos.map(info => {
  return {
    basedir: path.resolve(info.basedir),
    url: info.url,
    path: localPath(basedir, info)
  };
});
