import { FC } from 'react'

import Avatar from '../../../../components/Avatar/Avatar'

import './UsersPageItem.scss'

const UsersPageItem: FC<Props> = ({ user, onClick }) => {
	return (
		<div className="users-item" onClick={onClick}>
			<Avatar img={user.avatar_url} />
			{user.login}
		</div>
	)
}

export default UsersPageItem

interface Props {
	user: any
	onClick: (userInfo: {}) => void
}
