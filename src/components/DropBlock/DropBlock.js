import React from 'react';
import logo1 from '../../assets/icons/logo1.png';
import logo2 from '../../assets/icons/logo2.png';
import logo3 from '../../assets/icons/logo3.png';
import logo4 from '../../assets/icons/logo4.png';
import logo5 from '../../assets/icons/logo5.png';
import { Dropdown } from 'react-bootstrap';

class DropBlock extends React.Component {
	render() {
		return (
			<Dropdown>
				<Dropdown.Toggle
					style={{
						color: '#0E9AFF',
						width: 210,
						borderRadius: 10,
						backgroundColor: '#fdfdfe',
						borderWidth: 0,
					}}
				>
					<img src={logo1} width="10" height="20" alt="Ethereum" style={{ marginRight: 22 }} />
					<text style={{ fontWeight: '800', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}>Ethereum</text>
				</Dropdown.Toggle>
				<Dropdown.Menu style={{ width: 210, borderWidth: 0, borderRadius: 10, marginTop: 4 }}>
					<Dropdown.Item
						href="#/action-2"
						style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}
					>
						<img src={logo2} width="20" height="20" alt="Bitcoin" style={{ marginRight: 22 }} />
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}>
							Bitcoin
						</text>
					</Dropdown.Item>
					<Dropdown.Item
						href="#/action-3"
						style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}
					>
						<img src={logo3} width="20" height="20" alt="BitcoinCash" style={{ marginRight: 22 }} />
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}>
							BitcoinCash
						</text>
					</Dropdown.Item>
					<Dropdown.Item
						href="#/action-3"
						style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}
					>
						<img src={logo4} width="20" height="20" alt="Ripple" style={{ marginRight: 22 }} />
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}>
							Ripple
						</text>
					</Dropdown.Item>
					<Dropdown.Item
						href="#/action-3"
						style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}
					>
						<img src={logo5} width="20" height="20" alt="Litecoin" style={{ marginRight: 22 }} />
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}>
							Litecoin
						</text>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	}
}

export default DropBlock;
