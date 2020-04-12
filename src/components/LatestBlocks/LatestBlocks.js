import React from 'react';
import { Table, Card, Row, Col } from 'react-bootstrap';
import ic from '../../assets/icons/ic.png';
import ic1 from '../../assets/icons/ic1.png';
import unknown from '../../assets/icons/unknown.png';

class LatestBlocks extends React.Component {
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
				<Row style={{ padding: 21, paddingBottom: 0 }}>
					<Col>
						<Card.Title style={{ fontSize: 20, color: '#1A1A1A', fontWeight: '700' }}>
							Latest Blocks
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
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Block number</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Time</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Source</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Transactions</th>
							<th style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Size (K6)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>624804</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>24 minutes ago</td>
							<td>
								<img
									src={ic}
									width="72"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>2966</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>1292.927</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>624804</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>24 minutes ago</td>
							<td>
								<img
									src={unknown}
									width="72"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>2966</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>1292.927</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>624804</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>24 minutes ago</td>
							<td>
								<img
									src={ic1}
									width="72"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>2966</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>1292.927</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>624804</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>24 minutes ago</td>
							<td>
								<img
									src={ic1}
									width="72"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>2966</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>1292.927</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>624804</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>24 minutes ago</td>
							<td>
								<img
									src={ic}
									width="72"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>2966</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>1292.927</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'bold', fontSize: 12, color: '#0E9AFF' }}>624804</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>24 minutes ago</td>
							<td>
								<img
									src={ic1}
									width="72"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 10 }}
								/>
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>2966</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>1292.927</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		);
	}
}

export default LatestBlocks;
