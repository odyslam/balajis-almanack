# balajis-almanack

Truth. Health. Wealth. In that order

An almanack for BalajiS, who correctly foresaw the rise of crypto and the covid pandemic, amongst other things.

He is an Engineer, Investor, Futurist.

## Contributing

This repository houses both the source files for the [website](https://www.bestofbalaji.com/) and the build files.

We edit the build files and use [Gatsby](https://www.gatsbyjs.com/) to generate the source files for the website. The website is built automatically to track the latest version of the `main` branch. It is hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

### Add/Edit content (e.g a new Concept)

To add content to the website, we need to do 2 things:

- Add/edit a concept on the `src/docs/concepts` category
- Add a mention of that page to the `src/config/sidebar.yml` file

**More specifically**:

- Fork the repository to your GitHub account
- Clone the forked repository locally
- Checkout to a new branch: `git checkout feat/concept-blockchain`
- Make the changes on the forked repository: `git add -A && git commit -m "feat: new concept on blockchain"`
- Push the changes to your GitHub repository: `git push`
- Visit your GitHub repository, click on `make PR` button and make sure you make the PR to the `main` branch.

### Change the Website -- Advanced

- Read the [docs](https://rocketdocs.netlify.app/) of the theme for details on how various components work (e.g code snippets)
- Read about [Gatsby Themes Shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)
- If you want to alter the structure of the website (e.g change background colour) we need to:
  - Install Gatsby on our machine
  - `cd` into the fork of this repository and run `npm install` or `yarn add`
  - Find the theme's source files in the `node_modules` directory (`node_modules/@rocketseat/gatsby-theme-docs`, `node_modules/@rocketseat/gatsby-theme-docs-core`)
  - Understand what file we need to add/modify
  - Create that file in the same path in `src/@rocketseat/<path>` as it exists in the original source files. This is what Gatsby Theme Shadowing is about.
  - Make the change
  - Commit, Push and PR the change to the main repo.

## License

MIT License

## Contributors

<a href="https://github.com/OdysLam/balajis-almanack/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=OdysLam/balajis-almanack" />
</a>

Made with [contributors-img](https://contrib.rocks).

Contributors are updated on a daily basis.
