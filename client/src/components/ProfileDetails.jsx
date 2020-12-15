function ProfileDetails(props) {
  const { companyName } = props.data;
  const { country } = props.data;
  const { regNumber } = props.data;
  const { address } = props.data;
  const { phone } = props.data;

  return (
    <section>
      <div className="profile-details">
        <div>
          <div className="company-name__section ">
            <h3 className="company-name__title profile-title">Company Name</h3>
            <p className="company-name__text">{companyName}</p>
          </div>
          <div className="country__section">
            <h3 className="country__title profile-title">Country</h3>
            <p className="country__text">{country}</p>
          </div>
          <div className="regNumber__section">
            <h3 className="regNumber__title profile-title">
              Registration Number
            </h3>
            <p className="regNumber__text">{regNumber}</p>
          </div>
          <div className="address__section">
            <h3 className="address__title profile-title">Address</h3>
            <p className="address__text">{address}</p>
          </div>
          <div className="phone__section">
            <h3 className="phone__title profile-title">Phone Number</h3>
            <p className="phone__text profile-title">{phone}</p>
          </div>
        </div>
        <div className="profile-image__section"></div>
      </div>
      <div className="new-transit">
        <button className="new-transit__btn"> Book Transit</button>
      </div>
    </section>
  );
}

export default ProfileDetails;
