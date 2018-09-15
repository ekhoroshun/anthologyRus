import React, { Component } from "react";
import { Link } from "react-router-dom";
import Velocity from "velocity-animate";
import poem from './json/poem.json';

console.log(poem)

class Akhmatova extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poem_number: parseInt(this.props.match.params.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.id != nextProps.match.params.id) {
            this.setState({
                poem_number: parseInt(nextProps.match.params.id)
            })
        }
    }

    navigate(e, where) {

        // var element8 = document.querySelector(".author_name");

		// Velocity(
		// 	element8,
		// 	{ opacity: "1", right: 0 },
		// 	{ duration: 1000, easing: "ease-in-out" }
        // );
        
        e.preventDefault();

        if(where == 'back') {

            if ( this.state.poem_number == 0 ) {
                this.props.history.push(`/poem/${ poem.poems.length-1 }`)
                return;
            }

            this.props.history.push(`/poem/${ this.state.poem_number - 1}`)

        } else {

            if ( this.state.poem_number == (poem.poems.length-1) ) {
                this.props.history.push(`/poem/0`)
                return;
            }

            this.props.history.push(`/poem/${ this.state.poem_number + 1}`)
        }

    }

	componentDidMount() {
        var element5 = document.querySelector(".author_name");
		Velocity(
			element5,
			{ opacity: "1", right: 0 },
			{ duration: 1000, easing: "ease-in-out" }
		);
		var element6 = document.querySelector(".poem_page_loading");
		Velocity(
			element6,
			{ opacity: "1" },
			{ duration: 2000, easing: "ease-in-out" }
		);
    }

	componentDidUnmount() {
        var element5 = document.querySelector(".author_name");
		Velocity(
			element5,
			{ opacity: "0", right: 20 },
			{ duration: 100, easing: "ease-in-out" }
		);
		var element6 = document.querySelector(".poem_page_loading");
		Velocity(
			element6,
			{ opacity: "0" },
			{ duration: 100, easing: "ease-in-out" }
		);
	}

	render() {
        return (
			<div className="container-fluid h-100">
				<div className="row poem_page_loading h-100">
					<div className="col first_col">
						<div className="link_retour pt-5 pl-5">
							<Link className="link_retour_design" to="/">
								{" "}
								Retour{" "}
							</Link>
						</div>
						<div className="test">
							<div className="author_name pb-5">
								<p className="author_p">author:</p>
								<h2 className="author_name_design">{poem.poems[this.state.poem_number].author}</h2>
                                <p className="author_p" > {poem.poems[this.state.poem_number].place}  </p>
							</div>
						</div>
					</div>

					<div style={{ overflowX: "auto" }} class="col second_col">
                   
						<div className="poem_text">
							<h2 className="poem_name"> {poem.poems[this.state.poem_number].title} </h2>

                           <p>{poem.poems[this.state.poem_number].text}</p> 
							{/* <p>
								{" "}
								Glory to you, inescapable pain! The gray-eyed king died
								yesterday.
							</p>
							<p>
								The autumn evening was sultry and red, My husband returned and
								quietly said:
							</p>
							<p>
								"You know, they brought him back from the hunt, They found his
								corpse by the old oak tree.
							</p>
							<p>
								I pity the queen. He was so young!.. In just one night her hair
								turned white."
							</p>
							<p>
								He found his pipe on the mantelpiece And went out to his
								nighttime shift.
							</p>
							<p>
								I'll go and wake my daughter now, I'll look into her little gray
								eyes.
							</p>
							<p>
								While outside the rustling poplars say: "Your king is no longer
								upon this earth..."
							</p> */}
							
						</div>
                        <div className="date_poem"><p className="date_design">{poem.poems[this.state.poem_number].date}</p></div>
					</div>

					<div className="col third_col">
						<div className="arrows">

                            <a className="arrow_design" href="#" onClick={(e)=>this.navigate(e, "back")}>&#x3c;</a> 
                            <a className="arrow_design" href="#" onClick={(e)=>this.navigate(e, "forward")}>&#x3e;</a> 

                        </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Akhmatova;
