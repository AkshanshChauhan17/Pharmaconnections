const GoogleMapSection = () => {
  return (
    <section className="map-section" aria-label="Location map">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.905152815098!2d77.6076394!3d12.9092455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ebfda22d05%3A0x9f30d44a989d1435!2sPharma%20Connections%20(A%20Product%20of%20Eduteq%20Connections%20Pvt%20Ltd)!5e0!3m2!1sen!2sin!4v1725542592247!5m2!1sen!2sin"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pharma Connections Location"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMapSection;