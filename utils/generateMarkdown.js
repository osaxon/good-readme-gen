// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"

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
  const title = `# ${data.title}`;
  const desc = `## Description\n${data.desc}`;
  const install = `## Installation Instructions\n${data.install}`;
  const contributors = `## Project Contributors\n${data.contributors}`;
  const licence = `## Licence\n${renderLicenseBadge(data.licence)}`;

  return `# ${data.title}\n
  \n${desc}\n
  \n${install}\n
  \n${contributors}\n
  \n${licence}\n
`;
}

module.exports = generateMarkdown;
