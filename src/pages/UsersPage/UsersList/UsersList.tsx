import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import UsersPageItem from './UsersPageItem/UsersPageItem'
import Pagination from '../../../components/Pagination/Pagination'
import Modal from '../../../components/Modal/Modal'
import UserInfoModal from '../UserInfoModal/UserInfoModal'

import { getCount, getFilters, getUsers } from '../../../store/users/users-selectors'

import { IUserInfo } from '../../../store/users/users-types'

import './UsersList.scss'

const UsersList: FC = () => {
	const [userInfo, setUserInfo] = useState<IUserInfo | null>(null)
	const [isModalShow, setIsModalShow] = useState<boolean>(false)

	const filters = useSelector(getFilters)
	const users = useSelector(getUsers)
	const count = useSelector(getCount)

	const { page } = filters

	const handleSetUserInfo = (user: IUserInfo) => () => {
		setUserInfo(user)
		setIsModalShow(true)
	}

	const clearUserInfo = () => {
		setUserInfo(null)
		setIsModalShow(false)
	}

	return (
		<div className="users-list-wrapper">
			<div className="users-list">
				{!!users.length &&
					users.map((user) => {
						return <UsersPageItem key={user.id} user={user} onClick={handleSetUserInfo(user)} />
					})}
			</div>
			{count > 10 && <Pagination count={count} page={page} />}
			<Modal isShow={isModalShow} onClose={clearUserInfo}>
				<UserInfoModal userInfo={userInfo} />
			</Modal>
		</div>
	)
}

export default UsersList
