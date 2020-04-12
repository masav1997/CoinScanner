import React from 'react';
import { Table, Card, Row, Col } from 'react-bootstrap';
import success from '../../assets/icons/success.png';
import decline from '../../assets/icons/decline.png';

class TransactionsBlock extends React.Component {
	render() {
		return (
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
				}}
				
			>
				<Row style={{ padding: 21, paddingBottom: 0, paddingLeft: 10 }}>
					<Col>
						<Card.Title >
							<text style={{ fontSize: 20, color: '#1A1A1A', fontWeight: '700' }}>Transactions for block </text><text style={{ fontSize: 20, color: '#0E9AFF', fontWeight: '700' }}>624804</text> 
						</Card.Title>
					</Col>
				</Row>
				<Table
					striped
					variant="light"
					style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 0}}
				>
					<thead>
						<tr>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Transaction Hash</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Block</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Age</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>From</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>To</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Status</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Value</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Fee</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>0xcf3f8a8e095ecda11e34b...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td>
								<img
									src={success}
									width="65"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.05280942945581 Ether</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.000147 Ether ($0.03)</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>0xcf3f8a8e095ecda11e34b...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td>
								<img
									src={success}
									width="65"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.05280942945581 Ether</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.000147 Ether ($0.03)</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>0xcf3f8a8e095ecda11e34b...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td>
								<img
									src={success}
									width="65"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.05280942945581 Ether</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.000147 Ether ($0.03)</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>0xcf3f8a8e095ecda11e34b...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td>
								<img
									src={decline}
									width="65"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.05280942945581 Ether</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.000147 Ether ($0.03)</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>0xcf3f8a8e095ecda11e34b...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td>
								<img
									src={success}
									width="65"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.05280942945581 Ether</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.000147 Ether ($0.03)</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>0xcf3f8a8e095ecda11e34b...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>9842984</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>35 mins ago</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>0xb178e5E9bF67974b6f69...</td>
							<td>
								<img
									src={success}
									width="65"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.05280942945581 Ether</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.000147 Ether ($0.03)</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		);
	}
}

export default TransactionsBlock;
