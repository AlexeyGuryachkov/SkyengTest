export interface IUsersRequest {
	name: string
	sort?: string
	page: number
}

export interface IUserInfo {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
	score: number
}

export interface IUsersResponce {
	total_count: number
	incomplete_results: boolean
	items: IUserInfo[] | []
}

export interface IUserFilters {
	name: string
	sort: string
	page: number
}

export interface IUsersState {
	users: IUserInfo[] | []
	count: number
	isLoading: boolean
	filters: IUserFilters
}
