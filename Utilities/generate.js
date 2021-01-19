// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
//     if (license !== null) {
//         `Content in this project is governed under the ${data.license} license, outlined in the included LICENSE document. `
//     }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    
  # ${data.title} ![license badge](https://img.shields.io/github/license/${data.github}/${data.repo}?style=plastic)
  
  ## Description 
      
  ${data.description}
      
      
  ## Table of Contents
      
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Credits](#credits)
  * [License](#license)
      
      
  ## Installation
      
  ${data.install}
      
  ## Usage 
      
  ${data.usage}
      
  [demo](${data.screenshot})
      
  ## Features  

  ## Credits
      
  ${data.credits}
      
      
  ## License
      
  Content in this project is governed under the ${data.license} license, outlined in the included LICENSE document. 
  
  -----------
  
  Copyright [${data.copyyear}] [${data.copyowner}]`;
}

module.exports =  generateMarkdown
