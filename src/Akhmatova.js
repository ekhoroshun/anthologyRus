import React, { Component } from "react";
import { Link } from "react-router-dom";
import Velocity from "velocity-animate";

class Akhmatova extends Component {
	componentDidMount() {
		var element = document.querySelector(".poem_page_loading");
		Velocity(
			element,
			{ opacity: "1", right: 0 },
			{ duration: 1000, easing: "ease-in-out" }
		);
	}
	componentDidUnmount() {
		var element = document.querySelector(".poem_page_loading");
		Velocity(
			element,
			{ opacity: "0", right: 20 },
			{ duration: 1000, easing: "ease-in-out" }
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
							<div className="author_name pb-5 pl-5">
								<p className="author_p">author:</p>
								<h2 className="author_name_design">Anna Akhmatova</h2>
							</div>
						</div>
					</div>

					<div class="col second_col">
						<div className="poem_text">
							<h2 className="poem_name"> Grey Eyed King </h2>
							<p>
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
							</p>
							11 December 1910, Tsarskoe Selo
						</div>
					</div>

					<div className="col third_col">
						<div className="arrows"> &#x3c; {"   "} &#x3e; </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Akhmatova;
