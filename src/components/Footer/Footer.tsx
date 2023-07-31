import { FC } from 'react'

import './Footer.scss'

const Footer: FC = () => (
	<div className="footer">
		<div className="footer-row">Тестовое задание выполнил Гурячков Алексей.</div>
		<div className="footer-row">
			<p>Моя почта:</p> alexey.guryachkov@gmail.com
		</div>
		<div className="footer-row">
			<p>Мой telegram: </p>
			<a href="https://t.me/aguryachkov" target="_blank" rel="noreferrer">
				@aguryachkov
			</a>
		</div>
		<div className="footer-row">
			<p>Мой телефон:</p> +79114965936
		</div>
		<div className="footer-row">
			<p>Моё резюме:</p>
			<a
				href="https://kaliningrad.hh.ru/resume/361444aaff07da77b00039ed1f337177626d6f"
				target="_blank"
				rel="noreferrer"
			>
				kaliningrad.hh.ru
			</a>
		</div>
	</div>
)

export default Footer
