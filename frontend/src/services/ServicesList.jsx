import ServiceCard from './ServicesCard';
import {Col} from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
     {
          imgUrl:weatherImg,
          title:'Calculate Weather',
          desc:'Lorem ad adjad adjadj ahjdep should sho gue djdsas ahd'
     },
     {
          imgUrl:guideImg,
          title:'Best Tour Guide',
          desc:'Lorem ad adjad adjadj ahjdep should sho gue djdsas ahd'
     },
     {
          imgUrl:customizationImg,
          title:'Customization',
          desc:'Lorem ad adjad adjadj ahjdep should sho gue djdsas ahd'
     },
]

const ServicesList = () => {
  return (
    <>
    {
     servicesData.map((item,index)=>(
          <Col lg='3' key={index}>
          <ServiceCard item={item}/>
          </Col>
     ))
    }
    </>
  )
}

export default ServicesList