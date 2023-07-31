import { FC } from 'react'

import Avatar from '../../../components/Avatar/Avatar'
import UserInfo from './UserInfo/UserInfo'

import { IUserInfo } from '../../../store/users/users-types'

import './UserInfoModal.scss'

const UserInfoModal: FC<Props> = ({ userInfo }) => {
	if (!userInfo) return null

	const { avatar_url } = userInfo

	return (
		<div className="user-info-modal">
			<Avatar img={avatar_url} big />
			<UserInfo userInfo={userInfo} />
		</div>
	)
}

export default UserInfoModal

interface Props {
	userInfo: IUserInfo | null
}
