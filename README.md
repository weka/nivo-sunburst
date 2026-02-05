<a href="https://nivo.rocks"><img alt="nivo" src="https://raw.githubusercontent.com/plouc/nivo/master/nivo.png" width="216" height="68"/></a>

# `@nivo/sunburst`

[![version](https://img.shields.io/npm/v/@nivo/sunburst?style=for-the-badge)](https://www.npmjs.com/package/@nivo/sunburst)
[![downloads](https://img.shields.io/npm/dm/@nivo/sunburst?style=for-the-badge)](https://www.npmjs.com/package/@nivo/sunburst)

## Sunburst

[documentation](http://nivo.rocks/sunburst/)

![Sunburst](https://raw.githubusercontent.com/plouc/nivo/master/website/src/assets/captures/sunburst.png)

## Creating a New Version

To create a new version of this package:

1. **Make Changes**: Make your changes on a feature branch
2. **Open PR**: Create a pull request to merge your changes into `main` branch
3. **After PR is Merged**: Once the PR is merged to `main`:
   - Update the version in `package.json` (e.g., `0.99.2-weka`)
   - Commit and push the version change: `git commit -am "Bump version to 0.99.2-weka" && git push`
   - Create a new git tag: `git tag v0.99.2-weka`
   - Push the tag: `git push origin v0.99.2-weka`
4. **Update Consumers**: Update the consuming project's `package.json` to use the new tag:
   ```json
   "@nivo/sunburst": "git+https://github.com/weka/nivo-sunburst.git#v0.99.2-weka"
   ```
   Then run `yarn install` in the consuming project.
