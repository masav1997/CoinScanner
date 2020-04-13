import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TransactionsDetailsBlock from '../components/TransactionsDetailsBlock/TransactionsDetailsBlock';
import SearchBlock from '../components/SearchBlock/SearchBlock';

class TransactionsDetails extends React.Component {
	render() {
		return (
			<Container style={{ height: window.innerHeight }} fluid>
				<Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
					<Col md="8">
						<SearchBlock />
					</Col>
				</Row>
				<Row style={{ marginBottom: 30 }}>
					<Col>
						<TransactionsDetailsBlock />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default TransactionsDetails;
