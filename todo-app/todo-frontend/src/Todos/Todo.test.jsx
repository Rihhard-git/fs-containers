/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Component testing is done with react-testing-library',
    done: false
  }

  render(<Todo todo={todo} onClickComplete={() => 'testing'} onClickDelete={() => 'testing'}/>)

  const text = screen.getByText('Component testing is done with react-testing-library')
  expect(text).toBeDefined()

})