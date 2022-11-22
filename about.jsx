import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */
import { useWiggle } from "../hooks/wiggle";
import { animated } from "react-spring";

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function About() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const [style, trigger] = useWiggle({ x: 50, rotation: 1, scale: 1.2 });

  return (
    <div className="page">
      <animated.h1 className="title" style={style}>
        UNITED NATIONS DEVELOPMENT GOAL #4: <strong>QUALITY EDUCATION</strong>
      </animated.h1>

      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <h2 onMouseEnter={trigger}>Information about Quality Education</h2>
      <p>
        <em>What is quality education and why is it important?</em>
      </p>

      <h2>WHAT IS QUALITY EDUCATION?</h2>
      <body>
        <i>Quality education</i> is the 4th United Nations Sustainable Development Goal and it is about
        <strong> promoting learning opportunities</strong> and focusing on
        <i> mental, physical, social</i> and <i>cognitive development</i> for
        everyone. Quality education is about creating healthy and safe learning
        environments for kids and adolescents around the world by providing them
        with good teachers and the tools necessary to succeed and propser at
        school.
      </body>

      <center>
        <img
          src="https://i0.wp.com/1.bp.blogspot.com/-5IPvRgjod-k/XAZp4gK5WlI/AAAAAAABRSM/TrFnLG97Kw4WKk8cNgBVqyvKqiWLqe5_ACEwYBhgL/s1600/Education%2Bmeeting%2Bgraphic.jpg?ssl=1"
          class="illustration"
          alt="Editor illustration"
          title="Quality Education"
          height="500px"
        />
      </center>

      <div class="statistics">
        <h2>FACTS AND STATISTICS</h2>
        <ol>
          <li>
            Around <strong>244 million children</strong> around the world
          </li>
          <li>Only 60% of countries adopted remote learning policies</li>
          <li>
            Approximately <strong>70-80% of students</strong> are active in
            labor market
          </li>
          <li>
            <strong>22% of students</strong> report being bullied during the
            school year
          </li>
          <li>
            <strong>20%</strong> of primary-age students around the world have
            not attended school as of 2018
          </li>
        </ol>

        <center>
          <img
            src="https://sustain.auburn.edu/wp-content/uploads/2021/09/SDG-4-INSTA.jpg"
            class="pic"
            alt="Quality Education"
            height="400px"
          />
        </center>
      </div>

      <div class="countries">
        <h3>Some Countries with the best Quality Education</h3>
        <ul>
          <li>United Kingdom</li>
          <li>United States</li>
          <li>South Korea</li>
          <li>Netherlands</li>
        </ul>
        <img
          src="https://www2.sdgactioncampaign.org/wp-content/uploads/2015/08/global-education-map.png"
          class="pic"
          alt="Global Education"
          height="300px"
        />
      </div>

      <div class="example">
        <h2>WHAT QUALITY EDUCATION LOOKS LIKE</h2>
        <ol>
          <li>Quality learning equipment</li>
          <li>Secure and safe learning envrionments</li>
          <li>Healthy learners eager to learn and participate</li>
        </ol>
      </div>

      <div class="charities">
        <h2>HOW YOU CAN HELP</h2>
        <p>
          Here are a few charities that support quality education globally to
          support and send donations.
        </p>

        <ul>
          <li>United World Schools</li>
          <li>Childhood Education International</li>
          <li>Asha for Education</li>
          <li>Save the Children</li>
          <li>World Education</li>
        </ul>
      </div>
    </div>
  );
}
