import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'store/features/clickCounter/actions'
import companyActions from 'store/features/company/actions'
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import CardSub from '../../components/CardSub';

import './styles.less';


const propTypes = {
	companies: PropTypes.array,
};


class DetailsPage extends Component {
	constructor(props){
		super(props);
		this.state = {
            selectedItem: {},
            error: false
		};
		
	}
    componentWillMount(){
        const { companies} = this.props;
        console.log('selected index', this.props.match.params.id);
        var index = this.props.match.params.id;
        if(typeof index == "undefined" || index == "", index == null)  {
            this.setState({
                error: true
            })
        }else{
            this.setState({
                selectedItem: companies[index],
                error:false
            })
        }
    }
	render() {
		console.log('details page props', this.props);
		const { selectedItem, error } = this.state;
        console.log(selectedItem);
        if(error){
            return(
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col col-left">
                                <Card title="Error">
                                    No details found
                                </Card>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col col-left">
							<Card title={selectedItem.company.name}>	
                                <div className="item">
                                    <div className="heading">
                                        Address
                                    </div>
                                    <div className="description">
                                        {selectedItem.company.address}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="heading">
                                        Revenue
                                    </div>
                                    <div className="description">
                                        {selectedItem.company.revenue}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="heading">
                                        Phone
                                    </div>
                                    <div className="description">
                                        {selectedItem.company.phone}
                                    </div>
                                </div>
							</Card>

                            <Card title="Employees">
                            {selectedItem.persons.length == 0 ? 
                                <div className="item">
											<div className="heading">
												No Employees found
											</div>
										</div>
                                : ""
                            }	
                               {selectedItem.persons.map((col, j) =>
									<CardSub key={j} title={col.name}>
										<div className="item">
											<div className="heading">
												Address
											</div>
											<div className="description">
												{col.address}
											</div>
										</div>
									</CardSub>
								)}
							</Card>

						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
    //console.log('31', state);
    return {
        companies: state.company.companies
    }
}

DetailsPage.propTypes = propTypes;

export default connect(mapStateToProps, null)(DetailsPage);

