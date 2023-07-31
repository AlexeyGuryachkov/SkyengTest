import { FC, memo, useEffect } from 'react'
import cn from 'classnames'

import './Preloader.scss'

const Preloader: FC<Props> = memo(({ isShow }) => {
	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [isShow])

	return (
		<div className={cn('preloader-wrapper', { show: isShow })}>
			<i />
		</div>
	)
})

interface Props {
	isShow: boolean
}

export default Preloader
