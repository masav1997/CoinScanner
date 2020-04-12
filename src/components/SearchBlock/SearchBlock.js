import React from 'react';
import find from '../../assets/icons/find.png';
import { Form, Row, Col, FormControl } from 'react-bootstrap';

class SearchBlock extends React.Component {
	render() {
		return (
			<Form
				style={{
					borderRadius: 15,
					borderWidth: 0,
					height: 46,
					backgroundColor: '#fff',
					boxShadow: '0px 2px 25px rgba(68, 69, 78, 0.09)',
				}}
			>
				<Row style={{ alignItems: 'center', paddingTop: 3 }}>
					<Col sm={1} style={{ textAlign: 'right', marginLeft:10, }}>
						<img src={find} width="15" height="15" alt="Find Icon" />
					</Col>
					<Col sm={10} style={{ textAlign: 'left' }}>
						<FormControl
							type="text"
							placeholder="Search by Address / Hash / Block / Token"
							style={{ borderWidth: 0, borderRadius: 15, top: 2 }}
						/>
					</Col>
				</Row>
			</Form>
		);
	}
}

export default SearchBlock;