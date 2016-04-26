# Story Planner

> A story planning tool built as the basis for a React tutorial

Allows you to plan the plot for a story using a cross-platform desktop application using Electron,
React and Redux. Based on a [boilerplate by chentsulin](https://github.com/chentsulin/electron-react-boilerplate).

## Install

First, clone the repo via git:

```bash
git clone https://github.com/will-hart/story-planner.git story-planner
```

And then install dependencies.

```bash
$ cd story-planner && npm install
```


## Run

Run this two commands __simultaneously__ in different console tabs.

```bash
$ npm run hot-server
$ npm run start-hot
```

or run two servers with one command

```bash
$ npm run dev
```

*Note: requires a node version >= 4 and an npm version >= 2.*


## Package

```bash
$ npm run package
```

To package apps for all platforms:

```bash
$ npm run package-all
```

#### Options

- --name, -n: Application name (default: ElectronReact)
- --version, -v: Electron version (default: latest version)
- --asar, -a: [asar](https://github.com/atom/asar) support (default: false)
- --icon, -i: Application icon
- --all: pack for all platforms

Use `electron-packager` to pack your app with `--all` options for darwin (osx), linux and win32 (windows) platform. After build, you will find them in `release` folder. Otherwise, you will only find one for your os.

`test`, `tools`, `release` folder and devDependencies in `package.json` will be ignored by default.

##

## Original Boilerplate Maintainers

- [C. T. Lin](https://github.com/chentsulin)
- [Jhen-Jie Hong](https://github.com/jhen0409)


## License
MIT © [Will Hart](https://github.com/will-hart)