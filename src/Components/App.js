import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import PrivateRoute from './PrivateRoute';
import ForgotPassWord from './ForgotPassWord';
import UpdateProfile from './UpdateProfile';

function App() {
	return (
		<Container className='App-header mt-4 pt-5'>
			{/* <Row className='justify-content-center'> */}
			{/* <Col md={6}> */}
			<Router>
				<AuthProvider>
					<Switch>
						<PrivateRoute exact path='/' component={Dashboard} />
						<PrivateRoute path='/update-profile' component={UpdateProfile} />
						<Route path='/signup' component={SignUp} />
						<Route path='/login' component={LogIn} />
						<Route path='/forgot-password' component={ForgotPassWord} />
					</Switch>
				</AuthProvider>
			</Router>
			{/* <SignUp /> */}
			{/* </Col> */}
			{/* </Row> */}
		</Container>
	);
}

export default App;
