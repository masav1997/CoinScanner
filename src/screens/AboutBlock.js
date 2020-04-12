import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Block from '../components/Block/Block';
import SearchBlock from '../components/SearchBlock/SearchBlock';

class AboutBlock extends React.Component {
	render() {
		return (
			<Container style={{ height: window.innerHeight }}>
				<Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
					<Col md="8">
						<SearchBlock />
					</Col>
				</Row>
				<Row style={{ marginBottom: 30 }}>
					<Col>
						<Block />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default AboutBlock;
