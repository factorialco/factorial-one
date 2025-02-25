# Versioning

This project is following the [Semantic Versioning](https://semver.org/) specification with automatic version bumping
based in [convention commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Release process

### Stable versions

When a PR is merged into the `main` branch, the CI will automatically will check the commit messages, bump the version
in consequence and publish a new version of the package to the github package registry.

### Experimental (alpha) versions

When a PR is created any commit into the PR will trigger the build and publish process, but the version will be marked
as
`alpha` and the version will be `x.y.z-alpha.<pr-number>-<commit-sha>`. Where the `pr-number` is the number of the PR
and the commit sha is the sha of the commit that triggered the build.

Those versions are not meant to be used in production, but to be tested and reviewed by the team.

Those version are ephemeral and will be deleted after the PR is closed of after some time (TBD).

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




