import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Components/Context/AuthContext';
export default function PrivateRoute({ component: Component, ...rest }) {
	const { currentUser } = useAuth();
	return (
		<React.Fragment>
			<Route
				{...rest}
				render={(props) => {
					return currentUser ? <Component {...props} /> : <Redirect to='/login' />;
				}}
			></Route>
		</React.Fragment>
	);
}
