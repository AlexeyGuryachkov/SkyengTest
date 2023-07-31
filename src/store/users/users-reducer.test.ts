import store from '../store'
import { requestUsers, setUsers } from './users-reducer'
import usersReducer from './users-reducer'

test('Users reduser test: the state returned by the reducer must be equal to the mock data', () => {
	const state = store.getState().users

	const mockUsers = [
		{
			avatar_url: 'https://avatars.githubusercontent.com/u/6499936?v=4',
			events_url: 'https://api.github.com/users/charygao/events{/privacy}',
			followers_url: 'https://api.github.com/users/charygao/followers',
			following_url: 'https://api.github.com/users/charygao/following{/other_user}',
			gists_url: 'https://api.github.com/users/charygao/gists{/gist_id}',
			gravatar_id: '',
			html_url: 'https://github.com/charygao',
			id: 6499936,
			login: 'charygao',
			node_id: 'MDQ6VXNlcjY0OTk5MzY=',
			organizations_url: 'https://api.github.com/users/charygao/orgs',
			received_events_url: 'https://api.github.com/users/charygao/received_events',
			repos_url: 'https://api.github.com/users/charygao/repos',
			score: 1,
			site_admin: false,
			starred_url: 'https://api.github.com/users/charygao/starred{/owner}{/repo}',
			subscriptions_url: 'https://api.github.com/users/charygao/subscriptions',
			type: 'User',
			url: 'https://api.github.com/users/charygao',
		},
		{
			avatar_url: 'https://avatars.githubusercontent.com/u/52647469?v=4',
			events_url: 'https://api.github.com/users/hixio-mh/events{/privacy}',
			followers_url: 'https://api.github.com/users/hixio-mh/followers',
			following_url: 'https://api.github.com/users/hixio-mh/following{/other_user}',
			gists_url: 'https://api.github.com/users/hixio-mh/gists{/gist_id}',
			gravatar_id: '',
			html_url: 'https://github.com/hixio-mh',
			id: 52647469,
			login: 'hixio-mh',
			node_id: 'MDQ6VXNlcjUyNjQ3NDY5',
			organizations_url: 'https://api.github.com/users/hixio-mh/orgs',
			received_events_url: 'https://api.github.com/users/hixio-mh/received_events',
			repos_url: 'https://api.github.com/users/hixio-mh/repos',
			score: 1,
			site_admin: false,
			starred_url: 'https://api.github.com/users/hixio-mh/starred{/owner}{/repo}',
			subscriptions_url: 'https://api.github.com/users/hixio-mh/subscriptions',
			type: 'User',
			url: 'https://api.github.com/users/hixio-mh',
		},
	]

	const newState = usersReducer(state, setUsers({ users: mockUsers }))

	expect(newState.users).toEqual(mockUsers)
})

test('Request users thunk test: setUsers action payload must be equal to mock data', async () => {
	const mockUsersState = {
		users: [],
		count: 0,
		isLoading: false,
		filters: {
			name: 'AlexeyGuryachkov',
			sort: 'repositories',
			page: 1,
		},
	}

	const mockUserData = {
		users: [
			{
				login: 'AlexeyGuryachkov',
				id: 67594479,
				node_id: 'MDQ6VXNlcjY3NTk0NDc5',
				avatar_url: 'https://avatars.githubusercontent.com/u/67594479?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/AlexeyGuryachkov',
				html_url: 'https://github.com/AlexeyGuryachkov',
				followers_url: 'https://api.github.com/users/AlexeyGuryachkov/followers',
				following_url: 'https://api.github.com/users/AlexeyGuryachkov/following{/other_user}',
				gists_url: 'https://api.github.com/users/AlexeyGuryachkov/gists{/gist_id}',
				starred_url: 'https://api.github.com/users/AlexeyGuryachkov/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/AlexeyGuryachkov/subscriptions',
				organizations_url: 'https://api.github.com/users/AlexeyGuryachkov/orgs',
				repos_url: 'https://api.github.com/users/AlexeyGuryachkov/repos',
				events_url: 'https://api.github.com/users/AlexeyGuryachkov/events{/privacy}',
				received_events_url: 'https://api.github.com/users/AlexeyGuryachkov/received_events',
				type: 'User',
				site_admin: false,
				score: 1,
			},
		],
	}

	const dispatch = jest.fn()
	const thunk = requestUsers()

	await thunk(dispatch, (): any => ({ users: mockUsersState }), '')

	const {
		mock: { calls },
	} = dispatch

	/* setIsLoading -> setCount -> setUsers -> setIsLoading */
	expect(calls).toHaveLength(4)

	/* setUsers */
	expect(calls[2][0].payload).toStrictEqual(mockUserData)
})
