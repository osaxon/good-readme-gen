// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.replace(/\s/g, '');
  license = license.toLowerCase();
  let badge;
  /*const badges = {
    creativecommons: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    gnugplv3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    ibm: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  }*/

  switch(license){
    case 'creativecommons':
      badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
      break;
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const title = `# ${data.title}`;
  const desc = `## Description\n${data.desc}`;
  const install = `## Installation Instructions\n${data.install}`;
  const contributors = `## Project Contributors\n${data.contributors}`;
  const licence = `## Licence\n${renderLicenseBadge(data.license)}`;

  return `# ${data.title}\n
  \n${desc}\n
  \n${install}\n
  \n${contributors}\n
  \n${licence}\n
`;
}

module.exports = generateMarkdown;
