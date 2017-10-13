Electron Boilerplate
--------------

(WIP) template for Electron apps using [Electron Forge](https://github.com/electron-userland/electron-forge/) and built upon its basic template.

- Simple (read crude) structure for multi-view desktop app
- Support SCSS files (just import scss in index - see current index.html)
- Can use npm modules in src/js/script.js file 
- Allow to package app for other architectures (OSX, Win, Linux)
- Already includes jquery-2


## Setup
```bash
npm install -g electron-forge
npm install
```

## Run
```bash
electron-forge start
```

----------

## TODO
- App icon
- Test on Raspberry-Pi (for kiosk applications, ie using [Benja](https://benja.io/))
- electron-forge package not working ATM - issues due to npm5
