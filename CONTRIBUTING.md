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

3. Install Gatsby CLI by running `npm install -g gatsby-cli`

4. Fork this [repository](https://github.com/researchdata-sheffield/dataviz-hub2) and open up your Git Bash/terminal (and navigate to a directory you want to place the site) and run:

```bash
git clone https://github.com/yourusername/dataviz-hub2.git
cd dataviz-hub2
npm install      # install dependencies
```

You will also need to install dependencies for the Playwright testing framework:

```bash
npx playwright install
# or the following for Ubuntu OS
npx playwright install-deps
```

### Development

Once you have completed the installation steps, run `gatsby develop`. Now you can view the site at **http://localhost:8000**. Any changes you made locally will be updated instantly on preview. Press `Ctrl + C` if you want to stop the server running locally. If you're happy with your changes, you could also run `npm run serve` to make a production build and check everything is identical to the development version at **http://localhost:9000/**.

### Submit your code

Before submitting your code, serve the production build to check if the website is running fine. Note that `npx lint-staged && npm run test:ci` will be run when you commit new codes to the repository. This means commits that failed the test will not be allowed.

Whenever you want to submit new codes, create a new pull request and merge (or squash merge) them into the `development` branch. **DO NOT** attempt to merge new code into the `master` branch directly.

### Testing

We use [Jest][jest] as the test runner and [Playwright][playwright] for end to end testing. Please write test cases for new codes and use `npm run test:ci` to check if all tests passed. If contents are changed, use `npm run test:update` to update snapshots.

You can also use `npm run test:e2e` to run end to end tests. To do this, you will need to serve a production build (use `npm run build:noGA`) at `localhost:9000` first using `gatsby serve` so that browsers can access the website.

### Continuous Integration

This repository comes with the following workflows:

- **CI** - validate new production build and run tests
- **Scan** - use SonarCloud for code scanning
- **Deploy** - Deploy a new production build to the live environment from the master branch
- **Deploy-QA** - Deploy a new production build to the QA environment from the development branch

## <a name="blogpost"></a> Contribute blog post

To contribute, please visit the [guide](https://dataviz.shef.ac.uk/docs/22/03/2020/contribute-blog-post) for more information, if you have any questions raise an [issue](https://github.com/researchdata-sheffield/dataviz-hub2/issues) under this repository.

[coc]: https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/CODE-OF-CONDUCT.md
[issue]: https://github.com/researchdata-sheffield/dataviz-hub2/issues
[pr]: https://github.com/researchdata-sheffield/dataviz-hub2/pulls
[jest]: https://jestjs.io/
[playwright]: https://playwright.dev/
