

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![](https://img.shields.io/badge/license-${license}-blue)`
    }
    return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== null) {
    return `To read the license in its entirety, click here: [License](./LICENSE)`
    } else {
        return ``
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== null) {
      return `Content in this project is governed under the following license:`
    } else {
        return ``
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    
  # ${data.title} ${renderLicenseBadge()}
  
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
      
  ${renderLicenseSection()} ${data.license} 

  ${renderLicenseLink()}
  
  -----------
  
  Copyright [${data.copyyear}] [${data.copyowner}]`;
}

module.exports =  {
    generateMarkdown
}
