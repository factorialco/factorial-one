# Versioning

This project is following the [Semantic Versioning](https://semver.org/) specification with automatic version bumping
based in [convention commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Release process

### Stable versions

When a PR is merged into the `main` branch, the CI will automatically will check the commit messages, bump the version,
update the changelog file, and create a release in github with the new version.

Any new release (automatic or manual) triggers a workflow that will publish it to the github package registry.

### Experimental (alpha) versions

When a PR is created any commit into the PR will trigger the build and publish process, but the version will be marked
as
`alpha` and the version will be `x.y.z-alpha.pr-<pr-number>-<date>-<commit-sha>`. Where the `pr-number` is the number of
the PR
and the commit sha is the sha of the commit that triggered the build.

Those versions are not meant to be used in production, but to be tested and reviewed by the team.

**Those versions are ephemeral** :

- We will delete all the alpha version of a PR once the PR is closed (merged or not)
- We will only keep the last 3 versions of each PR
- We will delete any alpha version older than 5 days

## Conventional Commits

The Conventional Commits specification is a lightweight convention on top of commit messages. This convention
dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- **fix**: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- **feat**: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic
  Versioning).
- **BREAKING CHANGE**: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a
  breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any
  type.
- types other than fix: and feat: are allowed, for example build:, chore:, ci:, docs:, style:, refactor:, perf:, test:,
  and others. will not trigger a new version.

[Read more about Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#examples)

## Accessing to the package

The package is published in the github package registry and is a private package so you need to be authenticated to in
the registry to install it.

To install the package you need to create a `.npmrc` file in your home directory with the following content:

```
@factorialco:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

You can get the token from your [github account settings](https://github.com/settings/tokens).
It must be a classic token with the `read:packages` scope.

> Remember to don't share the token with anyone and don't commit it to the repository

### Accessing the package in a CI/CD pipeline

You need to add `.npmrc` file in repository with the following content:

```
@factorialco/factorial-one:registry=https://npm.pkg.github.com
```

To be able to install the `factorial-one` package in a CI/CD pipeline you need to ask us to add your repository to the
list
of "[Manage Actions Access](https://github.com/orgs/factorialco/packages/npm/factorial-one/settings)"

Remember to set the env variable `NODE_AUTH_TOKEN` with the value of `${{secrets.GITHUB_TOKEN}}` in your CI/CD pipeline
use the authentication to access the package.





