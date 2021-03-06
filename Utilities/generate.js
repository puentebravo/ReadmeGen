
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![](https://img.shields.io/badge/license-${license}-blue)`
    }
    return ``
}


function renderLicenseLink(license) {
    if (license !== "none") {
    return `To read the license in its entirety, click here: [${license}](./LICENSE)`
    } else {
        return ``
    }
}


function renderLicenseSection(license) {
    if (license !== "none") {
      return `Content in this project is governed under the ${license} License.`
    } else {
        return ``
    }
}


function generateMarkdown(data) {
  return `
    
  # ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Description 
      
  ${data.description}

  ${data.deployed}
      
  ## Table of Contents
      
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [Tests](#tests)
  * [License](#license)
      
      
  ## Installation
      
  ${data.install}
      
  ## Usage 
      
  ${data.usage}
      
  ![](${data.screenshot})

  ## Credits
      
  ${data.credits}
      
  ## Contributing

  ${data.contributing}

  ## Questions?
  
  Questions about this project can be directed to: 
  - Github: ${data.github}
  - Email: ${data.email}

  ## Tests

  ${data.tests}

  ## License
      
  ${renderLicenseSection(data.license)} 

  ${renderLicenseLink(data.license)}

  -----------
  
  Copyright [${data.copyyear}] [${data.copyowner}]`;
}

module.exports =  {
    generateMarkdown
}
