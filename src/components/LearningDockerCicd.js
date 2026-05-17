import { createElement } from 'react'

function LearningDockerCicd() {
  return createElement(
    'section',
    {
      className: 'learning-card',
      'aria-labelledby': 'learning-docker-cicd-heading',
    },
    createElement('p', { className: 'learning-card__eyebrow' }, 'React starter'),
    createElement(
      'h1',
      { id: 'learning-docker-cicd-heading' },
      'Learning Docker and CI/CD',
    ),
    createElement(
      'p',
      { className: 'learning-card__body' },
      'A simple, readable landing screen for practicing containers, pipelines, and deployment basics.',
    ),
    createElement(
      'ul',
      { className: 'learning-card__chips', 'aria-label': 'Topics' },
      createElement('li', null, 'Docker images'),
      createElement('li', null, 'CI pipelines'),
      createElement('li', null, 'Deployment flow'),
    ),
    createElement(
      'p',
      { className: 'learning-card__note' },
      'Keep it small, clear, and easy to build on.',
    ),
  )
}

export default LearningDockerCicd
