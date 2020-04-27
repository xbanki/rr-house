# RRHouse Company Homepage #

![Dependencies](https://img.shields.io/david/xbanki/rr-house?style=flat-square)
![License](https://img.shields.io/github/license/xbanki/rr-house?style=flat-square)

A simple but beautiful & well designed homepage comissioned by RRHouse, built on top of Vue and TailwindCSS.

# Table of Contents #

 - [Getting Started](#getting-started)
   - [Script Reference](#script-reference)
 - [License](#license)

# Getting Started #

 - Clone this repository using Git or download as zip
 - Open your favorite shell client
 - Run `cd path/to/rr-house` inside of the client
 - Run `npm i` to install all of Node.js dependencies
 - Run `npm run build` to build the source files in to `./build` folder
 - Navigate to the build output folder using any file explorer, opening up `index.html` in your chosen web browser
 - Or instead of doing `npm run build` , do the following:
   - Duplicate `.env.example` , renaming the copy to `dev.env` and filling out the fields inside of it
   - Run `npm run build:production` to start up a development server

## Script Reference ##

Below you will find a table containing all of the availlable [npm](https://nodejs.org/en/) command line scripts to interact with the codebase in certain ways.

Each row inside of the table must have a command column, denoting what you actually have to run. For example, if we take the very first item in our table, we'd have to run `npm run build` .

Rows marked with `Requires run: Yes` must use `npm run {command}` syntax to execute the script. Otherwise `run` keyword can be omitted.

| Command | Requires Run | Type | Description
|---|---|---| --- |
| `build` | **Yes** | Compiling | Builds project contents once using [Webpack](https://webpack.js.org/) in development mode in to `./build/` folder.
| `build:production` | **Yes** | Compiling | Builds codebase using [Webpack](https://webpack.js.org/) in production mode, minifying the output and splitting certain parts of the code in to smaller chunks.
| `build:development` | **Yes** | Compiling | Builds project contents in watch mode using [Webpack](https://webpack.js.org/) in development mode, re-building once changes to the codebase are detected
| `lint` | **Yes** | Code Quality | Runs [ESLint](https://eslint.org/) configurations on codebase, printing any warnings or errors in to console.
| `lint:ts` | **Yes** | Code Quality | Same as above, but only running on [TypeScript](https://typescriptlang.org/) source files.
| `lint:js` | **Yes** | Code Quality | Same as above, but only running on vanilla JavaScript source files.
| `lint:vue` | **Yes** | Code Quality | Same as above, but only running on [Vue](https://vuejs.org/) single-file component source files.
| `lint:fix` | **Yes** | Code Quality | Same as `npm run lint lint` , but fixes any suppored fixable rules.
| `lint:fix:ts` | **Yes** | Code Quality | Same as above, but only running on [TypeScript](https://typescriptlang.org/) source files.
| `lint:fix:js` | **Yes** | Code Quality | Same as above, but only running on vanilla JavaScript source files.
| `lint:fix:vue` | **Yes** | Code Quality | Same as above, but only running on [Vue](https://vuejs.org/) single-file component source files.

# License #

This repository is licensed under the [MIT License](./LICENSE).