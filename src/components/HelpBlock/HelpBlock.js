import React from 'react';
import { Card, Row, Col, Button, Accordion } from 'react-bootstrap';
import down from '../../assets/icons/down.png';

class HelpBlock extends React.Component {
	render() {
		return (
			<Accordion>
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
							<Card.Title style={{ fontSize: 20, color: '#1A1A1A', fontWeight: '700' }}>FAQ</Card.Title>
						</Col>
					</Row>
					<Card
						style={{
							width: 'auto',
							borderWidth: 0,
							backgroundColor: '#FAFAFF',
						}}
					>
						<Card.Header
							style={{
								width: 'auto',
								borderWidth: 0,
								backgroundColor: '#FAFAFF',
							}}
						>
							<Accordion.Toggle as={Button} variant="link" eventKey="0">
								<text
									style={{
										fontSize: 16,
										color: '#1A1A1A',
										fontWeight: 'bold',
									}}
								>
									Question name and title?
								</text>
								<img src={down} width="12" height="8" alt="Down" style={{ marginLeft: 250 }} />
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body style={{ marginTop: -20 }}>
								<text
									style={{
										fontSize: 12,
										color: '#1A1A1A',
										fontWeight: 'normal',
									}}
								>
									Aliqua fugiat elit velit eu incididunt esse eiusmod amet eiusmod qui. Tempor veniam
									aliquip proident magna eiusmod nisi amet sit qui qui ex. Enim velit ipsum nisi
									occaecat ad laborum excepteur consequat Lorem sint incididunt. Nisi laborum minim
									ipsum laboris qui adipisicing et excepteur duis exercitation quis anim. Ea qui
									proident est laborum ea sint fugiat exercitation aute enim incididunt. Culpa qui
									eiusmod sit Lorem commodo sunt esse. Ad aute nulla labore pariatur ex enim fugiat
									nostrud consequat amet. Voluptate est exercitation et irure commodo. Excepteur
									aliqua adipisicing tempor anim. Minim velit voluptate in duis officia id
									reprehenderit sunt. Nisi dolore reprehenderit voluptate ea non sint dolor cupidatat
									esse. Sunt nisi Lorem aute anim tempor occaecat proident laboris voluptate dolore
									enim eiusmod ad laborum. Nostrud sit incididunt dolor esse proident do cupidatat
									minim dolor adipisicing deserunt reprehenderit laboris. Sunt cupidatat laborum ex
									aliqua reprehenderit do. Culpa consectetur est in consequat duis et sunt qui.
									Occaecat consectetur reprehenderit ipsum ut pariatur ea ipsum ullamco culpa
									voluptate. Est ipsum consequat culpa cupidatat sit sint consectetur do dolore. Ut
									fugiat quis id tempor irure. In fugiat adipisicing ea dolore ex laborum duis ullamco
									aute duis. Sit qui culpa commodo fugiat elit eu consectetur sunt consectetur. Sit
									nostrud id amet ipsum. Magna excepteur veniam labore non sit officia quis officia.
								</text>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card
						style={{
							width: 'auto',
							borderWidth: 0,
							backgroundColor: '#fdfdfe',
						}}
					>
						<Card.Header
							style={{
								width: 'auto',
								borderWidth: 0,
								backgroundColor: '#fdfdfe',
							}}
						>
							<Accordion.Toggle as={Button} variant="link" eventKey="1">
								<text
									style={{
										fontSize: 16,
										color: '#1A1A1A',
										fontWeight: 'bold',
									}}
								>
									Question name and title?
								</text>
								<img src={down} width="12" height="8" alt="Down" style={{ marginLeft: 250 }} />
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body style={{ marginTop: -20 }}>
								<text
									style={{
										fontSize: 12,
										color: '#1A1A1A',
										fontWeight: 'normal',
									}}
								>
									Aliqua fugiat elit velit eu incididunt esse eiusmod amet eiusmod qui. Tempor veniam
									aliquip proident magna eiusmod nisi amet sit qui qui ex. Enim velit ipsum nisi
									occaecat ad laborum excepteur consequat Lorem sint incididunt. Nisi laborum minim
									ipsum laboris qui adipisicing et excepteur duis exercitation quis anim. Ea qui
									proident est laborum ea sint fugiat exercitation aute enim incididunt. Culpa qui
									eiusmod sit Lorem commodo sunt esse. Ad aute nulla labore pariatur ex enim fugiat
									nostrud consequat amet. Voluptate est exercitation et irure commodo. Excepteur
									aliqua adipisicing tempor anim. Minim velit voluptate in duis officia id
									reprehenderit sunt. Nisi dolore reprehenderit voluptate ea non sint dolor cupidatat
									esse. Sunt nisi Lorem aute anim tempor occaecat proident laboris voluptate dolore
									enim eiusmod ad laborum. Nostrud sit incididunt dolor esse proident do cupidatat
									minim dolor adipisicing deserunt reprehenderit laboris. Sunt cupidatat laborum ex
									aliqua reprehenderit do. Culpa consectetur est in consequat duis et sunt qui.
									Occaecat consectetur reprehenderit ipsum ut pariatur ea ipsum ullamco culpa
									voluptate. Est ipsum consequat culpa cupidatat sit sint consectetur do dolore. Ut
									fugiat quis id tempor irure. In fugiat adipisicing ea dolore ex laborum duis ullamco
									aute duis. Sit qui culpa commodo fugiat elit eu consectetur sunt consectetur. Sit
									nostrud id amet ipsum. Magna excepteur veniam labore non sit officia quis officia.
								</text>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card
						style={{
							width: 'auto',
							borderWidth: 0,
							backgroundColor: '#FAFAFF',
						}}
					>
						<Card.Header
							style={{
								width: 'auto',
								borderWidth: 0,
								backgroundColor: '#FAFAFF',
							}}
						>
							<Accordion.Toggle as={Button} variant="link" eventKey="2">
								<text
									style={{
										fontSize: 16,
										color: '#1A1A1A',
										fontWeight: 'bold',
									}}
								>
									Question name and title?
								</text>
								<img src={down} width="12" height="8" alt="Down" style={{ marginLeft: 250 }} />
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body style={{ marginTop: -20 }}>
								<text
									style={{
										fontSize: 12,
										color: '#1A1A1A',
										fontWeight: 'normal',
									}}
								>
									Aliqua fugiat elit velit eu incididunt esse eiusmod amet eiusmod qui. Tempor veniam
									aliquip proident magna eiusmod nisi amet sit qui qui ex. Enim velit ipsum nisi
									occaecat ad laborum excepteur consequat Lorem sint incididunt. Nisi laborum minim
									ipsum laboris qui adipisicing et excepteur duis exercitation quis anim. Ea qui
									proident est laborum ea sint fugiat exercitation aute enim incididunt. Culpa qui
									eiusmod sit Lorem commodo sunt esse. Ad aute nulla labore pariatur ex enim fugiat
									nostrud consequat amet. Voluptate est exercitation et irure commodo. Excepteur
									aliqua adipisicing tempor anim. Minim velit voluptate in duis officia id
									reprehenderit sunt. Nisi dolore reprehenderit voluptate ea non sint dolor cupidatat
									esse. Sunt nisi Lorem aute anim tempor occaecat proident laboris voluptate dolore
									enim eiusmod ad laborum. Nostrud sit incididunt dolor esse proident do cupidatat
									minim dolor adipisicing deserunt reprehenderit laboris. Sunt cupidatat laborum ex
									aliqua reprehenderit do. Culpa consectetur est in consequat duis et sunt qui.
									Occaecat consectetur reprehenderit ipsum ut pariatur ea ipsum ullamco culpa
									voluptate. Est ipsum consequat culpa cupidatat sit sint consectetur do dolore. Ut
									fugiat quis id tempor irure. In fugiat adipisicing ea dolore ex laborum duis ullamco
									aute duis. Sit qui culpa commodo fugiat elit eu consectetur sunt consectetur. Sit
									nostrud id amet ipsum. Magna excepteur veniam labore non sit officia quis officia.
								</text>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card
						style={{
							width: 'auto',
							borderWidth: 0,
							backgroundColor: '#fdfdfe',
						}}
					>
						<Card.Header
							style={{
								width: 'auto',
								borderWidth: 0,
								backgroundColor: '#fdfdfe',
							}}
						>
							<Accordion.Toggle as={Button} variant="link" eventKey="3">
								<text
									style={{
										fontSize: 16,
										color: '#1A1A1A',
										fontWeight: 'bold',
									}}
								>
									Question name and title?
								</text>
								<img src={down} width="12" height="8" alt="Down" style={{ marginLeft: 250 }} />
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="3">
							<Card.Body style={{ marginTop: -20 }}>
								<text
									style={{
										fontSize: 12,
										color: '#1A1A1A',
										fontWeight: 'normal',
									}}
								>
									Aliqua fugiat elit velit eu incididunt esse eiusmod amet eiusmod qui. Tempor veniam
									aliquip proident magna eiusmod nisi amet sit qui qui ex. Enim velit ipsum nisi
									occaecat ad laborum excepteur consequat Lorem sint incididunt. Nisi laborum minim
									ipsum laboris qui adipisicing et excepteur duis exercitation quis anim. Ea qui
									proident est laborum ea sint fugiat exercitation aute enim incididunt. Culpa qui
									eiusmod sit Lorem commodo sunt esse. Ad aute nulla labore pariatur ex enim fugiat
									nostrud consequat amet. Voluptate est exercitation et irure commodo. Excepteur
									aliqua adipisicing tempor anim. Minim velit voluptate in duis officia id
									reprehenderit sunt. Nisi dolore reprehenderit voluptate ea non sint dolor cupidatat
									esse. Sunt nisi Lorem aute anim tempor occaecat proident laboris voluptate dolore
									enim eiusmod ad laborum. Nostrud sit incididunt dolor esse proident do cupidatat
									minim dolor adipisicing deserunt reprehenderit laboris. Sunt cupidatat laborum ex
									aliqua reprehenderit do. Culpa consectetur est in consequat duis et sunt qui.
									Occaecat consectetur reprehenderit ipsum ut pariatur ea ipsum ullamco culpa
									voluptate. Est ipsum consequat culpa cupidatat sit sint consectetur do dolore. Ut
									fugiat quis id tempor irure. In fugiat adipisicing ea dolore ex laborum duis ullamco
									aute duis. Sit qui culpa commodo fugiat elit eu consectetur sunt consectetur. Sit
									nostrud id amet ipsum. Magna excepteur veniam labore non sit officia quis officia.
								</text>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Card>
			</Accordion>
		);
	}
}

export default HelpBlock;
