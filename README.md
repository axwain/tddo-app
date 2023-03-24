## Tddo App

This is a borderless window application meant to be run on i3wm scratchpad.

I did this to practice more software testing and to have a little application to write "Todoy" items, i.e., things to-do today. I based this on the To-Do list from the Test Driven Development by example by Kent Beck at al.

### Motivation

I wanted to have a quick application to write pending tests and refactoring I want to do while developing applications. I also wanted for the application to not use too much system resources and that I can have it on i3's scratchpad.

I chose Neutralinojs to avoid learning a toolkit like GTK or Qt for now. I tried other more lightweight alternatives to Electron, to leverage my knowledge as a front-end developer and make this application quick, unfortunately Neutralinojs doesn't work as well under Mac (for the work-issued laptop) and borderless mode close button doesn't work for Windows.

For this reason, only the Linux release is ready to use, and the Windows one with a caveat (must close it with Alt + F4).

I'll rewrite this application once I can switch to Linux to make more development there.

### Scripts

This applications uses yarn classic version. Make sure to have it installed before running any command. It was developed using Node 18 LTS, Vite, NeutralinoJs and React 18.

The following scripts are available:

- `yarn dev` to build the react application and run it with Neutralinojs, while also opening the web inspector
- `dev:start` runs the application without rebuilding the React code
- `yarn start` to run the application without the inspector. It must have been build before hand.
- `yarn client:release` makes a release build of the application. Only the Linux one works as expected. Windows close button doesn't work, and Mac release doesn't get any input at all.
- `yarn test` for running tests.
- `build:icons` to build the icons needed by the application. It is used on _client:release_
