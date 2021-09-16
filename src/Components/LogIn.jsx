import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Components/Context/AuthContext';
export default function LogIn() {
	const emailRef = useRef();
	const passwordRef = useRef();

	const { login, currentUser } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	async function handelSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch {
			setError('Failde to sign in');
		}
		setLoading(false);
	}
	return (
		<React.Fragment>
			<Container>
				<Row className='justify-content-center'>
					<Col md={6}>
						<Card>
							<Card.Body>
								<h2 className='text-center mb-4'>Login</h2>
								{error && <Alert variant='danger'>{error}</Alert>}
								{currentUser && currentUser.email}
								<Form onSubmit={handelSubmit}>
									<Form.Group id='email'>
										<Form.Label>Email</Form.Label>
										<Form.Control type='email' ref={emailRef} required />
									</Form.Group>
									<Form.Group id='password'>
										<Form.Label>Password</Form.Label>
										<Form.Control type='password' ref={passwordRef} required />
									</Form.Group>

									<Button disabled={loading} className='w-100' type='submit'>
										Login
									</Button>
									<div className='w-100 text-center mt-3'>
										<Link to='/forgot-password'> Forgot Password</Link> ?
									</div>
								</Form>
							</Card.Body>
						</Card>
						<div className='w-100 text-center mt-3'>
							Need an account
							<Link to='/signup'> Signup</Link> ?
						</div>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}
