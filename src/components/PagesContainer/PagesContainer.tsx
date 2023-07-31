import { FC, ReactNode } from 'react'

import './PagesContainer.scss'

const PagesContainer: FC<Props> = ({ children }) => {
	return <div className="pages-container">{children}</div>
}

export default PagesContainer

interface Props {
	children: ReactNode
}
