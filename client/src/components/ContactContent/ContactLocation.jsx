import React from 'react';

const ContactLocation = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-lg shadow-2xl !py-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28753.4972769333!2d-80.28124784181232!3d25.731323572365437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7893d829fe1%3A0x1d9479b1ba399225!2sAR%20Insurance!5e0!3m2!1sen!2sin!4v1740722845323!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default ContactLocation;