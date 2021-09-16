import React, { Component } from 'react';
import User from './User';
export default class UserLists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		fetch('https://reqres.in/api/users?page=2')
			.then((res) => res.json())
			.then((userData) => this.setState({ users: userData.data }));
	}

	render() {
		console.log(this.state.users);
		return (
			<div>
				<User users={this.state.users} />
			</div>
		);
	}
}
