import { FC, memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'

import { clearNots } from '../../../store/nots/nots-reducer'

import './NotsItem.scss'

const NotsItem: FC<Props> = memo(({ msg, id }) => {
	const [isNotVisible, setIsNotVisible] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsNotVisible(false)
		}, 5000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch<any>(clearNots([]))
		}, 15000)

		return () => {
			clearTimeout(timer)
		}
	}, [dispatch, id])

	return <div className={cn('nots-item', { visible: isNotVisible })}>{msg}</div>
})

interface Props {
	msg: string
	id: number
}

export default NotsItem
