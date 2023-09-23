# Just Another Social Network

An extremely minimal text editor whose primary purpose is to demonstrate use of **npm idb** (an npm package encapsulating IndexedDB) and [**PWA**](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

## Description

This model text editor really only enables the kind of text manipulation that is typically already available in the simplest possible text editor (e.g. Notepad, etc.) or in a typical HTML textarea field.  It has no direct access to the client's file system and can save and retrieve only a single document from a client-based IndexedDB database.

The **real** purpose of this application is simply to enable demonstration of the ability to very simple [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) and to make use of [npm idb](https://www.npmjs.com/package/idb) for purposes of storing and retrieving data.

As is expected of a PWA, the application code is segregated into distinct *client* and *server* sections, each of those named as such and each having its own npm environment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

*(Note: These are installation instructions from a developer's point of view.  Inasmuch as this is a deployed web application, there is no installation for end users beyond accessing the [Heroku site URL for this app](https://limitless-taiga-69389-73b7aa8088f4.herokuapp.com/).)*

### Developer installation instructions:

1. Install Node.js® if it is not already installed.    ([Node downloads](https://nodejs.org/en/download))
2. from the [just-another-text-editor repository of GitHub](https://github.com/stevreut/just-another-text-editor):
    - select the green "**<> Code**" button
    - select the "**Download ZIP**" button from the resulting pop-up dialog
3. Placed the resulting `just-another-text-editor-main.zip` file in the location of your choice.
4. Unpack the `just-another-text-editor-main.zip` file, which should resulting in a folder/directory with name `just-another-text-editor-main`:
    - on Mac: double-click
    - on Windows: right-click and [follow these instructions](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc)
5. Using bash, Mac terminal, or equivalent utility:
    - `cd` to the resulting `just-another-text-editor-main` directory
    - `npm install`
6. Again using bash, Mac terminal, or equivalent:
    - `npm run install`
7. To start the server locally:
    - `npm run start:dev`  *or*  `npm run start` 

## Usage

### End user

  - Access the [Heroku-deployed site](https://limitless-taiga-69389-73b7aa8088f4.herokuapp.com/)

### Developer/tester

  - Access the local server at [localhost:3000](http://localhost:3000)  (noting, however, that the port *might* not be 3000 and the local server console logging should be checked to verify whether 3000 or some other port is in use)

## Credits

Special thanks to the teaching staff of the University of Pennsylvania Full Stack Coding Boot Camp (UPENN-VIRT-FSF-FT-07-2023-U-LOLC-M-F).

The class training materials and associated repository, especially activity 27 of unit 19 were consulted extensively and, to a lesser degree, other activity sections also in unit 19 of those materials.

In addition to the code samples made available as part of the Coding Boot Camp, the following external resources was consulted:

- [npm idb *("IndexedDB with usability.)*](https://www.npmjs.com/package/idb)


## License

As of this date (22 September 2023), no licensing policy has been established for this project or its repository.
