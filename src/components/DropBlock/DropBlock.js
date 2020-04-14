import React from 'react';
import logo1 from '../../assets/icons/logo1.png';
import logo2 from '../../assets/icons/logo2.png';
import logo3 from '../../assets/icons/logo3.png';
import logo4 from '../../assets/icons/logo4.png';
import logo5 from '../../assets/icons/logo5.png';
import { Dropdown } from 'react-bootstrap';

class DropBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			v1: 0,
		};
	}
	render() {
		return (
			<Dropdown style={{ textAlign: 'center' }}>
				{this.state.v1 === 1 ? (
					<Dropdown.Toggle
						style={{
							color: '#0E9AFF',
							width: 250,
							borderRadius: 10,
							backgroundColor: '#fdfdfe',
							borderWidth: 0,
							height: 48,
						}}
					>
						<img src={logo2} width="28" height="28" alt="Ethereum" style={{ marginRight: 20 }} />
						<text style={{ fontWeight: '800', fontSize: 16, color: '#1A1A1A', marginRight: 96 }}>
							Bitcoin
						</text>
					</Dropdown.Toggle>
				) : this.state.v1 === 2 ? (
					<Dropdown.Toggle
						style={{
							color: '#0E9AFF',
							width: 250,
							borderRadius: 10,
							backgroundColor: '#fdfdfe',
							borderWidth: 0,
							height: 48,
						}}
					>
						<img src={logo3} width="28" height="28" alt="Ethereum" style={{ marginRight: 20 }} />
						<text style={{ fontWeight: '800', fontSize: 16, color: '#1A1A1A', marginRight: 56 }}>
							BitcoinCash
						</text>
					</Dropdown.Toggle>
				) : this.state.v1 === 3 ? (
					<Dropdown.Toggle
						style={{
							color: '#0E9AFF',
							width: 250,
							borderRadius: 10,
							backgroundColor: '#fdfdfe',
							borderWidth: 0,
							height: 48,
						}}
					>
						<img src={logo4} width="28" height="28" alt="Ethereum" style={{ marginRight: 20 }} />
						<text style={{ fontWeight: '800', fontSize: 16, color: '#1A1A1A', marginRight: 96 }}>
							Ripple
						</text>
					</Dropdown.Toggle>
				) : this.state.v1 === 4 ? (
					<Dropdown.Toggle
						style={{
							color: '#0E9AFF',
							width: 250,
							borderRadius: 10,
							backgroundColor: '#fdfdfe',
							borderWidth: 0,
							height: 48,
						}}
					>
						<img src={logo5} width="28" height="28" alt="Ethereum" style={{ marginRight: 20 }} />
						<text style={{ fontWeight: '800', fontSize: 16, color: '#1A1A1A', marginRight: 96 }}>
							Litecoin
						</text>
					</Dropdown.Toggle>
				) : (
					<Dropdown.Toggle
						style={{
							color: '#0E9AFF',
							width: 250,
							borderRadius: 10,
							backgroundColor: '#fdfdfe',
							borderWidth: 0,
							height: 48,
						}}
					>
						<img src={logo1} width="16" height="28" alt="Ethereum" style={{ marginRight: 20 }} />
						<text style={{ fontWeight: '800', fontSize: 16, color: '#1A1A1A', marginRight: 96 }}>
							Ethereum
						</text>
					</Dropdown.Toggle>
				)}
				<Dropdown.Menu
					style={{
						width: 250,
						borderWidth: 0,
						borderRadius: 10,
						marginTop: 4,
						shadowColor: '#000000',
						shadowOffset: {
							width: 0,
							height: 3,
						},
						shadowRadius: 16,
						shadowOpacity: 1,
						marginBottom: 30,
					}}
				>
					{this.state.v1 !== 0 ? (
						<Dropdown.Item
							onClick={() => {
								this.setState({ v1: 1 });
							}}
							style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}
						>
							<img src={logo1} width="12" height="20" alt="Ethereum" style={{ marginRight: 30 }} />
							<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 96 }}>
								Ethereum
							</text>
						</Dropdown.Item>
					) : null}
					<Dropdown.Item
						onClick={() => {
							this.setState({ v1: 1 });
						}}
						style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}
					>
						<img src={logo2} width="20" height="20" alt="Bitcoin" style={{ marginRight: 22 }} />
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}>
							Bitcoin
						</text>
					</Dropdown.Item>
					<Dropdown.Item
						onClick={() => {
							this.setState({ v1: 2 });
						}}
						style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}
					>
						<img src={logo3} width="20" height="20" alt="BitcoinCash" style={{ marginRight: 22 }} />
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}>
							BitcoinCash
						</text>
					</Dropdown.Item>
					<Dropdown.Item
						onClick={() => {
							this.setState({ v1: 3 });
						}}
						style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}
					>
						<img src={logo4} width="20" height="20" alt="Ripple" style={{ marginRight: 22 }} />
						<text style={{ fontWeight: 'normal', fontSize: 16, color: '#1A1A1A', marginRight: 66 }}>
							Ripple
						</text>
					</Dropdown.Item>
					<Dropdown.Item
						onClick={() => {
							this.setState({ v1: 4 });
						}}
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
