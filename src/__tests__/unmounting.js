// these should normally be in your jest setupTestFrameworkScriptFile
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each'

// 0⃣ 🐨 you're gonna need these
// import React from 'react'
// import {render} from '@testing-library/react'
// import {Countdown} from '../countdown'

// because we're doing a time-based thing in our component, we need to force
// time in our tests to pass by a determanistic amount.
// 3⃣ 🐨 Use the `jest.useFakeTimers` API:
// jest.useFakeTimers() // 💯
// 📖 https://jestjs.io/docs/en/timer-mocks.html

// we need to spy on console.error so we can assert that it's not called
// (if it is called then that means we're calling setState after the component
// was unmounted)
// 5⃣ 🐨 before each test use `jest.spyOn` to spy on console.error
// 📖 https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname
// 6⃣ 🐨 after each test, use `mockRestore` to cleanup after yourself.
// 📖 https://jestjs.io/docs/en/mock-function-api#mockfnmockrestore

test('does not attempt to set state when unmounted (to prevent memory leaks)', () => {
  // 1⃣ 🐨 render the countdown
  // 2⃣ 🐨 unmount the component
  // 📖 https://github.com/kentcdodds/react-testing-library/blob/b18ff5b96210a887e784b9f53bd886e11b6ed5e0/README.md#unmount
  //
  // now that our component has unmounted, we need to make time pass.
  // 4⃣ 🐨 Use `jest.runOnlyPendingTimers` to make time pass.
  // 📖 https://jestjs.io/docs/en/timer-mocks.html
  //
  // 7⃣ 🐨 Make an assertion that console.error was not called
  // (then, you can test that it worked by removing the componentWillUnMount in
  // the countdown component)
})
