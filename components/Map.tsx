import React from 'react';

// Functional Component for rendering a map
const Map: React.FC = () => {
  return (
    <div className='w-screen h-64'>
      <iframe
        className='w-full h-full'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.745463801143!2d32.6446626737588!3d0.34625496398206757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db98afb47057f%3A0x7e0cdbd667969227!2sKireka%20Business%20Center!5e0!3m2!1sen!2sug!4v1705444830128!5m2!1sen!2sug"
        allowFullScreen // React uses camelCase for HTML attributes
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
