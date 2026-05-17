import test from 'node:test'
import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import LearningDockerCicd from '../src/components/LearningDockerCicd.js'

test('renders the Learning Docker and CI/CD heading', () => {
  const markup = renderToStaticMarkup(createElement(LearningDockerCicd))

  assert.match(markup, /Learning Docker and CI\/CD/)
  assert.match(markup, /learning-card/)
})
