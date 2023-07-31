import axios from 'axios'

export const url = process.env.REACT_APP_HTTP_URL

const instance = axios.create({
	baseURL: url,
	headers: {
		Authorization: '',
	},
})

export default instance

export interface APIResponse<T> {
	ok: boolean
	result: T
}

export type APIErrorResult = APIResponse<string>
