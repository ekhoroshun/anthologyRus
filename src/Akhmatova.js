import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Akhmatova extends Component {
render(){
    return(
        <div className="container-fluid h-100"> 
        <div className="row h-100">

        <div className="col">

        <div className="row link_holder">
        <div className="col">
         <Link to='/'> Retour </Link>
        </div>
        </div>

        <div className="row align-item-center poem_text_holder">
       
        <div class="col-md-6 col-md-offset-3 poem_holder_page">
            <div className="poem_text">
            <p>  Glory to you, inescapable pain!
                The gray-eyed king died yesterday.
            </p>
            <p>
                The autumn evening was sultry and red,
                My husband returned and quietly said:
            </p>
            <p>
                "You know, they brought him back from the hunt,
                They found his corpse by the old oak tree.
            </p>
            <p>
                I pity the queen. He was so young!..
                In just one night her hair turned white."
            </p>
            <p>
                He found his pipe on the mantelpiece
                And went out to his nighttime shift.
            </p>
            <p>
                I'll go and wake my daughter now,
                I'll look into her little gray eyes.
            </p>
            <p>
                While outside the rustling poplars say:
                "Your king is no longer upon this earth..."
            </p>
                11 December 1910, Tsarskoe Selo
         </div>  
         </div>
         </div>

         <div className="row author_poem_holder">
         <div className="col">
            <p>author:</p>
           <h2>Anna Akhmatova</h2>
         </div>
         </div>
         </div>
        </div>
        </div>
    )
}
}

export default Akhmatova;