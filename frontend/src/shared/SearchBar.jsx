import { useRef } from 'react';
import '../styles/searchbar.css';
import { Col, Form, FormGroup } from 'reactstrap';


const SearchBar = () => {


  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = ()=>{
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if(location === '' || distance === '' || maxGroupSize === ''){
      return alert('All fields are required!')
    }
  }

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          {/* Location */}
          <FormGroup className="d-flex gap-3 form__group">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          {/* Distance */}
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                min="1"
                placeholder="Distance (km)"
                ref={distanceRef}
              />
            </div>
          </FormGroup>

          {/* Maximum people */}
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
            <input
              type="number"
              min="1"
              placeholder="0"
              ref={maxGroupSizeRef}
            />
            </div>
          </FormGroup>

          {/* Search button */}
          <button type="submit" onClick={searchHandler} className="search__icon" aria-label="Search tours">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;     