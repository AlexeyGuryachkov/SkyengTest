import { FC, useState, useEffect, ReactNode } from 'react'
import cn from 'classnames'

import './Modal.scss'

const Modal: FC<Props> = ({ children, isShow, onClose }) => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const handleCloseModal = (value: any) => {
		if (!value.closest('modal-container')) {
			onClose()
			setIsActive(false)
		}
	}

	useEffect(() => {
		if (isShow) {
			setTimeout(() => {
				setIsActive(true)
			}, 0)
		}
	}, [isShow])

	return (
		<div
			className={cn('modal-wrapper', { active: isShow })}
			onClick={({ target }) => handleCloseModal(target)}
		>
			<div className={cn('modal-container', { active: isActive })}>{children}</div>
		</div>
	)
}

export default Modal

interface Props {
	children: ReactNode
	isShow: boolean
	onClose: () => void
}
