import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png';
import flag1 from '../../assets/icons/flag1.png';
import flag2 from '../../assets/icons/flag2.png';
import flag3 from '../../assets/icons/flag3.png';
import flag4 from '../../assets/icons/flag4.png';

function Header() {
	return (
		<Navbar
			expand="lg"
			style={{
				paddingLeft: 100,
				paddingRight: 100,
				backgroundColor: '#fdfdfe',
				marginBottom: 40,
				boxShadow: '0px 2px 25px rgba(68, 69, 78, 0.09)',
			}}
			lg="12"
		>
			<Navbar.Brand href="/">
				<img src={logo} width="128" height="16" className="d-inline-block align-top-10" alt="Logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginTop: 10 }} />
			<Navbar.Collapse className="justify-content-end">
				<Nav.Link href="/AboutTransactions">
					<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A' }}>Transactions</text>
				</Nav.Link>
				<Nav.Link href="/AboutBlock">
					<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A' }}>Blocks</text>
				</Nav.Link>
				<Nav.Link href="/Help">
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
						<Dropdown.Menu className="w-25" style={{ borderWidth: 0, borderRadius: 10, marginTop: 4 }}>
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
	);
}

export default Header;
