import instance from './api'

import { IUsersRequest } from '../store/users/users-types'

const userApi = {
	async getUsersByName({ name, sort, page }: IUsersRequest) {
		const responce = await instance.get(
			`/search/users?q=${name}&sort=${sort}&per_page=10&page=${page}`,
			{
				headers: {
					'X-GitHub-Api-Version': '2022-11-28',
				},
			}
		)

		return responce.data
	},
}

export default userApi
