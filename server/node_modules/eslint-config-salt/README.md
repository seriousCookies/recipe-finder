# eslint-config-salt

&lt;/salt&gt;'s ESLint rules for all your course linting needs. 🧂  
A ruleset based on [Airbnb's JavaScript Style Guide][airbnb].

---

[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![ISC License][license-badge]][license]

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [LICENSE](#license)

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev eslint-config-salt
```

## Usage

Then add the extends to your `.eslintrc`:

```json
{
  "extends": "salt",
  "rules": {
    // your overrides
  }
}
```

## Other configs

This config also exposes a few other configs that will be used throughout
the duration of the course.

For vanilla JavaScript in the beginning of the course:

```json
{
  "extends": "salt/vanilla"
}
```

### React configs

The config for React are created as additions. Use the the following config:

```json
{
  "extends": [ "salt", "salt/react" ]
}
```

And for the config in case you are using React Hooks:


```json
{
  "extends": [ "salt", "salt/react", "salt/react/hooks" ]
}
```

## LICENSE

[ISC][license]

[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[eslint]: https://github.com/eslint/eslint
[airbnb]: https://github.com/airbnb/javascript
[version-badge]: https://img.shields.io/npm/v/eslint-config-salt.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-config-salt
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-salt.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/eslint-config-salt
[license-badge]: https://img.shields.io/npm/l/eslint-config-salt.svg?style=flat-square
[license]: https://github.com/appliedtechnology/eslint-config-salt/blob/master/LICENSE
