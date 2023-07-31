import { FC, KeyboardEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'

import { setFilters } from '../../store/users/users-reducer'

import './Pagination.scss'

const Pagination: FC<Props> = ({ count, page }) => {
	const [pageValue, setPageValue] = useState<number>(page)
	const [isInputActive, setIsInputActive] = useState<boolean>(false)

	const inputRef = useRef<HTMLInputElement>(null)

	const pagesCount = Math.ceil(count / 10)

	const dispatch = useDispatch()

	const hadleOnKeyDown = (event: KeyboardEvent<HTMLElement>) => {
		if (event.key === 'Enter') {
			event.currentTarget.blur()
			setIsInputActive(false)
		}
	}

	const handleInputValidate = (value: any) => {
		if ((+value.match(/\d$/g) && value <= pagesCount && value !== '0') || value === '') {
			setPageValue(+value)
		}
	}

	const handlePrevPage = () => {
		if (page !== 1) {
			dispatch(setFilters({ filters: { page: page - 1 } }))
			setPageValue(+pageValue - 1)
		}
	}

	const handleNextPage = () => {
		if (page !== pagesCount) {
			dispatch(setFilters({ filters: { page: page + 1 } }))
			setPageValue(+pageValue + 1)
		}
	}

	const handleOnBlur = () => {
		if (page !== +pageValue) {
			dispatch(setFilters({ filters: { page: pageValue } }))
		}
		setIsInputActive(false)
	}

	const handleSelectPage = () => {
		setIsInputActive(true)
		inputRef.current?.focus()
	}

	return (
		<div className="pagination">
			<button
				type="button"
				className="pagination-button prev"
				disabled={page === 1}
				onClick={handlePrevPage}
			/>
			<div className="pagination-page-wrapper">
				<button
					type="button"
					className={cn('pagination-page', { active: isInputActive })}
					onClick={handleSelectPage}
				>
					{page}
				</button>
				<input
					ref={inputRef}
					className={cn('pagination-input', { active: isInputActive })}
					type="text"
					value={pageValue}
					onChange={({ target: { value } }) => handleInputValidate(value)}
					onKeyDown={hadleOnKeyDown}
					onBlur={handleOnBlur}
				/>
			</div>
			<p>из</p> {pagesCount}
			<button
				type="button"
				className="pagination-button next"
				disabled={page === pagesCount}
				onClick={handleNextPage}
			/>
		</div>
	)
}

export default Pagination

interface Props {
	count: number
	page: number
}
