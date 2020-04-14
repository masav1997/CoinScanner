import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './screens/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutBlock from './screens/AboutBlock';
import AboutAddress from './screens/AboutAddress';
import AboutTransactions from './screens/AboutTransactions';
import TransactionsDetails from './screens/TransactionsDetails';
import Help from './screens/Help';
import Header from './components/Header/Header'

function App() {
	return (
		<div style={{ backgroundColor: '#E5E5E5' }}>
			<Header/>
			<Router>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/AboutBlock" component={AboutBlock} />
				<Route exact path="/AboutTransactions" component={AboutTransactions} />
				<Route exact path="/TransactionsDetails" component={TransactionsDetails} />
				<Route exact path="/AboutAddress" component={AboutAddress} />
				<Route exact path="/Help" component={Help} />
			</Router>
		</div>
	);
}

export default App;
