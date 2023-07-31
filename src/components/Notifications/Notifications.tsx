import { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import NotsItem from './NotsItem/NotsItem'

import { getNots } from '../../store/nots/nots-selectors'

import './Notifications.scss'

const Notifications: FC = memo(() => {
	const nots = useSelector(getNots)

	return (
		<div className="notifications-wrapper">
			{nots?.map(({ message, id }) => (
				<NotsItem key={id} msg={message} id={id} />
			))}
		</div>
	)
})

export default Notifications
