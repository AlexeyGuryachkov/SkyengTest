import { FC } from 'react'
import cn from 'classnames'

import './Avatar.scss'

const Avatar: FC<Props> = ({ img, big }) => {
	return <img src={img} alt="user-avatar" className={cn('avatar', { big })} />
}

export default Avatar

interface Props {
	img: string
	big?: boolean
}
