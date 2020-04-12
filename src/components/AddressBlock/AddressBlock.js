import React from 'react';
import { Table, Card, Row, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import out from '../../assets/icons/out.png';
import copy from '../../assets/icons/copy.png';
import qr from '../../assets/icons/qr.png';
import qrCode from '../../assets/icons/qrCode.png';
import inIcon from '../../assets/icons/inIcon.png';

const popover = (
	<Popover
		id="popover-basic"
		style={{ borderWidth: 0, boxShadow: '0px 2px 25px rgba(68, 69, 78, 0.09)', borderRadius: 15 }}
	>
		<Popover.Content>
			<img src={qrCode} width="200" height="200" alt="copy" />
		</Popover.Content>
	</Popover>
);

class AddressBlock extends React.Component {
	render() {
		return (
			<div>
				<Card
					style={{
						borderRadius: 30,
						borderWidth: 0,
						backgroundColor: '#fdfdfe',
						shadowColor: '#000000',
						shadowOffset: {
							width: 0,
							height: 3,
						},
						shadowRadius: 16,
						shadowOpacity: 1,
						marginBottom: 30,
						boxShadow: '0px 2px 25px rgba(68, 69, 78, 0.09)',
					}}
				>
					<Row style={{ padding: 21, paddingBottom: 0, paddingLeft: 10 }}>
						<Col>
							<Card.Title>
								<text style={{ fontSize: 20, color: '#1A1A1A', fontWeight: '700' }}>
									Address 0xb178e5E9bF67974b6f69C6DAd501DF7b4848Bef9
								</text>
								<img src={copy} width="20" height="20" alt="copy" style={{ marginLeft: 10 }} />
								<OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
									<img src={qr} width="20" height="20" alt="copy" style={{ marginLeft: 10 }} />
								</OverlayTrigger>
							</Card.Title>
						</Col>
					</Row>
					<Table
						striped
						variant="light"
						style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 0 }}
					>
						<tbody>
							<tr>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Balance:</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.030584595544619231 Ether
								</td>
							</tr>
							<tr>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>EtherValue:</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									$4.94 (@ $161.39/ETH)
								</td>
							</tr>
						</tbody>
					</Table>
				</Card>
				<Card
					style={{
						borderRadius: 30,
						borderWidth: 0,
						backgroundColor: '#fdfdfe',
						shadowColor: '#000000',
						shadowOffset: {
							width: 0,
							height: 3,
						},
						shadowRadius: 16,
						shadowOpacity: 1,
						marginBottom: 30,
						boxShadow: '0px 2px 25px rgba(68, 69, 78, 0.09)',
					}}
				>
					<Row style={{ padding: 21, paddingBottom: 0, paddingLeft: 10 }}>
						<Col>
							<Card.Title>
								<text style={{ fontSize: 20, color: '#1A1A1A', fontWeight: '700' }}>Transactions</text>
							</Card.Title>
						</Col>
					</Row>
					<Table
						striped
						variant="light"
						style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 0 }}
					>
						<thead>
							<tr>
								<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>
									Transaction Hash
								</th>
								<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Block</th>
								<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Age</th>
								<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>From</th>
								<th />
								<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>To</th>
								<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Value</th>
								<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Fee</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
									0xcf3f8a8e095ecda11e34b...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td>
									<img
										src={inIcon}
										width="50"
										height="18"
										className="d-inline-block align-top-10"
										alt="React Bootstrap logo"
										style={{ marginBottom: 10 }}
									/>
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.05280942945581 Ether
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.000147 Ether ($0.03)
								</td>
							</tr>
							<tr>
								<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
									0xcf3f8a8e095ecda11e34b...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td>
									<img
										src={out}
										width="50"
										height="18"
										className="d-inline-block align-top-10"
										alt="React Bootstrap logo"
										style={{ marginBottom: 10 }}
									/>
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.05280942945581 Ether
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.000147 Ether ($0.03)
								</td>
							</tr>
							<tr>
								<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
									0xcf3f8a8e095ecda11e34b...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td>
									<img
										src={inIcon}
										width="50"
										height="18"
										className="d-inline-block align-top-10"
										alt="React Bootstrap logo"
										style={{ marginBottom: 10 }}
									/>
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.05280942945581 Ether
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.000147 Ether ($0.03)
								</td>
							</tr>
							<tr>
								<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
									0xcf3f8a8e095ecda11e34b...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td>
									<img
										src={inIcon}
										width="50"
										height="18"
										className="d-inline-block align-top-10"
										alt="React Bootstrap logo"
										style={{ marginBottom: 10 }}
									/>
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.05280942945581 Ether
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.000147 Ether ($0.03)
								</td>
							</tr>
							<tr>
								<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
									0xcf3f8a8e095ecda11e34b...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td>
									<img
										src={inIcon}
										width="50"
										height="18"
										className="d-inline-block align-top-10"
										alt="React Bootstrap logo"
										style={{ marginBottom: 10 }}
									/>
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.05280942945581 Ether
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.000147 Ether ($0.03)
								</td>
							</tr>
							<tr>
								<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
									0xcf3f8a8e095ecda11e34b...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td>
									<img
										src={inIcon}
										width="50"
										height="18"
										className="d-inline-block align-top-10"
										alt="React Bootstrap logo"
										style={{ marginBottom: 10 }}
									/>
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0xb178e5E9bF67974b6f69...
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.05280942945581 Ether
								</td>
								<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									0.000147 Ether ($0.03)
								</td>
							</tr>
						</tbody>
					</Table>
				</Card>
			</div>
		);
	}
}

export default AddressBlock;
