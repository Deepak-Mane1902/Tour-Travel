
import React, { useState } from 'react';
import '../styles/tour-details.css';

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';

import { useParams, Link } from 'react-router-dom';
import tourData from '../assets/data/tours';

const TourDetails = () => {

  const { id } = useParams();

  const [booking, setBooking] = useState({
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: ''
  });

  const [message, setMessage] = useState('');

  // Find selected tour
  const tour = tourData.find(
    (item) => String(item.id) === String(id)
  );

  // Check whether tour exists
  if (!tour) {
    return (
      <section className="tour__details-section">
        <Container>
          <div className="tour__not-found">
            <h2>Tour Not Found!</h2>
            <p>Sorry, the tour you are looking for does not exist.</p>
            <Link to="/tours" className="btn booking__btn">
              Back to Tours
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const {
    photo,
    title,
    desc,
    price,
    reviews = [],
    city,
    distance,
    maxGroupSize
  } = tour;

  // Calculate average rating
  const validReviews = Array.isArray(reviews) ? reviews : [];

  const totalRating = validReviews.length;

  const calculatedRating =
    totalRating > 0
      ? validReviews.reduce(
          (total, review) => total + Number(review.rating || 0),
          0
        ) / totalRating
      : 0;

  const avgRating = Number(tour.avgRating) || calculatedRating;

  // Handle booking input
  const handleChange = (event) => {
    const { name, value } = event.target;

    setBooking((prev) => ({
      ...prev,
      [name]: value
    }));

    setMessage('');
  };

  // Handle booking form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!booking.fullName || !booking.phone || !booking.bookAt) {
      setMessage('Please fill in all booking details.');
      return;
    }

    if (Number(booking.guestSize) < 1) {
      setMessage('Please select at least one guest.');
      return;
    }

    if (Number(booking.guestSize) > Number(maxGroupSize)) {
      setMessage(`Maximum group size is ${maxGroupSize}.`);
      return;
    }

    setMessage(
      'Your booking details are ready. Connect your booking API to confirm your reservation.'
    );
  };

  return (
    <section className="tour__details-section">
      <Container>

        <Row>

          {/* LEFT SIDE - TOUR DETAILS */}

          <Col lg="8">

            <div className="tour__content">

              {/* Tour Image */}

              <div className="tour__image">
                <img
                  src={photo}
                  alt={title}
                  className="w-100"
                />
              </div>

              {/* Tour Information */}

              <div className="tour__info">

                <h2>{title}</h2>

                <div className="tour__info-extra d-flex align-items-center flex-wrap gap-4">

                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill"></i>

                    {avgRating > 0
                      ? avgRating.toFixed(1)
                      : 'Not Rated Yet'
                    }

                    {totalRating > 0 && (
                      <span>({totalRating} reviews)</span>
                    )}
                  </span>

                  <span className="d-flex align-items-center gap-1">
                    <i className="ri-map-pin-line"></i>
                    {city}
                  </span>

                </div>

                <div className="tour__extra-details">

                  <span>
                    <i className="ri-map-pin-time-line"></i>
                    {distance} km
                  </span>

                  <span>
                    <i className="ri-group-line"></i>
                    {maxGroupSize} people
                  </span>

                  <span>
                    <i className="ri-money-dollar-circle-line"></i>
                    ${price} / person
                  </span>

                </div>

                {/* Description */}

                <div className="tour__description">

                  <h3>Description</h3>

                  <p>{desc}</p>

                </div>

              </div>

            </div>

            {/* CUSTOMER REVIEWS */}

            <div className="tour__reviews mt-5">

              <h3>
                Reviews ({totalRating})
              </h3>

              {totalRating > 0 ? (

                validReviews.map((review, index) => (

                  <div className="tour__review-item" key={review._id || index}>

                    <div className="tour__review-header">

                      <h5>
                        {review.userName || review.name || 'Traveler'}
                      </h5>

                      <span className="tour__rating">
                        <i className="ri-star-fill"></i>
                        {Number(review.rating || 0).toFixed(1)}
                      </span>

                    </div>

                    <p>
                      {review.reviewText ||
                        review.comment ||
                        review.text ||
                        'No review comment available.'}
                    </p>

                  </div>

                ))

              ) : (

                <p className="no__reviews">
                  No reviews yet. Be the first to review this tour!
                </p>

              )}

            </div>

          </Col>

          {/* RIGHT SIDE - BOOKING CARD */}

          <Col lg="4">

            <div className="booking">

              <div className="booking__top d-flex align-items-center justify-content-between">

                <h3>
                  ${price}
                  <span>/person</span>
                </h3>

                <span className="tour__rating">
                  <i className="ri-star-fill"></i>
                  {avgRating > 0 ? avgRating.toFixed(1) : 'New'}
                  {totalRating > 0 && ` (${totalRating})`}
                </span>

              </div>

              <div className="booking__form">

                <h5>Information</h5>

                <Form onSubmit={handleSubmit}>

                  <FormGroup>
                    <Label>Full Name</Label>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={booking.fullName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={booking.phone}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Guests</Label>
                    <Input
                      type="number"
                      name="guestSize"
                      min="1"
                      max={maxGroupSize}
                      value={booking.guestSize}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Booking Date</Label>
                    <Input
                      type="date"
                      name="bookAt"
                      min={new Date().toISOString().split('T')[0]}
                      value={booking.bookAt}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <div className="booking__bottom">

                    <ul>
                      <li>
                        <span>
                          ${price} × {booking.guestSize} guests
                        </span>

                        <span>
                          ${Number(price) * Number(booking.guestSize)}
                        </span>
                      </li>

                      <li>
                        <span>Service charge</span>
                        <span>$0</span>
                      </li>

                      <li className="booking__total">
                        <span>Total</span>
                        <span>
                          ${Number(price) * Number(booking.guestSize)}
                        </span>
                      </li>
                    </ul>

                  </div>

                  {message && (
                    <p className="booking__message" role="status">
                      {message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="btn booking__btn w-100"
                  >
                    Request Booking
                  </Button>

                </Form>

              </div>

            </div>

          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default TourDetails;
