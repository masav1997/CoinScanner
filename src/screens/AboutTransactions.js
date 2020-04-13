import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TransactionsBlock from '../components/TransactionsBlock/TransactionsBlock';
import SearchBlock from '../components/SearchBlock/SearchBlock';

class AboutTransactions extends React.Component {
	render() {
		return (
			<Container style={{ height: window.innerHeight*2 }}>
				<Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
					<Col md="8">
						<SearchBlock />
					</Col>
				</Row>
				<Row style={{ marginBottom: 30 }} className="justify-content-md-center">
					<Col md="12">
						<TransactionsBlock />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default AboutTransactions;
