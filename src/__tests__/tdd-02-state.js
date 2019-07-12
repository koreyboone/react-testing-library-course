// these should normally be in your jest setupTestFrameworkScriptFile
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each'

import React from 'react'
import {render} from '@testing-library/react'
import {Editor} from '../post-editor'

test.skip('renders a form with title, content, tags, and a submit button', () => {
  const {getByLabelText, getByText} = render(<Editor />)
  getByLabelText(/title/i)
  getByLabelText(/content/i)
  getByLabelText(/tags/i)
  getByText(/submit/i)
  // 🐨 click the submit button
  // 🐨 verify that the submit button is disabled when clicked
})
