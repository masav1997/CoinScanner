import React from 'react';
import { Table, Card, Row, Col } from 'react-bootstrap';
import success from '../../assets/icons/success.png';

class TransactionsDetailsBlock extends React.Component {
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
				<Row style={{ padding: 21, paddingBottom: 0, paddingLeft: 10 }}>
					<Col>
						<Card.Title style={{ fontSize: 20, color: '#1A1A1A', fontWeight: '700' }}>
							Transactions Details
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
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Transaction Hash:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0xec43fa172b751445f8c28060a62b2ec 86a4ce5f5079e217873bef45984ae681
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Timestamp: </td>
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
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Block: </td>
							<td>
								<text style={{ fontWeight: '700', fontSize: 12, color: '#0E9AFF' }}>9824653</text>
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Timestamp:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								1 hr 34 mins ago (Apr-07-2020 11:12:29 AM +UTC)
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>From:</td>
							<td>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0x53fa0a77f67dbf5b64c957798ccd0f910856da4d
								</text>
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>To:</td>
							<td>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>Contract </text>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0x53fa0a77f67dbf5b64c957798ccd0f910856da4d
								</text>
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>
								Tokens Transferred:
							</td>
							<td>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>From </text>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0x53fa0a77f677...
								</text>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}> To </text>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									0x9587ebc1428c689...
								</text>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
									{' '}
									For 2,384{' '}
								</text>
								<text style={{ fontWeight: 'normal', fontSize: 12, color: '#0E9AFF' }}>
									Bit Asset Ch... (BAC)
								</text>
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Value:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0 Ether ($0.00)</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Transaction Fee:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0.000066069 Ether ($0.01)
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Gas Limit:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>90,000</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>
								Gas Used by Transaction:
							</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>22,023 (24.47%)</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Gas Price:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								0.000000003 Ether (3 Gwei)
							</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Nonce</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>0</td>
						</tr>
						<tr>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#A8B3C8' }}>Input Data:</td>
							<td style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>
								Function: transfer(address _to, uint256 _value) *** MethodID: 0xa9059cbb [0]:
								0000000000000000000000009587ebc1428c68959138c174fe256d72a2097acf [1]:
								000000000000000000000000000000000
							</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		);
	}
}

export default TransactionsDetailsBlock;
