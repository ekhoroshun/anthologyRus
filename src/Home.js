import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Velocity from "velocity-animate";

class Home extends Component {
	constructor(props) {
        super(props);
        
        this.hoverTextOff = this.hoverTextOff.bind(this);
        this.hoverTextOn = this.hoverTextOn.bind(this);

		this.state = {
            imageToShow: '',
            showAbout: false
		};
    }

    hoverTextOn(e, target) {

    	this.setState({
			imageToShow: target,
			showAbout: false
			
    	});
			
    	var element = document.querySelector(".pic_holder");
		Velocity(
			element,
			{ opacity: 1, right: 20 },
			{ duration: 500, easing: "ease-in-out" }
		);

	}

	hoverTextOff() {
		
		var self = this;
    	var element = document.querySelector(".pic_holder");
		Velocity(
			element,
			{ opacity: 0, right:0 },
			{ 
				duration: 1, 
				easing: "ease-in-out"
			    
			}
		);
		

	}

	displayImage() {
        
		return (
			<img src={ "images/" + this.state.imageToShow } className="pic_here"/>
		)
    }
    
   

	componentDidMount() {
		var element2 = document.querySelector(".site_name");
		var element3 = document.querySelector(".menu_holder");
		var element4 = document.querySelector(".poem_holder");

		Velocity(
			element2,
			{ opacity: "1", right: 0 },
			{ duration: 1000, easing: "ease-in-out" }
		);
		Velocity(
			element3,
			{ opacity: "1" },
			{ duration: 2000, easing: "ease-in-out" }
		);
		Velocity(
			element4,
			{ opacity: "1" },
			{ duration: 2000, easing: "ease-in-out" }
		);
	}

	render() {
		return (
			<div className="container-fluid h-100">
				<div className="row h-100">
					<div className="col-6 left_side pl-5 pt-5">
						<div className="row top_holder">
							<div className="col-12 pt-3 pl-5">
								<div className="row menu_holder">
									<div className="col-4">
										<Link className="menu_holder_first" to="/">
											anthologie
										</Link>
									</div>

									<div className="col-4">
										<ul className="list-unstyled">
											<li> <button className="button_about" onClick ={() => this.setState({  showAbout: true })}> about </button></li>
											<li> <button className="button_about"> moodboard</button> </li>
											</ul>
									</div>
									<div className="col-4">
                                            <button className="button_about">contact</button>
									</div>
								</div>
							</div>
						</div>
						<div className="row poem_holder pl-5 align-items-center">
							<div className="col-12">

								<ul className="link_poem list-unstyled">
									<li className="list_poem" onMouseEnter={(e) => this.hoverTextOn(e, 'king.jpg')} onMouseLeave={() => this.hoverTextOff()}><Link className="link_design" to="/poem/0">the grey-eyed king</Link></li>
									<li className="list_poem" onMouseEnter={(e) => this.hoverTextOn(e, 'angel.jpg')} onMouseLeave={() => this.hoverTextOff()}><Link className="link_design" to="/poem/1">i'm lonely and sad</Link></li>
                                    <li className="list_poem" onMouseEnter={(e) => this.hoverTextOn(e, 'name.jpg')} onMouseLeave={() => this.hoverTextOff()}><Link className="link_design" to="/poem/2">what means my name to you?..</Link></li>
									<li className="list_poem" onMouseEnter={(e) => this.hoverTextOn(e, 'pity.jpg')} onMouseLeave={() => this.hoverTextOff()}><Link className="link_design" to="/poem/3">you don't love me, you have no pity for me</Link></li>
								</ul>
								
							</div>
						</div>

						<div className="row name_holder pl-5 align-items-center">
							<div className="col-12">
                            
								<h2 className="site_name"> Anthology of Russian Poems </h2>
							</div>
						</div>
					</div>

					<div className="col-6 right_side" style={{ overflowX: "auto" }}>
                   		    
								{ (this.state.showAbout) ? <div className="about_holder"><p className="about_design"> this page is dedicated to the magical and tragical world of Russian poetry</p></div> : null }
                            
                             <div className="pic_holder">
                                {this.displayImage()}
                           </div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		app: state.app
	};
}

export default connect(
	mapStateToProps,
	{}
)(Home);