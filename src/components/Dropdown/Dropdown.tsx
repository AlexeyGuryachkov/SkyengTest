import { FC, useState, useEffect, useCallback, useRef } from 'react'
import cn from 'classnames'

import './Dropdown.scss'

const Dropdown: FC<Props> = ({ values, handleSelect }) => {
	const [activeValue, setActiveValue] = useState(values[0])
	const [isActive, setIsActive] = useState(false)

	const dropdownRef = useRef<HTMLDivElement>(null)

	const showDropdown = () => setIsActive(!isActive)

	const selectValue = (value: IDropdownValue) => () => {
		setActiveValue(value)
		setIsActive(false)
		handleSelect(value.value)
	}

	const handleClickOutside = useCallback((target: any) => {
		if (!dropdownRef.current?.contains(target)) {
			setIsActive(false)
		}
	}, [])

	useEffect(() => {
		if (isActive) {
			document.addEventListener('click', ({ target }) => handleClickOutside(target))
		} else {
			document.removeEventListener('click', ({ target }) => handleClickOutside(target))
		}
	}, [handleClickOutside, isActive])

	return (
		<div className="dropdown-wrapper" ref={dropdownRef}>
			<div onClick={showDropdown} className={cn('dropdown', { active: isActive })}>
				{activeValue.title}
				<i className="dropdown-icon" />
			</div>
			<div className="dropdown-list">
				{values
					.filter((value) => value.value !== activeValue.value)
					.map((value) => (
						<div key={value.value} onClick={selectValue(value)} className="dropdown-list-item">
							{value.title}
						</div>
					))}
			</div>
		</div>
	)
}

export default Dropdown

interface IDropdownValue {
	value: string
	title: string
}

interface Props {
	handleSelect: (value: string) => void
	values: IDropdownValue[]
}
