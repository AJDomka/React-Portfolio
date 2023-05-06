import { Container } from "react-bootstrap";
import PhotoOfMe from "../images/Portrait.png";

export function About() {
  return (
    <>
      <Container
        className="col-10"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "25px",
        }}
      >
        <div className="col-10">
          <h1 className="m-3">How did I get here?</h1>
          <img src={PhotoOfMe} height="333px" />
        </div>
        <div className="col-10">
          <h2 className="my-3">How did I start my professional career?</h2>
          <p className="text-secondary px-2">
            My first round of school led me into the manufacturing world with a
            degree in Prototype & Design. I learned a lot about the life cycle
            of product and how the development of a product can change. I still
            remember the first protoype I made when I became a Cast Urethane
            Technician and how 3 years later it won an award for "Best New Tech
            Product".
          </p>
          <h2 className="my-3">What happened next?</h2>
          <p className="text-secondary px-2">
            After leaving the manufacturing industry, I spent about 5 years
            learning and pursuing a career in multi-media production. I learned
            a good chunk of the Adobe Suite and went on to produce a short film,
            a sketch comedy series, a cartoon series, and over a handful of
            music videos and show/tour promo videos for local bands in the
            Madison area.
          </p>
          <h2 className="my-3">Why am I trying to work for YOU?</h2>
          <p className="text-secondary px-2">
            Once Covid shutdown most possibilities to meet and film with people,
            I started to contemplate how else I could use my skills. The process
            of animating in After Effects was painfully time consuming when done
            keyframe by keyframe. I quickly learned a background in JavaScript
            and programming fundamentals would help immensley with speeeding up
            the animation process with the use of Affter Effects Scripting and
            Expressions. That's when I decided that focusing on a software
            developer career, I would be able to improve the skills behind my
            passion for animation.
          </p>
        </div>
      </Container>
    </>
  );
}
