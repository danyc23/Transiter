import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const axios = require('axios');

class Register extends React.Component {
  state = {
    companyName: '',
    country: '',
    regNumber: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.registerUser();
    e.target.reset();
  };

  registerUser = () => {
    axios
      .post('http://localhost:5001/users', {
        companyName: this.state.companyName,
        country: this.state.country,
        regNumber: this.state.regNumber,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
      })
      .then((newUser) => {
        console.log(newUser);
        this.setState({
          companyName: '',
          country: '',
          regNumber: '',
          address: '',
          phone: '',
          email: '',
          password: '',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <section className='register'>
        <Navbar />
        <div className='register-main__container'>
          <div className='register-border'>
            <div className='register-title__container'>
              <h1 className='register-title'>Register</h1>
            </div>

            <form className='register-form' onSubmit={this.submitHandler}>
              <div className='register-container'>
                <label className='register-label' for='companyName'>
                  Company Name
                </label>
                <input
                  className='register-input'
                  type='text'
                  name='companyName'
                  id='companyName'
                  onChange={this.changeHandler}
                />
              </div>
              <div className='register-container'>
                <label className='register-label' for='country'>
                  Country
                </label>
                <input
                  className='register-input'
                  type='text'
                  name='country'
                  id='country'
                  onChange={this.changeHandler}
                />
              </div>
              <div className='register-container'>
                <label className='register-label' for='regNumber'>
                  Registration Number
                </label>
                <input
                  className='register-input'
                  type='text'
                  name='regNumber'
                  id='regNumber'
                  onChange={this.changeHandler}
                />
              </div>
              <div className='register-container'>
                <label className='register-label' for='address'>
                  Address
                </label>
                <input
                  className='register-input'
                  type='text'
                  name='address'
                  id='address'
                  onChange={this.changeHandler}
                />
              </div>
              <div className='register-container'>
                <label className='register-label' for='phone'>
                  Phone Number
                </label>
                <input
                  className='register-input'
                  type='number'
                  name='phone'
                  id='phone'
                  onChange={this.changeHandler}
                />
              </div>
              <div className='register-container'>
                <label className='register-label' for='email'>
                  Email
                </label>
                <input
                  className='register-input'
                  type='text'
                  name='email'
                  id='email'
                  onChange={this.changeHandler}
                />
              </div>
              <div className='register-container'>
                <label className='register-label' for='password'>
                  Password
                </label>
                <input
                  className='register-input'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.changeHandler}
                />
              </div>
              <div className='register-container'>
                <button className='register-btn' type='submit'>
                  Register
                </button>
              </div>
              <div className='register-container register-container__cancel'>
                <div className='register-cancel'>
                  <Link className='register-cancel__text' to='/'>
                    <button className='register-cancel__btn'>CANCEL</button>
                  </Link>
                </div>
                <Link to='./login'>
                  <p className='register-login__text'>Login</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
