import React from 'react';
import { Row, Col } from 'react-bootstrap';

class BorderBlock extends React.Component {
	render() {
		return (
			<div>
				<Row style={{ marginBottom: -10 }}>
					<Col style={{ fontWeight: 'bold', fontSize: 12, color: '#A8B3C8' }}>Price</Col>
					<div style={{ height: 25, backgroundColor: '#fdfdfe', width: 0.9 }}></div>
					<Col style={{ fontWeight: 'bold', fontSize: 12, color: '#A8B3C8' }}>Difficulty</Col>
					<div style={{ height: 25, backgroundColor: '#fdfdfe', width: 0.9 }}></div>
					<Col style={{ fontWeight: 'bold', fontSize: 12, color: '#A8B3C8' }}>Block time</Col>
					<div style={{ height: 25, backgroundColor: '#fdfdfe', width: 0.9 }}></div>
					<Col style={{ fontWeight: 'bold', fontSize: 12, color: '#A8B3C8' }}>Hashrate</Col>
				</Row>
				<Row>
					<Col>
						<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}>$</text>
						<text style={{ fontWeight: 'bold', fontSize: 15, color: '#1A1A1A' }}>159.93</text>
						<text style={{ fontWeight: 'normal', fontSize: 12, color: '#EB5757' }}> (-7.37%)</text>
					</Col>
					<div style={{ height: 25, backgroundColor: '#fdfdfe', width: 0.9 }}></div>
					<Col>
						<text style={{ fontWeight: 'bold', fontSize: 15, color: '#1A1A1A' }}>2,226.00</text>
						<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}> TH</text>
					</Col>
					<div style={{ height: 25, backgroundColor: '#fdfdfe', width: 0.9 }}></div>
					<Col>
						<text style={{ fontWeight: 'bold', fontSize: 15, color: '#1A1A1A' }}>15.6</text>
						<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}> seconds</text>
					</Col>
					<div style={{ height: 25, backgroundColor: '#fdfdfe', width: 0.9 }}></div>
					<Col>
						<text style={{ fontWeight: 'bold', fontSize: 15, color: '#1A1A1A' }}>178,744.72</text>
						<text style={{ fontWeight: 'normal', fontSize: 12, color: '#1A1A1A' }}> GH/s</text>
					</Col>
				</Row>
			</div>
		);
	}
}

export default BorderBlock;
