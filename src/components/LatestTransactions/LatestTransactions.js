import React from 'react';
import { Table, Card, Row, Col } from 'react-bootstrap';
import success from '../../assets/icons/success.png';
import decline from '../../assets/icons/decline.png';

class LatestTransactions extends React.Component {
	render() {
		return (
			<Card
				style={{
					width: 'auto',
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
				<Row style={{ padding: 21, paddingBottom: 0, paddingLeft:11 }}>
					<Col>
						<Card.Title style={{ fontSize: 20, color: '#1A1A1A', fontWeight: '700' }}>
							Latest Transactions
						</Card.Title>
					</Col>
					<Col style={{ alignSelf: 'center' }}>
						<Card.Title
							style={{
								fontSize: 12,
								color: '#0E9AFF',
								fontWeight: '800',
								textAlign: 'right',
							}}
						>
							SHOW ALL
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
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Transaction Hash</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Status</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Value</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Fee</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
								0xcf3f8a8e095ecda11e34b...
							</td>
							<td>
								<img
									src={success}
									width="64"
									height="18"
									className="d-inline-block align-top-10"
									alt="Success"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.2 Ether ($34.54)</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0.000147 Ether
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
								0xcf3f8a8e095ecda11e34b...
							</td>
							<td>
								<img
									src={decline}
									width="64"
									height="18"
									className="d-inline-block align-top-10"
									alt="Decline"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.2 Ether ($34.54)</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0.000147 Ether
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
								0xcf3f8a8e095ecda11e34b...
							</td>
							<td>
								<img
									src={success}
									width="64"
									height="18"
									className="d-inline-block align-top-10"
									alt="Success"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.2 Ether ($34.54)</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0.000147 Ether
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
								0xcf3f8a8e095ecda11e34b...
							</td>
							<td>
								<img
									src={success}
									width="64"
									height="18"
									className="d-inline-block align-top-10"
									alt="Success"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.2 Ether ($34.54)</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0.000147 Ether
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
								0xcf3f8a8e095ecda11e34b...
							</td>
							<td>
								<img
									src={success}
									width="64"
									height="18"
									className="d-inline-block align-top-10"
									alt="Success"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.2 Ether ($34.54)</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0.000147 Ether
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>
								0xcf3f8a8e095ecda11e34b...
							</td>
							<td>
								<img
									src={success}
									width="64"
									height="18"
									className="d-inline-block align-top-10"
									alt="Success"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0.2 Ether ($34.54)</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0.000147 Ether
							</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		);
	}
}

export default LatestTransactions;
