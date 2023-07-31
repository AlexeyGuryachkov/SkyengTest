import { FC, KeyboardEvent } from 'react'

import './Input.scss'

const Input: FC<Props> = ({ text, setText, onBlur, onEnterPress, label }) => {
	const hanldeOnKeyPress = (event: KeyboardEvent<HTMLElement>) => {
		if (event.key === 'Enter') {
			onEnterPress(text)
		}
	}
	return (
		<div className="input-wrapper">
			<input
				type="text"
				className="input"
				value={text}
				onChange={({ target: { value } }) => setText(value)}
				onBlur={() => onBlur(text)}
				onKeyDown={hanldeOnKeyPress}
			/>
			<label className="input-label">{label}</label>
		</div>
	)
}

export default Input

interface Props {
	text: string
	label: string
	setText: (text: string) => void
	onBlur: (text: string) => void
	onEnterPress: (text: string) => void
}
