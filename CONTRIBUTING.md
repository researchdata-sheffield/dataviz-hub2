# Contributing to Dataviz.Shef
This is your community around interactive data visualisation at TUoS and we would love to have your contribution anytime. Please see the following guidelines for contributors:

 - [Code of Conduct](#coc)
 - [Issues, Bugs, Feedback!](#issue)
 - [Commit Message Guidelines](#commit)
 - [Contribute to the core website](#website)
 - [Contribute blog posts](#blogpost)


## <a name="coc"></a> Code of Conduct
We has adopted a Code of Conduct that we expect participants to adhere to. Please read the [full text][coc] so that you can understand what actions will and will not be tolerated.


## <a name="issue"></a> Issues, Bugs, Feedback!
If you have found an issue or bug, or have any feedback regarding the website, please [submit an issue][issue] to help the community become even better. If you know how and would like to fix the problem, you can [create pull requests][pr] to submit a fix!


## <a name="commit"></a> Commit Message Guidelines
To help us keep a consistent and readable commit messages, we use the specification published on [Convention Commits](https://www.conventionalcommits.org/en).

## <a name="website"></a> Contribute to the core website
This website is built from <a href="https://www.gatsbyjs.org/">Gatsby</a> framework.

### Installation
  1. For Windows users, Download and install the latest Node.js version from <a href="https://nodejs.org/en/">the official Node.js website</a>. 
  For other OS visit <a href="https://www.gatsbyjs.org/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system">here</a>. (You might also need to download Visual Studio installer to install node.js development tools).
  
  2. Install <a href="https://gitforwindows.org/">Git</a>. 
  
  3. Install Gatsby CLI by running  `npm install -g gatsby-cli`

  4. Fork this [repository](https://github.com/researchdata-sheffield/dataviz-hub2) and open up your Git Bash/terminal (and navigate to a directory you want to place the site) and run:
    
  ```bash
  git clone https://github.com/yourusername/dataviz-hub2.git
  cd dataviz-hub2
  npm install      # install dependencies
  ```

  5. Run `gatsby develop`. Now you can view the site at **http://localhost:8000/**. Any changes you made to posts locally will be updated instantly on preview. Press `Ctrl + C` if you want to stop the server running locally. 
  If you're happy with your changes, you could also run `npm run serve` to make a production build and check everything is identical to the development version at **http://localhost:9000/**.


### Submit your code
Before submitting your code, serve the production build to check if the website is running fine. Always try to write test cases for new codes and use `npm run test` to check if all tests passed. 

Whenever you want to submit new codes, create a new pull request and merge it into the `development` branch. **DO NOT** attempt to merge new code into the `master` branch directly.


## <a name="blogpost"></a> Contribute blog post
To contribute, please visit the [guide](https://dataviz.shef.ac.uk/docs/22/03/2020/contribute-blog-post) for more information, if you have any questions raise an [issue](https://github.com/researchdata-sheffield/dataviz-hub2/issues) under this repository.



[coc]: https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/CODE-OF-CONDUCT.md
[issue]: https://github.com/researchdata-sheffield/dataviz-hub2/issues
[pr]: https://github.com/researchdata-sheffield/dataviz-hub2/pulls