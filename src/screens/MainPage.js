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
			<Container style={{ height: document.documentElement.clientHeight }}>
				<Row style={{ marginBottom: 30 }} className="justify-content-md-center">
					<Col></Col>
					<Col>
						<DropBlock />
					</Col>
					<Col></Col>
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
				<Row style={{backgroundColor: '#E5E5E5',}} >
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
