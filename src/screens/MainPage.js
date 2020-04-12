import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LatestBlocks from '../components/LatestBlocks/LatestBlocks';
import BorderBlock from '../components/BorderBlock/BorderBlock';
import SearchBlock from '../components/SearchBlock/SearchBlock';
import DropBlock from '../components/DropBlock/DropBlock';
import LatestTransactions from '../components/LatestTransactions/LatestTransactions';

class MainPage extends React.Component {
	render() {
		return (
			<Container style={{ height: window.innerHeight }}>
				<Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
					<Col md="3">
						<DropBlock />
					</Col>
				</Row>
				<Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
					<Col md="7">
						<BorderBlock />
					</Col>
				</Row>
				<Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
					<Col md="8">
						<SearchBlock />
					</Col>
				</Row>
				<Row style={{ marginBottom: 30 }}>
					<Col>
						<LatestBlocks />
					</Col>
					<Col>
						<LatestTransactions />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default MainPage;
