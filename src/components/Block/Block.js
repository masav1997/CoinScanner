import React from 'react';
import { Table, Card, Row, Col } from 'react-bootstrap';
import ic from '../../assets/icons/ic.png';

class Block extends React.Component {
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
							Block 624804
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
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Block Height:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>9824653</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Timestamp: </td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								1 hr 25 mins ago (Apr-07-2020 11:12:29 AM +UTC)
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Transactions: </td>
							<td>
								<text style={{ fontWeight: '700', fontSize: 12, color: '#0E9AFF' }}>
									108 transactions
								</text>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}> and</text>
								<text style={{ fontWeight: '700', fontSize: 12, color: '#1A1A1A' }}> 20 contract </text>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									internal transactions in this block.927
								</text>
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Mined by: </td>
							<td>
								<img
									src={ic}
									width="72"
									height="18"
									className="d-inline-block align-top-10"
									alt="React Bootstrap logo"
									style={{ marginBottom: 5 }}
								/>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									{' '}
									0xea674fdde714fd979de3edf0f56aa9716b898ec8 in 6 secs
								</text>
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Block Reward:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								2.067893426456700886 Ether (2 + 0.067893426456700886)
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Uncles Reward:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Difficulty:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								2,167,037,992,309,176
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Total Difficulty: </td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								14,880,937,295,529,692,671,589
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Size: </td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>19,982 bytes</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Gas Used: </td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>9,628,164 (96.38%)</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Gas Limit: </td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								2,167,037,992,309,176
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Extra Data: </td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								PPYE-ethermine-eu1-8 (Hex:0x505059452d65746865726d696e652d6575312d38)
							</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		);
	}
}

export default Block;
