import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import * as emailjs from 'emailjs-com';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';



class ContactPage extends Component {

  
    constructor (props) {        
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    }

    handleInputChange (event) {
        event.preventDefault()
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});
        
    }

    validateMail() {
        let errors = {};
        let formIsValid = true;

        if (this.state.name || this.state.name.length < 3) {
            errors.name = 'Minimum 3 symbols is required!';
            formIsValid = false;
        }

        if (!this.state.subject || this.state.subject.length < 3) {
            errors.subject = 'Minimum 3 symbols is required!';
            formIsValid = false;
        }

        if (!this.state.message || this.state.message.length < 3) {
            errors.message = 'Minimum 10 symbols is required!';
            formIsValid = false;
        }

        if (!this.state.email || this.state.email.length < 3) {
            errors.email = 'Minimum 3 symbols is required!';
            formIsValid = false;
        }

        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!pattern.test(this.state.email)) {
            errors.mail = 'This is not a valid email!';
            formIsValid = false;
        }

        this.setState({
          
            errors: errors
           
        });
       

        return formIsValid;        
        
    }

    sentMessage (event) {
        event.preventDefault();

        if (!this.validateMail()) {
            return;            
        }

        let templateParams = {
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
                  id={this.props.id}
                  className={this.props.className}
                  name={this.props.name}
                  method={this.props.method}
                  action={this.props.action}
                 >
              <div className="form-header blue ">
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
                  required='required' onChange={this.handleInputChange.bind(this)}
                  value={this.state.name}
                  error={this.state.errors.name}
                  id="form-name"
                />
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
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.email}
                  error={this.state.errors.email}
                  id="form-email"
                  
                />
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
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.subject}
                  error={this.state.errors.subject}
                  id="form-subject"                  
                />
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
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.message}
                  error={this.state.errors.message}
                  
                />
              </div>
              <div className="text-center">
                <MDBBtn color="blue"
                    onClick={this.sentMessage.bind(this)}
                    type='button'
                    name='submit'
                    required='required'
                 >Submit</MDBBtn>
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
              <MDBBtn tag="a" floating color="blue" className="accent-1 mb-3 radius">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p className="mb-md-0">Sofia, 1324</p>
              <p className="mb-md-0">Bulgaria</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1 mb-3 radius">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="mb-md-0">+359 878 715 210</p>
              <p className="mb-md-0">Mon-Fri, 9:30-18:30</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1 mb-3 radius">
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