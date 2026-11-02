import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';

import worldImg from '../assets/images/world.png';
import heroImg01 from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVd from '../assets/images/hero-video.mp4';
import experImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar'
import ServicesList from '../services/ServicesList'
import FeatureTourList from '../components/Feature-tours/FeatureTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImageGallery';
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
    {/* =======Hero Section Start ========= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="WorldImage" />
            </div>
            <h1>Traveling opens the door to creating <span className="highlight">Memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit vel accusantium, architecto rerum placeat perferendis sequi quasi cumque laboriosam enim molestiae ducimus assumenda sint quia quos, aliquid illum excepturi nemo exercitationem doloribus. Rem culpa placeat dicta nulla ducimus vero?</p>
          </div>
          </Col>

          <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg01} alt="heroImg" />
          </div>
          </Col>
          <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVd} alt="heroVideo" controls autoplays />
          </div>
          </Col>
          <Col lg='2'>
          <div className="hero__img-box mt-5" >
            <img src={heroImg02} alt="heroImg" />
          </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/* =======Hero Section Start ========= */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className="services__title">we offer our best services</h2>
          </Col>
          <ServicesList/> 
        </Row>
      </Container>
    </section>
    {/* Feature Tour section start */}

    <Container>
      <Row>
        <Col lg="12" className="mb-5">
        <Subtitle subtitle={"Explore"}/>
        <h2>Our featured tours</h2>
        </Col>
        <FeatureTourList />
      </Row>
    </Container>
    {/* Feature Tour section end */}

    {/* Experience section start  */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}/>

              <h2>
                with our all experience <br /> we will serve you
              </h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse soluta voluptatibus recusandae maiores obcaecati praesentium voluptas vel earum quis nesciunt, velit ullam nostrum impedit beatae?</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
            <Col lg='6'>
            <div className="experience__img">
              <img src={experImg} alt="experience img" />
            </div>
            </Col>
        </Row>
      </Container>
    </section>
    {/* Experience section end  */}

    {/* Gallery section start  */}

    <section>
      <Container>
        <Row>
          <Col lg="12">
          <Subtitle subtitle={"Gallery"} />
          <h2 className="gallery__title">
            Visit our customers tour gallery
          </h2>
          </Col>
          <Col lg="12">
          <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* Experience section end  */}
    {/* Testimonial section start  */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Testimonial'}/>
          <h2 className="testimonial__title">
            What's our fans say about us
          </h2>
          </Col>
          <Col lg="12">
          <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Testimonial section end  */}

    <Newsletter/>

    </>
  )
}

export default Home