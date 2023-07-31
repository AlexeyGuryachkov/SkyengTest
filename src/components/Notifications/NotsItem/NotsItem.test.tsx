import { render } from '@testing-library/react'
import * as reduxHooks from 'react-redux'
import NotsItem from './NotsItem'

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

describe('Notifications', () => {
	it('should create shapshot of notification component contains "test message for snapshot" message', () => {
		mockedDispatch.mockReturnValue(jest.fn())

		const view = render(<NotsItem id={1} msg={'test message for snapshot'} />)

		expect(view).toMatchSnapshot()
	})
})
