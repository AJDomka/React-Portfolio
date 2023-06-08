import "../components/css/About-Light.css";
import PhotoOfMe from "../images/Portrait.png";

export function About() {
  return (
    <>
      <div id="about-me">
        <h1>Want to know more about me?</h1>
        <div id="about-header">
          <div className="portrait">
            <img src={PhotoOfMe} />
          </div>
          <div id="about-title">
            <h5>
              I am recent graduate of Northcentral Technical College in Wausau
              and I graduated with my second associates degree, this time in the
              IT - Software Developer program.
            </h5>
          </div>
        </div>
        <div id="about-questions">
          <h2>How did I start my professional career?</h2>
          <p>
            My first round of school led me into the manufacturing world with a
            degree in Prototype & Design. I learned a lot about the life cycle
            of product and how the development of a product can change. I still
            remember the first protoype I made when I became a Cast Urethane
            Technician and how 3 years later it won an award for "Best New Tech
            Product".
          </p>
          <h2>What happened next?</h2>
          <p>
            After leaving the manufacturing industry, I spent about 5 years
            learning and pursuing a career in multi-media production. I learned
            a good chunk of the Adobe Suite and went on to produce a short film,
            a sketch comedy series, a cartoon series, and over a handful of
            music videos and show/tour promo videos for local bands in the
            Madison area.
          </p>
          <h2>Why am I trying to work for YOU?</h2>
          <p>
            Once Covid shutdown most possibilities to meet and film with people,
            I started to contemplate how else I could use my skills. The process
            of animating in After Effects was painfully time consuming when done
            keyframe by keyframe. I quickly learned a background in JavaScript
            and programming fundamentals would help immensley with speeeding up
            the Motion Design process with the use of After Effects Scripting
            and Expressions. That's when I decided that focusing on a software
            developer career, I would be able to improve the skills behind my
            passion for Motion Design.
          </p>
        </div>
      </div>
    </>
  );
}
