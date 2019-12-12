import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import * as emailjs from 'emailjs-com';
import * as EmailValidator from 'email-validator';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';


const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  nameError: '',
  emailError: '',
  subjectError: '',
  mesError: ''
};

class ContactPage extends Component {
  state = initialState;
  
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let isValid = this.validateForm();
    
    if (isValid) {
      let templateParams = {
        name: name,
        from_name: this.state.name + '(' + this.state.email + ')',
        to_name: 'archangelbg.warmaster@gmail.com',
        subject: this.state.subject,
        message_html: this.state.message
      };
      
      
        
        emailjs.send('gmail', 'template_NwbHuWWX', templateParams, 'user_FDArPN2GTq25s7zF5CWaX')
            .then(function(response){
              toastr.options = {
                positionClass : 'toast-top-full-width',
                timeOut: 4500
              }
                toastr.success('Message sent successful!');
                console.log('SUCCESS!', response.status, response.text);
            }, function (err) {
                toastr.error(err);
                console.log(err);
            
            });

            this.setState ({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

           
    }
  }

  validateForm() {
    let nError = '';
    let sError = '';
    let eError = '';
    let mError = '';
    if (this.state.name === '' || this.state.name.length < 3) {
      nError = 'Minimum 3 symbols is required!';
    }

    if (!EmailValidator.validate(this.state.email)) {
      eError = 'Please enter a valid email';
    }

    if (this.state.subject === '' || this.state.subject.length < 3) {
      sError = 'Minimum 3 symbols is required!';
    }

    if (this.state.message === '' || this.state.message.length < 10) {
      mError = 'Minimum 10 symbols is required!';
    }

    if (nError || sError || eError || mError) {
      this.setState({
        nameError: nError,
        subjectError: sError,
        emailError: eError,
        mesError: mError
      });
      return false;
    }

    return true;
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

   
render () {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
      Creativity bleeds from the pen of inspiration.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
                <form
                  onSubmit={this.handleSubmit.bind(this)}
                 >
              <div className="form-header blue hedar">
                <h3 className="mt-2 write-to-us" >
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text under-header-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  name='name'
                  className='form-control'
                  required='required' onChange={this.handleChange.bind(this, 'name')}
                  value={this.state.name}                  
                  id="form-name"                  
                />
                {this.state.nameError ? (
                    <div style={{ color: 'red', fontWeight: 'lighter' }}>
                      {this.state.nameError}
                    </div>
                  ) : null}
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="email"
                  name='email'
                  className='form-control'
                  required='required' 
                  onChange={this.handleChange.bind(this, 'email')}
                  value={this.state.email}                  
                  id="form-email"                  
                />
                {this.state.emailError ? (
                      <div style={{ color: 'red', fontWeight: 'lighter' }}>
                        {this.state.emailError}
                      </div>
                    ) : null}
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  name='subject'
                  className='form-control'
                  required='required' 
                  onChange={this.handleChange.bind(this, 'subject')}
                  value={this.state.subject}                  
                  id="form-subject"                  
                />
                {this.state.subjectError ? (
                      <div style={{ color: 'red', fontWeight: 'lighter' }}>
                        {this.state.subjectError}
                      </div>
                    ) : null}
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message"
                  iconClass="grey-text"
                  type="textarea"
                  name='message'
                  id='message'
                  className='form-control'
                  required='required' 
                  onChange={this.handleChange.bind(this, 'message')}
                  value={this.state.message}              
                  
                  />
                  {this.state.mesError ? (
                      <div style={{ color: 'red', fontWeight: 'lighter' }}>
                        {this.state.mesError}
                      </div>
                    ) : null}
              </div>
              <div className="text-center">
                <MDBBtn color="blue"
                    
                    type='submit'
                    
                 >
                   {''}
                   Submit</MDBBtn>
              </div>
              </form>             
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="http://maps.google.com/maps?q=42.714920,23.254118&z=15&output=embed"
              title="Lulin - Siver Center"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating="true" color="blue" className="accent-1 mb-3 radius">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p className="mb-md-0">Sofia, 1324</p>
              <p className="mb-md-0">Bulgaria</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating="true" color="blue" className="accent-1 mb-3 radius">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="mb-md-0">+359 878 715 210</p>
              <p className="mb-md-0">Mon-Fri, 9:30-18:30</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating="true" color="blue" className="accent-1 mb-3 radius">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="mb-md-0">info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
}

export default ContactPage;