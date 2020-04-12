import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './screens/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from './assets/icons/logo.png';
import flag1 from './assets/icons/flag1.png';
import flag2 from './assets/icons/flag2.png';
import flag3 from './assets/icons/flag3.png';
import flag4 from './assets/icons/flag4.png';
import AboutBlock from './screens/AboutBlock';
import AboutTransactions from './screens/AboutTransactions';

function App() {
	return (
		<div style={{ backgroundColor: '#E5E5E5' }}>
			<Navbar
				expand="lg"
				style={{ paddingLeft: 50, paddingRight: 50, backgroundColor: '#fdfdfe', marginBottom: 40 }}
				lg="12"
			>
				<Navbar.Brand href="#home">
					<img
						src={logo}
						width="82"
						height="10"
						className="d-inline-block align-top-10"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop:10}}/>
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link href="#home">
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A' }}>Transactions</text>
					</Nav.Link>
					<Nav.Link href="#link">
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A' }}>Blocks</text>
					</Nav.Link>
					<Nav.Link href="#link">
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A' }}>FAQ</text>
					</Nav.Link>
					<Nav.Link href="#link">
						<Dropdown>
							<Dropdown.Toggle
								style={{
									color: '#0E9AFF',
									width: 50,
									borderRadius: 10,
									backgroundColor: '#fdfdfe',
									borderWidth: 0,
								}}
							>
								<img src={flag1} width="20" height="12" alt="GB" style={{ marginBottom: 5 }} />
							</Dropdown.Toggle>
							<Dropdown.Menu style={{ borderWidth: 0, borderRadius: 10, marginTop: 4, width: 'auto' }}>
								<Dropdown.Item href="#/action-1">
									<img src={flag2} width="20" height="12" alt="Rus" />
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									<img src={flag3} width="20" height="12" alt="German" />
								</Dropdown.Item>
								<Dropdown.Item href="#/action-3">
									<img src={flag4} width="20" height="12" alt="China" />
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav.Link>
					<Nav.Link href="#link">
						<Dropdown>
							<Dropdown.Toggle
								style={{
									color: '#0E9AFF',
									width: 70,
									borderRadius: 10,
									backgroundColor: '#fdfdfe',
									borderWidth: 0,
								}}
							>
								<text style={{ fontWeight: 'normal', fontSize: 15, color: '#1A1A1A' }}>$ USD</text>
							</Dropdown.Toggle>
							<Dropdown.Menu style={{ borderWidth: 0, borderRadius: 10, marginTop: 4, width: 'auto' }}>
								<Dropdown.Item href="#/action-1">
									<text style={{ fontWeight: 'normal', fontSize: 15, color: '#1A1A1A' }}>$ USD</text>
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									<text style={{ fontWeight: 'normal', fontSize: 15, color: '#1A1A1A' }}>$ USD</text>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav.Link>
				</Navbar.Collapse>
			</Navbar>
			<Router>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/AboutBlock" component={AboutBlock} />
				<Route exact path="/AboutTransactions" component={AboutTransactions} />
			</Router>
		</div>
	);
}

export default App;
