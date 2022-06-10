import React, { useReducer, useState } from 'react'
import axios from 'axios';

const formReducer = (state, event) => {
    if(event.reset) {
        return {
            'fid': 153,
            'your-name': '',
            'your-email': '',
            'your-phone': '',
            'property-type': '',
            'whatsapp-optin': false
        }
    }

    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Form() {
    const [formData, setFormData] = useReducer(formReducer, {'fid':153});
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setMessage('Submtting Your Details...');

        if(formData['your-name']===''){
            setMessage('<p className="text-danger">Please enter full name!</p>');
            setSubmitting(false);
            return false;
        }else if(formData['your-email']===''){
            setMessage('<p className="text-danger">Please enter email!</p>');
            setSubmitting(false);
            return false;
        }else if(formData['your-phone']===''){
            setMessage('<p className="text-danger">Please enter phone number!</p>');
            setSubmitting(false);
            return false;
        }else if(formData['property-type']===''){
            setMessage('<p className="text-danger">Please enter property type!</p>');
            setSubmitting(false);
            return false;
        }

        // console.log(formData); return false;

        try {
            const fd = JSON.stringify(formData);
            axios.post('https://dydspace.com/wp-json/dydspace-core/cf7db/', fd)
            .then(res=>{
                // console.log(res);
                // console.log(res.data);
                if (res.status === 200) {
                    setFormData({
                        reset: true
                    });
                    setSubmitting(false);
                    setMessage(res.data);
                } else {
                    setMessage('<p className="text-danger">Some error occured!</p>');
                }
            })
        } catch (err) {
            console.log(err);
            setMessage('<p className="text-danger">'+err.toString()+'</p>');
        }
    }

    return (
      <div className="contact-gh" style={{"paddingTop": "50px"}} data-aos="fade-down" data-aos-duration="1000" >
        <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                  <div className="contact-form">
                      {submitting &&
                      <div className="alert alert-primary">{message ? <p>{message}</p> : null}</div>
                      }
                      <form onSubmit={handleSubmit}>
                          <div className="form-row" >
                              <div className="col-md-6 mb-4" data-aos="fade-down" data-aos-duration="1000">
                                  <input type="text" name="your-name" className="form-control" placeholder="Enter Full Name" onChange={setFormData} value={formData['your-name'] || ''}></input>
                              </div>
                              <div className="col-md-6 mb-4" data-aos="fade-down" data-aos-duration="1000">
                                  <input type="text" name="your-email" className="form-control" placeholder="Enter Email Id" onChange={setFormData} value={formData['your-email'] || ''}></input>
                              </div>
                              <div className="col-md-6 mb-4" data-aos="fade-down" data-aos-duration="1000">
                                  <input type="text" name="your-phone" className="form-control" placeholder="Enter Phone Number" onChange={setFormData} value={formData['your-phone'] || ''}></input>
                              </div>
                              <div className="col-md-6 mb-4" data-aos="fade-down" data-aos-duration="1000">
                                  <input type="text" name="your-subject" className="form-control" placeholder="Enter Subject" onChange={setFormData} value={formData['your-subject'] || ''}></input>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control" id="inputMessage" aria-required="true" aria-invalid="false" placeholder="Enter Message" spellcheck="false"></textarea></span>
                                </div>
                              </div>

                              <div className="col-md-12 mb-4">
                                  <div className="clc-gl">
                                  
                                  <p>By submitting this form, you agree to our <span>privacy policy</span></p>
                                  <button className="btn button-white btn-change8" type="submit" disabled={submitting}>Submit</button>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}