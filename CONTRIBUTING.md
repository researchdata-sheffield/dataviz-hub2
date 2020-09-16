## Contribute blog post
To contribute, please visit the [guide](https://dataviz.shef.ac.uk/blog/22/03/2020/contribute_blog_post) for more information, if you have any questions raise an [issue](https://github.com/researchdata-sheffield/dataviz-hub2/issues) under this repository.


## Contribute to the website
This website is built from <a href="https://www.gatsbyjs.org/">Gatsby</a> framework.

### Installation
  1. For Windows users, Download and install the latest Node.js version from <a href="https://nodejs.org/en/">the official Node.js website</a>. 
  For other OS visit <a href="https://www.gatsbyjs.org/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system">here</a>. (You might also need to download Visual Studio installer to install node.js development tools).
  
  2. Install <a href="https://gitforwindows.org/">Git</a>. 
  
  3. Install Gatsby CLI by running  `npm install -g gatsby-cli`

  4. Fork this [repository](https://github.com/researchdata-sheffield/dataviz-hub2) and open up your Git Bash/terminal (and navigate to a directory you want to place the site) and run:
    
    ```
    git clone https://github.com/yourusername/dataviz-hub2.git
    cd dataviz-hub2
    npm install      //install dependencies
    ```
  5. Once you've setup, run `gatsby develop`. Now you can view the site at **http://localhost:8000/**. Any changes you made to posts locally will be updated instantly on preview. Press `Ctrl + C` if you want to stop the server running locally. 
  If you're happy with your changes, you could also run `npm run serve` to make a production build and check everything is identical to the development version at **http://localhost:9000/**.

## Note
  At step 4, If you have write permission for the origin repository, then you could just create a new branch in the origin repository and clone it. 
  If you have <b>Github Desktop</b> installed then just clone the repository into your computer and under the repository you would need to use Git Bash to run **npm install** etc.


```
If you have cloned the repository a while a ago, 
fetch the latest commits from origin repository:

git checkout development
git pull upstream development
```
