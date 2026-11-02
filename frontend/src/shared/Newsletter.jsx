
import '../styles/newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourists from '../assets/images/male-tourist.png';

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Connect your subscription API here.
  };

  return (
    <section className="newsletter">
      <Container>
        <Row className="newsletter__row align-items-center">
          {/* Newsletter content */}
          <Col lg="7" md="7" sm="12">
            <div className="newsletter__content">
              <h2>
                Subscribe now to get useful traveling information.
              </h2>

              <form
                className="newsletter__input"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  required
                />

                <button
                  type="submit"
                  className="btn newsletter__btn"
                >
                  Subscribe
                </button>
              </form>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Unde consectetur nihil, provident est
                voluptates impedit.
              </p>
            </div>
          </Col>

          {/* Larger traveler image */}
          <Col lg="5" md="5" sm="12">
            <div className="newsletter__img">
              <img
                src={maleTourists}
                alt="Traveler ready for an adventure"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
