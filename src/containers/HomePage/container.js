import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'store/features/clickCounter/actions'
import companyActions from 'store/features/company/actions'
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import CardSub from '../../components/CardSub';

import './styles.less';

const propTypes = {
	addCompany: PropTypes.func.isRequired,
	addPerson: PropTypes.func.isRequired,
	companies: PropTypes.array,
};

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			company: {
				name: "",
				address: "",
				revenue: "",
				phone: ""
			},
			person: {
				name: "",
				address: "",
				employer: 0
			},
			companies: props.companies
		};
		this.handleCompanyChange = this.handleCompanyChange.bind(this);
    	this.CreateCompany = this.CreateCompany.bind(this);

		this.handlePersonChange = this.handlePersonChange.bind(this);
    	this.CreatePerson = this.CreatePerson.bind(this);
	}

	handleCompanyChange(event) {
		console.log('onchange', event.target.name);

		const target = event.target;
		const value = target.value;
		const name = target.name;

		var company = {...this.state.company}
		//company.[name] = value;
		console.log('company', company)
		this.setState({
			company: {
				...this.state.company,
				[name]: value
			}
		});
	}
	handlePersonChange(event) {
		console.log('onchange', event.target.name);

		const target = event.target;
		const value = target.value;
		const name = target.name;

		var person = {...this.state.person}
		console.log('person', person)
		this.setState({
			person: {
				...this.state.person,
				[name]: value
			}
		});
	}

	CreateCompany(event){
		console.log('company details', this.state.company);
		const { addCompany } = this.props;
		event.preventDefault();
		addCompany(this.state.company);
		this.setState({
			company: {
				name: "",
				address: "",
				revenue: "",
				phone: ""
			}
		})
		alert("successfully created");
	}

	CreatePerson(event){
		console.log('person details', this.state.person);
		const { addPerson } = this.props;
		event.preventDefault();
		addPerson(this.state.person)
		this.setState({
			person: {
				name: "",
				address: "",
				employer: 0
			}
		})
		alert("successfully created");
	}

	render() {
		//const {	increment, decrement, resetNumberToZero } = this.props;
		const { company, person } = this.state;
		console.log('home page props', this.props);
		const { companies } = this.state;
		

		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col col-left">
							<Card title="Companies">	
								{companies.length == 0 ? 
									<div className="item">
										<div className="heading">
											No Companies found
										</div>
									</div>
									: ""
								}	
								{companies.map((col, j) =>
									<CardSub key={j} title={col.company.name} companyId={j}>
										<div className="item">
											<div className="heading">
												Address
											</div>
											<div className="description">
												{col.company.address}
											</div>
										</div>
										<div className="item">
											<div className="heading">
												Revenue
											</div>
											<div className="description">
												{col.company.revenue}
											</div>
										</div>
										<div className="item">
											<div className="heading">
												Phone
											</div>
											<div className="description">
												{col.company.phone}
											</div>
										</div>
									</CardSub>
								)}
							</Card>
						</div>
						<div className="col col-right">
							<Card title="Create New Company">	
								<form onSubmit={this.CreateCompany}>
									<div>
										Name:
										<input name="name" type="text" value={company.name} onChange={this.handleCompanyChange} required/>
									</div>
									<div>
										Address:
										<input name="address" type="text" value={company.address} onChange={this.handleCompanyChange} required/>
									</div>
									<div>
										Revenue:
										<input name="revenue" type="number" value={company.revenue} onChange={this.handleCompanyChange} required/>
									</div>
									<div>
										Phone:
										<input name="phone" type="phone" value={company.phone} onChange={this.handleCompanyChange} required/>
									</div>
									<input type="submit" value="Save" />
								</form>
							</Card>
							<Card title="Create New Person">
								<form onSubmit={this.CreatePerson}>	
									<div>
										Name:
										<input name="name" type="text" value={person.name} onChange={this.handlePersonChange} required/>
									</div>
									<div>
										Address:
										<input name="address" type="text" value={person.address} onChange={this.handlePersonChange} required/>
									</div>
									<div>
										Select Employer:
										<select name="employer" value={person.employer} onChange={this.handlePersonChange}>
											{companies.map((item, i) =>
												<option key={i} value={i}>{item.company.name}</option>
											)};
										</select>
									</div>
									<input type="submit" value="Save" />
								</form>
							</Card>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addCompany: (data) => dispatch(companyActions.addCompany(data)),
	addPerson: (data) => dispatch(companyActions.addPerson(data))
});

const mapStateToProps = (state) => {
    return {
        companies: state.company.companies
    }
}

Home.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Home);

