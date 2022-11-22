import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */

  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language
  const handleChangeHello = () => {
    // Choose a new Hello from our languages
    // Call the function to set the state string in our component
  };
  return (
    <>
      <h1 className="title">HACKATHON</h1>

      <div>
        <h2>
          <center>FINDING A SOLUTION FOR QUALITY EDUCATION</center>
        </h2>
        <h3>
          <center>Shreya, Vaseeka, Maryam, Van and Maryam</center>
        </h3>
      </div>

      {/* When the user hovers over the image we apply the wiggle style to it */}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/df/Sustainable_Development_Goals.png"
          className="illustration"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
          height = "700px"
        />
      </animated.div>

      <div className="navigation">
        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeHello}>
            17 United Nations Sustainable Goals
          </a>
        </animated.div>
      </div>

      <div class="project">
        <h2>OUR PROJECT</h2>
        <body>
          This is our <strong>Hackathon</strong> website. We are going to be
          talking about the United Nations sustainability goal:
          <strong> Quality Education.</strong> We will be talking about what
          Quality Education is, how you can help and a few interactive games as
          well!
        </body>
      </div>

      <div class="about">
        <h3>What are the United Nations Sustainablity Goals?</h3>
        <p>
          The <strong>United Nations Sustainablity Goals</strong> are 17 global
          goals that are designed to help create peace and prosperity on the
          planet for everyone. Visit the <Link href="/about">About</Link> page
          to learn more about quality education and how you can help.
        </p>
      </div>
    </>
  );
}
