import { useState } from "react";
import ModalBooking from "./ModalBooking";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/user.png";

function ProfileDetails(props) {
  const { companyName } = props.data;
  const { country } = props.data;
  const { regNumber } = props.data;
  const { address } = props.data;
  const { phone } = props.data;

  // const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <div className="profile-details">
        <div className="profile-details__content">
          <div className="company-name__section ">
            <h3 className="company-name__title profile-title">Company Name</h3>
            <p companyName={companyName} className="profile-text">
              {companyName}
            </p>
          </div>
          <div className="country__section">
            <h3 className="country__title profile-title">Country</h3>
            <p country={country} className="profile-text">
              {country}
            </p>
          </div>
          <div className="regNumber__section">
            <h3 className="regNumber__title profile-title">
              Registration Number
            </h3>
            <p regNumber={regNumber} className="profile-text">
              {regNumber}
            </p>
          </div>
          <div className="address__section">
            <h3 className="address__title profile-title">Address</h3>
            <p address={address} className="profile-text">
              {address}
            </p>
          </div>
          <div className="phone__section">
            <h3 className="phone__title profile-title">Phone Number</h3>
            <p phone={phone} className="profile-text">
              {phone}
            </p>
          </div>
        </div>
        <div>
          <img className="profile-image" src={ProfileImg} alt="" />
        </div>
      </div>
      <div className="new-transit">
        <Link to="/newbooking">
          <button
            // type="button"
            // onClick={() => setShowModal(true)}
            // id="new-transit__btn"
            className="new-transit__btn"
          >
            Book Transit
          </button>
        </Link>
      </div>
      {/* {showModal && (
        <div>
          <ModalBooking id="modal-cancel" />
          <button onClick={() => setShowModal(false)}>CANCEL</button>
        </div>
      )} */}
    </section>
  );
}

export default ProfileDetails;
