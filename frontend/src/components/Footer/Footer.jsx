import '../../styles/footer.css'

import {Container, Row, Col, ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const quick_links =[
  {path:'/home',display:'Home'},
  {path:'/about',display:'About'},
  {path:'/tours',display:'Tours'}
];

const quick_links2 =[
  {path:'/gallery',display:'Gallery'},
  {path:'/login',display:'Login'},
  {path:'/register',display:'Register'}
] 

const Footer = () => {


  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga similique temporibus enim iure harum?</p>

            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="#">
                <i class="ri-youtube-line"></i>
                </Link>
                <Link to="#">
                <i class="ri-github-fill"></i>
                </Link>
                <Link to="#">
                <i class="ri-facebook.-circle-line"></i>
                </Link>
                <Link to="#">
                <i class="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </div>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {
                quick_links.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link key={index} to={item.path}>
                    {item.display}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {
                quick_links2.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link key={index} to={item.path}>
                    {item.display}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links">
                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-center g-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0">Mumbai,Maharashtra</p>
                  </ListGroupItem>
                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-center g-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>
                    Email: 
                  </h6>
                  <p className="mb-0 "> deepak.mane1902@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-center g-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span className="pl-2">
                      <i class="ri-phone-fill"></i>
                    </span>
                    phone:
                  </h6>
                  <p className="mb-0">+91-9960633200</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
          <p className="copyright">copyright {year}, design and develop by Deepak_Mane. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer