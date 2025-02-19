# Using factorial one source 

## Motivation 
For development scenarios is necessary to be agile and be able to apply changes in factorial one and check how then 
integrates in the consumer (ex. factorial's monorepo)

In this scenario the regular release process (build and publish) is very slow, but we provide an alternative to use 
factorial one without build and publish it in 2 use cases

- **Consuming the source from github**: This is useful to check the integration with a factorial-one version in a development branch and useful for coder dev environment 
- **Link the package from local files**: This is useful for local development

## Strategy

Take advantage of the [node conditional exports](https://nodejs.org/api/packages.html#conditional-exports) that allows us
to define with file is exported depending on a condition.

We define a custom condition (`use-f1-source`), we can set in the monorepo tsconfig, and the module will resolve the 
source files instead the regular `dist`


## How to

### Using an specific commit
In the monorepo folder:
1. open the `package.json` file
2. run `pnpm add `github:factorialco/factorial-one#[COMMIT_SHA1]` where `[COMMIT_SHA1]` is the commit identifier to use:  
   - example: `pnpm add github:factorialco/factorial-one#9c270d1db734771f7def654c20114ad947f156d2`

> IMPORTANT: Remember to remove use an stable version before to merge into `main` or release

### How to use local version of `factorial-one` in your repo (ex. `factorial`'s monorepo)
1. Go to the `factorial-one` folder: `cd factorial-one`
2. Run `pnpm build:watch` to build the project on any change
3. Run `pnpm link --global` to add the package to the local links
4. Go to the factorial app monorepo: `cd factorial/frontend`
5. Run `pnpm link --global @factorialco/factorial-one` to use the local version of the package

