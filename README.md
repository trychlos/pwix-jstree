# pwix:jstree

## What is it

A Meteor package which provides a [jsTree](https://www.jstree.com/) patched stylesheet and a server-side snippet to work around the [#12524](https://github.com/meteor/meteor/issues/12524) Meteor issue.

## Rationale

Due to the above issue, any Meteor application or package which would take advantage of jsTree resources has to have a fixed route to the pages which use jsTree, and patch its stylesheet accordingly.

As described in the issue form, this package provides a work-around which works with any route, thus preventing the application or package to have to fix any route, thus being much more flexible.

## Usage

This package is expected to be `api.use()` by another application or package: you should not even have to explicitely install it. But you always can:

```
    meteor add pwix:jstree
```

From the application (resp. package) point of view, it has just have to include the jsTree javascript, says:

```
    import 'jstree/dist/jstree.min.js';
```
and enjoy!

## Configuration

None at the moment.

## Provides

This package automatically publishes the patched stylesheet and the corresponding `.png` icon files.

Please note that the jsTree package MUST have been installed at application level

    `meteor npm install jstree --save`

## NPM peer dependencies

Starting with v 1.0.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:
```
    'jstree': '^3.3.0'
```
Each of these dependencies MUST be installed at application level:
```
    meteor npm install <package> --save
```
---
P. Wieser
- Last updated on 2023, June 12th
