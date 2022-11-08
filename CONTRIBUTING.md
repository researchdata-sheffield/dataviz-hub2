# Contributing to Dataviz.Shef

This is your community around interactive data visualisation at TUoS and we would love to have your contribution anytime. Please see the following guidelines for contributors:

- [Code of Conduct](#coc)
- [Issues, Bugs, Feedback!](#issue)
- [Commit Message Guidelines](#commit)
- [Contribute to the core website](#website)
- [Contribute contents](#contents)

## <a name="coc"></a> Code of Conduct

We has adopted a Code of Conduct that we expect participants to adhere to. Please read the [full text][coc] so that you can understand what actions will and will not be tolerated.

## <a name="issue"></a> Issues, Bugs, Feedback!

If you have found an issue or bug, or have any feedback regarding the website, please [submit an issue][issue] to help the community become even better. If you know how and would like to fix the problem, you can [create pull requests][pr] to submit a fix!

## <a name="commit"></a> Commit Message Guidelines

To help us keep a consistent and readable commit messages, we use the specification published on [Convention Commits](https://www.conventionalcommits.org/en). In short, the commit message should be in the format of `<type>([optional scope]): <description>`, where the `type` is one of the following structure elements:

- `feat` - New features
- `fix` - Bug fixes
- `perf` - Performance improvement
- `docs` - Documentation changes (including blog posts, learning paths, and visualisations)
  - the scope `new-*` will trigger a minor release
  - any other scopes will trigger a patch release
- `refactor` - Code refactoring
- `style` - Changes that only affecting styles
- `test` - Add, remove, and refactor tests
- `build` - Changes that affecting the building stage and dependencies
- `ci` - Continuous Integration related files and scripts
- `chore` - Changes that does not go into the production environment (live website), or it is just some housekeeping tasks

Although the scope is optional but it is recommended to include the scope so that the commit message will be more clear to other contributors. The CI pipeline will pick up and analyse new commits made to the `master branch` and automatically make new releases based on the type (and scope) of these commits. The version update strategy for each type can be found in the file [semantic-release-rules.js](https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/semantic-release-rules.js).

**Examples**

- `docs(new-visualisation): add a new visualisation on global poverty`
  - CLI - `git commit -m "docs(new-visualisation): add a new visualisation on global poverty"`
- `build (framework): update xxx to v3.0.0`
  - CLI - `git commit -m "build (framework): update xxx to v3.0.0" -m 'BREAKING CHANGES: migrate from v2 to v3'`
- `fix(no-release): responsive issue for xxx`
  - the `no-release` scope will not trigger a release

For breaking changes, add `!` after `<type>(Scope)` or add `BREAKING CHANGE: description.`/`BREAKING CHANGES: description.`

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

Whenever you want to submit new codes, create a new pull request and merge them into the `development` branch. **DO NOT** attempt to merge new code into the `master` branch directly.

### Testing

We use [Jest][jest] as the test runner and [Playwright][playwright] for end to end testing. Please write test cases for new codes and use `npm run test:ci` to check if all tests passed. If contents are changed, use `npm run test:update` to update snapshots.

You can also use `npm run test:e2e` to run end to end tests. To do this, you will need to serve a production build (use `npm run build:noGA`) at `localhost:9000` first using `gatsby serve` so that browsers can access the website.

### Continuous Integration

This repository comes with the following workflows:

- **CI** - validate new production build and run tests
- **Scan** - use SonarCloud for code scanning
- **Deploy** - Deploy a new production build to the live environment from the master branch
- **Deploy-QA** - Deploy a new production build to the QA environment from the development branch

## <a name="contents"></a> Contribute contents

To contribute contents such as blog posts, visualisations, and documentation, please click the links in each section for more information, if you have any questions raise an [issue](https://github.com/researchdata-sheffield/dataviz-hub2/issues) under this repository.

### Blog post

- See the guide for how to contribute blog post on [website](https://dataviz.shef.ac.uk/docs/22/03/2020/contribute-blog-post) or [local markdown file](./content/docs/2020-03-22-datavizhub-guide/index.mdx).

### Documentation

Documentation includes contents like learning paths, or document that can't be classified as blog posts nor visualisations. Writing a document is exactly the same as to writing a blog post but there are some extra properties you can specify:

- `learningPath` (type: `boolean`) - `true` or `false`, this should set to `true` if this is the first part of a learning path you are writing. The remaining part of this learning path should not specify this property otherwise it will also be included in the learning path section in the home page.
- `learningPathBtn` (type: `string`) - This is the text to be shown on the button after hovering over the learning path on the home page
- `learningPathTitle` (type: `string`) - the title of the learning path to be shown on the home page
- `learningPathDescription` (type: `string`) - the description of the learning path to be shown on the home page

All markdown files and resources for the document should be placed under the directory `/content/docs/yourFolderName`.

### Visualisation

- See the guide for how to contribute visualisation on [website](https://dataviz.shef.ac.uk/docs/21/07/2021/Contribute-visualisation) or [local markdown file](./content/docs/2021-07-21-Contribute-visualisation/index.mdx).

[coc]: https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/CODE-OF-CONDUCT.md
[issue]: https://github.com/researchdata-sheffield/dataviz-hub2/issues
[pr]: https://github.com/researchdata-sheffield/dataviz-hub2/pulls
[jest]: https://jestjs.io/
[playwright]: https://playwright.dev/

### Styles

Place global variables in the file `src/css/_variables.scss` and use it in any scss files in the format of `var.$varibale-name`.

You may wish to use the [react-reveal](https://www.react-reveal.com/) package to add some animations to your contributed pages. Sometimes the following order of HTML elements would not render the content correctly:

```mdx
import { Fade } from "react-reveal";

<div>
  <Fade>...contents</Fade>
</div>
```

To solve this problem, move the `<Fade>` tag one level above:

```mdx
<Fade>
  <div>...contents</div>
</Fade>
```
