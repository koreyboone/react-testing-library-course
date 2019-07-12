import '@testing-library/jest-dom/extend-expect'

import React from 'react'
// 🐨 remove this import:
import ReactDOM from 'react-dom'
// 🐨 remove this import:
import {getQueriesForElement} from '@testing-library/dom'
// 🐨 you'll need to import the render function from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 remove this div (render will make one for you)
  const div = document.createElement('div')
  // 🐨 remove this ReactDOM.render call and use render from react-testing-library instead.
  // 📖 read docs here: https://github.com/kentcdodds/react-testing-library/blob/master/README.md#render
  ReactDOM.render(<FavoriteNumber />, div)
  // 🐨 you don't need this anymore, you'll get the getByLabelText function from calling `render`
  const {getByLabelText} = getQueriesForElement(div)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
