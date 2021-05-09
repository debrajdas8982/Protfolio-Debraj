import React from 'react';
import ContactItem from '../components/ContactItem';
import Title from '../components/Title';

import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

const ContactPage = () => {
    return (
        <div>
        <div className="title">
            <Title title={'About Me'} span={'About Me'} />
        </div>
        <div className="ContactPage">
            <div className="map-sect">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041.5572212739987!2d17.935189515975125!3d59.22341608162191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f711fce3d652f%3A0xc581a49acc8b2fb7!2sR%C3%B6ntgenv%C3%A4gen%205%2C%20141%2052%20Huddinge!5e0!3m2!1sen!2sse!4v1620222591681!5m2!1sen!2sse" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={'+46 739961691'} text2={'+088 1683357044 '} title={'Phone'}/>
                <ContactItem icon={email} text1={'debraj_cse@yahoo.com'} text2={'debraj.bth@gmail.com'} title={'Email'}/>
                <ContactItem icon={location} text1={'Röntgenvägen 5, Lgh 1615 14152 Huddinge'} text2={'Sweden'} title={'Address'}/>
            </div>
        </div>
    </div>
    );
};

export default ContactPage;