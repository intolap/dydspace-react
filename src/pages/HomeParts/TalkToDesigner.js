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

export default function TalkToDesigner() {
    const [formData, setFormData] = useReducer(formReducer, {'fid':153});
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setMessage('Submtting Your Details...');

        if(formData['your-name']===''){
            setMessage('<p class="text-danger">Please enter full name!</p>');
            setSubmitting(false);
            return false;
        }else if(formData['your-email']===''){
            setMessage('<p class="text-danger">Please enter email!</p>');
            setSubmitting(false);
            return false;
        }else if(formData['your-phone']===''){
            setMessage('<p class="text-danger">Please enter phone number!</p>');
            setSubmitting(false);
            return false;
        }else if(formData['property-type']===''){
            setMessage('<p class="text-danger">Please enter property type!</p>');
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
                    setMessage('<p class="text-danger">Some error occured!</p>');
                }
            })
        } catch (err) {
            console.log(err);
            setMessage('<p class="text-danger">'+err.toString()+'</p>');
        }
    }

    return (
    <section className="features-ct " data-aos="fade-down" data-aos-duration="1000">
        <div className="container">
            <div className="row">
            <div className="designer-std zoomInUp">
                <h3>Talk to a designer</h3>
                <div className="cont-from">
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
                                <input type="text" name="property-type" className="form-control" placeholder="Enter Property Type" onChange={setFormData} value={formData['property-type'] || ''}></input>
                            </div>
                            <div className="col-md-12 mb-4">
                                <div className="clc-gl">
                                <label className="form-check-label">
                                    <input type="checkbox" name="whatsapp-optin" value="Send me updates on WhatsApp" onChange={setFormData} checked={formData['whatsapp-optin'] || false}></input>
                                    Send me updates on WhatsApp</label>
                                <p>By submitting this form, you agree to our <span>privacy policy</span></p>
                                <button className="btn button-white btn-change8" type="submit" disabled={submitting}>Book Online Consultation</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button className="down"></button> </div>
        </div>
    </section>
  )
}