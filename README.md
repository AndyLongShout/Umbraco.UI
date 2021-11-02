![UI Library](docs/images/UI.png)

# Umbraco.UI

This is a UI-library for Umbraco CMS and friends. This means that all elements should make sense in any context.

The elements are web components built with [Lit](https://lit.dev/) and are meant to be displayed with [UI Library Storybook](https://uui.umbraco.com/). The storybook knobs and docs are automatically created from the source, so please make sure to add the appropriate jsdoc-comments. See an existing element (eg. uui-button) for inspiration, or checkout [web-component-analyzer](https://github.com/runem/web-component-analyzer) for docs.

## Components

| Component                                                                                                  | Status                                                                                     |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`<uui-avatar-group>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-avatar-group)           | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-avatar-group?logoColor=%231B264F)      |
| [`<uui-avatar>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-avatar)                       | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-avatar?logoColor=%231B264F)            |
| [`<uui-badge>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-badge)                         | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-badge?logoColor=%231B264F)             |
| [`uui-base`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-base)                             | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-base?logoColor=%231B264F)              |
| [`<uui-box>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-box)                             | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-box?logoColor=%231B264F)               |
| [`<uui-breadcrumbs>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-breadcrumbs)             | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-breadcrumbs?logoColor=%231B264F)       |
| [`<uui-button>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-button)                       | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-button?logoColor=%231B264F)            |
| [`<uui-button-group>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-button-group)           | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-button-group?logoColor=%231B264F)      |
| [`<uui-checkbox>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-checkbox)                   | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-checkbox?logoColor=%231B264F)          |
| [`<uui-input>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-input)                         | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-input?logoColor=%231B264F)             |
| [`<uui-keyboard-shortcut>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-keyboard-shortcut) | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-keyboard-shortcut?logoColor=%231B264F) |
| [`<uui-loader>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-loader)                       | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-loader?logoColor=%231B264F)            |
| [`<uui-loader-bar>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-loader-bar)               | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-loader-bar?logoColor=%231B264F)        |
| [`<uui-loader-circle>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-loader-circle)         | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-loader-circle?logoColor=%231B264F)     |
| [`<uui-radio>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-radio)                         | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-radio?logoColor=%231B264F)             |
| [`<uui-slider>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-slider)                       | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-slider?logoColor=%231B264F)            |
| [`<uui-table>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-table)                         | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-table?logoColor=%231B264F)             |
| [`<uui-tabs>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-tabs)                           | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-tabs?logoColor=%231B264F)              |
| [`<uui-tag>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-tag)                             | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-tag?logoColor=%231B264F)               |
| [`<uui-toggle>`](https://github.com/umbraco/Umbraco.UI/tree/dev/packages/uui-toggle)                       | ![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-toggle?logoColor=%231B264F)            |

## Get started

### Installation

This project uses nodejs, so you should install `nodejs` as the package manager on your machine. See [installation guide](https://nodejs.org/en/).

```sh
git clone https://github.com/umbraco/Umbraco.UI.git
npm install
```

### Run storybook

This command will build the project, start a server running storybook and watch for changes.

```sh
npm run storybook
```

### Run tests

This command will build the project and run tests.

```sh
npm run test
```

### Scripts overview

- `storybook` opens storybook for the elements
- `storybook:analyze` generate or update `custom-elements.json` file
- `test` runs your test suite with Web Test Runner
- `format` runs linter and autoformatter

## Contributions

- 📥 Pull requests and 🌟 Stars are always welcome.
- Read our [contributing guide](CONTRIBUTING.md) to get started.
