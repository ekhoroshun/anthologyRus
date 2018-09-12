import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Velocity from 'velocity-animate';

class Home extends Component {

    constructor(props) {

        super(props);
        this.HoverOFF = this.HoverOFF.bind(this);
        this.HoverON = this.HoverON.bind(this);

        this.hoverTextOff = this.hoverTextOff.bind(this);
        this.hoverTextOn = this.hoverTextOn.bind(this);

        this.state = {
            hover: false,
            hover1: false
        }

    } 

        HoverON(){
       
        var element = document.querySelector(".pic_holder");
       
        Velocity(element, {"opacity": "1", "right": 0}, {"duration": 500,  "easing": "ease-in-out"});
        }

        HoverOFF(){
        this.setState({ hover: false});
        var element = document.querySelector(".pic_holder");
        Velocity(element, {"opacity": "0", "right": 20}, {"duration": 100,  "easing": "ease-in-out"});
        }

    hoverTextOn(){
        this.setState({ hover1: true});
        var element1 = document.querySelector(".link_poem");
        Velocity(element1, {"right": 0}, {"duration": 500,  "easing": "ease-in-out"});

    }
    hoverTextOff(){
        this.setState({ hover1: false});
        var element1 = document.querySelector(".link_poem");
        Velocity(element1, {"right": 20}, {"duration": 500,  "easing": "ease-in-out"});
    }

    componentDidMount(){
        var element2 = document.querySelector(".site_name");
        var element3 = document.querySelector(".menu_holder");
        var element4 = document.querySelector(".poem_holder");

        Velocity(element2, {"opacity": "1", "right": 0}, {"duration": 500,  "easing": "ease-in-out"});
        Velocity(element3, {"opacity": "1"}, {"duration": 2000,  "easing": "ease-in-out"});
        Velocity(element4, {"opacity": "1"}, {"duration": 2000,  "easing": "ease-in-out"});

    }
    componentDidUnmount(){
        var element2 = document.querySelector(".site_name");
        var element3 = document.querySelector(".menu_holder");
        var element4 = document.querySelector(".poem_holder");

        Velocity(element2, {"opacity": "0", "right": 20}, {"duration": 500,  "easing": "ease-in-out"});
        Velocity(element3, {"opacity": "0"}, {"duration": 1000,  "easing": "ease-in-out"});
        Velocity(element4, {"opacity": "0"}, {"duration": 1000,  "easing": "ease-in-out"});

    }
  componentWillReceiveProps(nextProps) {}

    render() {
        
        return (
            <div className = "container-fluid h-100">
            <div className = "row h-100">

                <div className = "col-6 left_side">
                    <div className="row top_holder">
                        <div className="col-12 pt-3 pl-5">
                            
                            <div className="row menu_holder">
                                <div className="col-4">
                                     <Link className = "menu_holder_first" to='/'> anthologie </Link>
                                 </div>
                               
                                 <div className="col-4">
                                <ul className = "list-unstyled">
                                <li> about </li>
                                <li> moodboard </li>
                                <li> contact </li>
                                </ul>
                                </div>
                                <div className="col-4">
                                <div class="md-form active-pink-2 mb-3">
                                <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                            <div className="row poem_holder pl-5 align-items-center">
                            <div className="col-12">

                           
                            <div className="link_poem" onMouseEnter={this.hoverTextOn} onMouseLeave={this.hoverTextOff}>
                            <div onMouseEnter={this.HoverON} onMouseLeave={this.HoverOFF}>
                            <Link className="link_design" to='/king'> the grey-eyed king</Link></div>
                            </div>
                            
                            </div>
                            
                            </div>
                            
                            
                            
                            <div className="row name_holder pl-5 align-items-center">
                            <div className="col-12">
                            <h2 className="site_name"> Anthology of Russian Poems </h2>
                                
                            </div>
                            </div>
                        </div>
                    
                    

                    <div className = "col-6 right_side" style={{ overflowX: "auto" }}> 
                        <div className="pic_holder ">
                        { this.state.hover ? " " : <img className="pic_here" alt="pic" src={require("./king.jpg")}/>}
                      </div>
                    </div>
                    
            </div>
        </div>
        )
      
    }

}

function mapStateToProps(state) {

    return { 
        app: state.app
    };
    
}


export default connect(mapStateToProps, {})(Home);
