import React from 'react';
import { Card } from 'react-bootstrap';

export default function User(props) {
	console.log('from user component :', props.users);
	return (
		<div>
			<ul>
				{props.users.map((user) => {
					<li key={user.id}>lorem</li>;
				})}
			</ul>
		</div>
	);
}
