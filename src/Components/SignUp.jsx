import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/Context/AuthContext';
const SignUp = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signUp, currentUser } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handelSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('password donot match!');
		}
		try {
			setError('');
			setLoading(true);
			await signUp(emailRef.current.value, passwordRef.current.value);
		} catch {
			setError('Failde to create an account!');
		}
		setLoading(false);
	}

	return (
		<React.Fragment>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Sign Up</h2>
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
						<Form.Group id='password-confirm'>
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control type='password' ref={passwordConfirmRef} required />
						</Form.Group>
						<Button disabled={loading} className='w-100' type='submit'>
							Sign up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-3'>
				Already have an account ?<Link to='/login'>Log in</Link>
			</div>
		</React.Fragment>
	);
};

export default SignUp;
