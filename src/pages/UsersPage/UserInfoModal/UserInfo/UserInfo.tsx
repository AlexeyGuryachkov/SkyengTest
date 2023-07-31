import { FC } from 'react'

import { IUserInfo } from '../../../../store/users/users-types'

import './UserInfo.scss'

const UserInfo: FC<Props> = ({ userInfo }) => {
	if (!userInfo) return null

	const { login, html_url } = userInfo

	return (
		<div className="user-info">
			<div className="user-info__stroke">
				<p>Логин: </p>
				{login}
			</div>
			<div className="user-info__stroke">
				<p>GitHub: </p>
				<a href={html_url} target="_blank" rel="noreferrer">
					{html_url}
				</a>
			</div>
		</div>
	)
}

export default UserInfo

interface Props {
	userInfo: IUserInfo | null
}
