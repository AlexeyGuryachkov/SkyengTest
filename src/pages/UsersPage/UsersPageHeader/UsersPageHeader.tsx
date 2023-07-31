import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'

import { setFilters } from '../../../store/users/users-reducer'
import { getFilters } from '../../../store/users/users-selectors'

import { filtersValues } from './consts'

import './UsersPageHeader.scss'

const UsersPageHeader: FC = () => {
	const dispatch = useDispatch()

	const { name } = useSelector(getFilters)

	const searchUsersOnChange = (text: string) => {
		dispatch(setFilters({ filters: { name: text, page: 1 } }))
	}

	const sortUsers = (value: string) => {
		dispatch(setFilters({ filters: { sort: value, page: 1 } }))
	}

	const handleSearchUsers = (text: string) => {
		if (text !== name) {
			dispatch(setFilters({ filters: { name: text, page: 1 } }))
		}
	}

	return (
		<div className="users-page-header">
			<Input
				text={name}
				label="Найти пользователя"
				setText={searchUsersOnChange}
				onBlur={handleSearchUsers}
				onEnterPress={handleSearchUsers}
			/>
			<Dropdown values={filtersValues} handleSelect={sortUsers} />
		</div>
	)
}

export default UsersPageHeader
