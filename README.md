# balajis-almanack
Truth. Health. Wealth. In that order

An almanack for BalajiS, who correctly foresaw the rise of crypto and the covid pandemic, amongst other things. 

He is an Engineer, Investor, Futurist. 


## Contributing

yes, please.

## How to Contribute

This repository houses both the source files for the [website](https://www.bestofbalaji.com/) and the build files.

We edit the build files and use [Gatsby](https://www.gatsbyjs.com/) to generate the source files for the website. The website is built automatically to track the latest version of the `main` branch. It is hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

### Add/Edit content (e.g a new Concept)

To add content to the website, we need to do 2 things:
- Add/edit a concept on the `src/@rocketseat/docs/concepts` category
- Add a mention of that page to the `src/@rocketseat/config/sidebar.yml` file

**Important**:
Since we automatically build the website on every new version of `main`, all PRs must be done on the `dev` branch. We will merge the `dev` branch back to main when we have enough changes. Otherwise we will trigger multiple builds per PR (multiple commits). 

- Fork the repository to your GitHub account
- Clone the forked repository locally
- Change to the `dev` branch, so that you have the latest development version. To change a branch, run `git checkout dev`.
- Make the changes on the forked repository
- Push the changes to your GitHub repository
- Visit your GitHub repository, click on `make PR` button and make sure you make the PR to the `dev` branch of `odyslam/balajis-almanack`.

### Change the Website (e.g background colour)

We use a theme kindly provided by Rocketseat, thus:
- Read the [docs](https://rocketdocs.netlify.app/) of the theme for details on how various components work (e.g code snippets)
- If you want to alter the structure of the website (e.g change background colour) we need to:
  1. Know about [Gatsby Themes Shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)
  2. Install Gatsby on our machine
  3. `cd` into the fork of this repository and run `npm install` or `yarn add`
  4. Find the theme's source files in the `node_modules` directory (`node_modules/@rocketseat/gatsby-theme-docs`, `node_modules/@rocketseat/gatsby-theme-docs-core`)
  5. Understand what file we need to add/modify
  6. create that file in the same path in `src/@rocketseat/<path>` as it exists in the original source files. For example, see how I modified the styles of the theme. 
  7. Make the change
  8. Commit, Push and PR the change to the main repo.


## License

MIT License

## Contributors

<a href="https://github.com/OdysLam/balajis-almanack/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=OdysLam/balajis-almanack" />
</a>

Made with [contributors-img](https://contrib.rocks). 

Contributors are updated on a daily basis.
