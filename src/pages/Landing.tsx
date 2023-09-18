import React from 'react';
import Welcome from "./Welcome";
import { Link } from 'react-router-dom';

function Landing() {
    return (
      <section>
        <div>
          <div>
            <p>this is the landing page</p>
            <Link to="welcome">To Welcome Page</Link>
          </div>
        </div>
      </section>
    );
  }

  export default Landing;