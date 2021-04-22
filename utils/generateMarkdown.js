// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.replace(/\s/g, "");
  license = license.toLowerCase();
  let badge;

  switch (license) {
    case "creativecommons":
      badge =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "gnugplv3":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ibm":
      badge =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "isc":
      badge =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "mit":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case "creativecommons":
      link =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "gnugplv3":
      link =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ibm":
      link =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "isc":
      link =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "mit":
      link =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let link;
  let licenseTrimmed = license.replace(/\s/g, "");
  licenseTrimmed = licenseTrimmed.toLowerCase();

  switch (licenseTrimmed) {
    case "creativecommons":
      link =
        "(http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "gnugplv3":
      link =
        "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ibm":
      link =
        "(https://opensource.org/licenses/IPL-1.0)";
      break;
    case "isc":
      link =
        "(https://opensource.org/licenses/ISC)";
      break;
    case "mit":
      link =
        "(https://opensource.org/licenses/MIT)";
      break;
  }

  return `\nAll assets and code are under the [${license}]${link} and in the public domain unless specified otherwise.\n`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const title = `# ${data.title}`;
  const desc = `## Description\n${data.desc}`;
  const install = `## Installation Instructions\n${data.install}`;
  const contributors = `## Credits\n${data.contributors}`;
  const licence = `## Licence\n${renderLicenseBadge(data.license)}\n${renderLicenseSection(data.license)}`;

  return `# ${data.title}\n
  \n${desc}\n
  \n${install}\n
  \n${contributors}\n
  \n${licence}\n
`;
}

module.exports = generateMarkdown;
