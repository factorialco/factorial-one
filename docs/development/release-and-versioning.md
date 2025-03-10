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
- We will delete any alpha version older than 1 day

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

## Using the package

The package is published in the npmjs package registry so you can use it in your project as a regular package.

```bash
pnpm add @factorialco/factorial-one@latest
```

Or to install an specific version go
to https://www.npmjs.com/package/@factorialco/factorial-one?activeTab=versions and check the version you want to install
and execute:

```bash
pnpm add @factorialco/factorial-one@[VERSION]
```

### Alpha versions

To install an alpha version you can execute run

```bash
pnpm add @factorialco/factorial-one@alpha-pr-[PR_NUMBER]
```

> You can run this command multiple times to get the lastest version of the alpha-pr-[PR_NUMBER]

Or you can visit https://www.npmjs.com/package/@factorialco/factorial-one?activeTab=versions or run
`pnpm view @factorialco/factorial-one` to check the available versions for your pr (dist-tag)

Example:

```bash
$ `pnpm add @factorialco/factorial-one@latest
...
dist-tags:
alpha-pr-1239: 1.0.0-alpha.pr-1239-20250312133123-a3455492
alpha: 0.0.2-3
latest: 0.0.1
```









