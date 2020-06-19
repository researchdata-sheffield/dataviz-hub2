# Add a blog post?
To contribute, please visit the [guide](./content/blog/how_to_write_blog_post/index.mdx).


# Installation
  1. For Windows users, Download and install the latest Node.js version from <a href="https://nodejs.org/en/">the official Node.js website</a>. 
  For other OS visit <a href="https://www.gatsbyjs.org/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system">here</a>. (You might also need to download Visual Studio installer to install node.js development tools).
  
  2. Install <a href="https://gitforwindows.org/">Git</a>. 
  
  3. Install Gatsby CLI by running  `npm install -g gatsby-cli`

  4. Fork this repository and open up your Git Bash (and navigate to a directory you want to place the site) and run:
    
    ```
    git clone https://github.com/yourusername/dataviz-hub2.git
    cd dataviz-hub2
    npm install                                                 //install dependencies
    cd plugins/gatsby-source-eventbrite-multi-accounts
    npm install                                                 //install plugin dependencies
    ```

  5. (optional) Create a new local branch with commands **git checkout development** (make sure you're in development branch), **git branch newBranchName** (create a new branch from development), and **git checkout newBranchName** (switch to new branch).
    Now make any commits you wish to.

## Note
  At step 4, If you have write permission for the origin repository, then you could just create a new branch in the origin repository and clone it. 
  If you have <b>Github Desktop</b> installed then just clone the repository into your computer and under the repository you would need to use Git Bash to run **npm install** etc.




```
If you have cloned the repository a while a ago, 
fetch the latest commits from origin repository:

git checkout development
git pull upstream development
```

## IDE
I'm using Visual Studio Code for developments.
A list of extensions I've installed:
  - Bracket Pair Colorizer
  - ES7 React/Redux/GraphQL/React-Native snippets
  - ESLint
  - HTML Snippets
  - MDX
  - Prettier - Code formatter
  - Tailwind CSS IntelliSense
  - vscode-icons
  - HTML CSS support
  - npm Intellisense
  - Babel JavaScript
  - Color Highlight
  - Color Info
  - Color Pick
  - CSS Peek

  

## Useful resources

EventBrite API 
+ https://www.eventbriteapi.com/v3/users/me/?token=YOURTOKEN
+ https://www.eventbriteapi.com/v3/organizations/OrgId/venues/?token=YOURTOKEN

[Gatsby plugins](https://www.gatsbyjs.org/plugins/)

[TailwindCSS](https://tailwindcss.com/docs/preflight)

[React-Icons](https://react-icons.netlify.com/#/)

[Unplash](https://unsplash.com/)