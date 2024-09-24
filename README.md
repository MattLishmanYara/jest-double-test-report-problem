# Jest double test result problem

This repository shows an example of Jest reporting double the number of tests while the tests are running.

The number is only incorrect while the rests are running, the final result is correct.

The number is only incorrect when using projects.

## Steps to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run test:projects` - Shows double the tests while running
4. Run `npm run test` - Shows the correct number of tests while running

_Note: If it is not possible to see the incorrect numbers because it clears the console too quickly, the Jest reporter can be edited._

1. Open `node_modules/@jest/reporters/build/DefaultReporter.js`
2. Edit the constructor to no longer clear the console:

```javascript
this._status.onChange(() => {
  // this.__clearStatus();
  this.__printStatus();
});
```

## Expected behavior

The test number should count up to 50 passing tests.

## Actual behavior

The test number counts up to 89 passing tests and then once fully completed, reverts to 50.