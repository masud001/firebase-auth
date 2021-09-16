import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../Components/Context/AuthContext';
import UserLists from './UserLists';
export default function Dashboard() {
	const [error, setError] = useState('');
	const [user, setUser] = useState([]);
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	async function handelLogOut() {
		setError('');
		try {
			await logout();
			history.push('/login');
		} catch {
			setError('Failed to log Out');
		}
	}

	const getUsers = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		console.log(res);
		setUser(await res.json());
		console.log('Users : ', user);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col md={4}>
						<Card>
							<Card.Body>
								<h2 className='text-center mb-4'>Profile</h2>
								{error && <Alert variant='danger'>{error}</Alert>}
								<p>
									<strong>Email : </strong>
									{currentUser && currentUser.email}
								</p>

								<Link className='btn btn-primary w-100 mt-3' to='/update-profile'>
									Update Profile
								</Link>
							</Card.Body>
						</Card>

						<Button
							variant='link'
							onClick={handelLogOut}
							className='w-100'
							type='submit'
						>
							Log out
						</Button>
					</Col>

					<Col md={8}>
						<h3>User lists : </h3>
						<hr />
						<Row>
							{user.map((user) => {
								return (
									<Col md={6} key={user.id}>
										<Card className='mb-3'>
											<Card.Img variant='top' src={user.url} />
											<Card.Body>
												<Card.Title>{user.name}</Card.Title>
												<Card.Text>
													<p>
														<strong className='text-capitalize'>
															Email :{' '}
														</strong>{' '}
														{user.email}
													</p>
													<p>
														<strong className='text-capitalize'>
															phone :{' '}
														</strong>{' '}
														{user.phone}
													</p>
													<p>
														<strong className='text-capitalize'>
															website :{' '}
														</strong>{' '}
														{user.website}
													</p>
													<p>
														<strong className='text-capitalize'>
															company :{' '}
														</strong>
														{user.company.name}
													</p>
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}
