import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../Components/Context/AuthContext';
import { Link } from 'react-router-dom';
export default function ForgotPassWord() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	async function handelSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setMessage('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Check your inbox for further info');
		} catch {
			setError('Failde to reset Email');
		}
		setLoading(false);
	}
	return (
		<React.Fragment>
			<Container>
				<Card>
					<Card.Body>
						<h2 className='text-center mb-4'>Forgot Password</h2>
						{error && <Alert variant='danger'>{error}</Alert>}
						{message && <Alert variant='success'>{message}</Alert>}

						<Form onSubmit={handelSubmit}>
							<Form.Group id='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control type='email' ref={emailRef} required />
							</Form.Group>

							<Button disabled={loading} className='w-100' type='submit'>
								Reset Password
							</Button>
							<div className='w-100 text-center mt-3'>
								<Link to='/login'> Login</Link>
							</div>
						</Form>
					</Card.Body>
				</Card>
				<div className='w-100 text-center mt-3'>
					Need an account
					<Link to='/signup'> Signup</Link> ?
				</div>
			</Container>
		</React.Fragment>
	);
}
