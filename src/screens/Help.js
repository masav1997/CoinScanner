import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HelpBlock from '../components/HelpBlock/HelpBlock';
import SearchBlock from '../components/SearchBlock/SearchBlock';

class Help extends React.Component {
	render() {
		return (
			<Container style={{ height: window.innerHeight*2 }}>
				<Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
					<Col md="8">
						<SearchBlock />
					</Col>
				</Row>
				<Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
					<Col md="6">
						<HelpBlock />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Help;
