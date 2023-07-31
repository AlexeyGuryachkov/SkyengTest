import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import UsersPageHeader from './UsersPageHeader/UsersPageHeader'
import UsersList from './UsersList/UsersList'

import { clearUsersState, requestUsers, setUsers } from '../../store/users/users-reducer'

import { getFilters, getIsLoading } from '../../store/users/users-selectors'

import './UsersPage.scss'
import Preloader from '../../components/Preloader/Preloader'

const UsersPage: FC = () => {
	const dispatch = useDispatch()

	const filters = useSelector(getFilters)
	const isLoading = useSelector(getIsLoading)

	useEffect(() => {
		if (!!filters.name.length) {
			dispatch<any>(requestUsers())
		} else {
			dispatch(setUsers({ users: [] }))
		}
	}, [dispatch, filters])

	useEffect(
		() => () => {
			dispatch<any>(clearUsersState())
		},
		[dispatch]
	)

	return (
		<div className="users-page page">
			<div className="users-page__description">
				<div className="title">Тестовое задание для Skyeng на позицию Web-разработчик</div>
				<div className="subtitle">
					Приложение использует GitHub REST API для поиска пользователей Github по никнейму
				</div>
			</div>
			<div className="users-page__body">
				<UsersPageHeader />
				{filters.name ? (
					<UsersList />
				) : (
					<div className="users-page__body--plug">
						<div className="title">Здесь пока пусто</div>
						<div className="subtitle">Начните вводить никнейм пользователя в поле выше</div>
					</div>
				)}
			</div>
			<Preloader isShow={isLoading} />
		</div>
	)
}

export default UsersPage
