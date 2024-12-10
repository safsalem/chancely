import React from 'react';
import styles from './EventVenue.module.css';

function EventVenue() {
  return (
    <section className={styles.eventVenue}>
      <div className={styles.venueInput}>
        <label htmlFor="eventVenue" className={styles.label}>Event Venue*</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="eventVenue"
            className={styles.input}
            value="Doha Exhibition and Convention Center"
            readOnly
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9c1d2f3460aed33d0b7b8105f54824979d024f177a8a57c35be4c76a814bb0?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.inputIcon} />
        </div>
      </div>

      <div className={styles.locationInput}>
        <label htmlFor="eventLocation" className={styles.label}>Event Location*</label>
        <div className={styles.selectWrapper}>
          <select id="eventLocation" className={styles.select}>
            <option>Qatar</option>
            <option>Saudi Arabia</option>
            <option>Lebanon</option>
            <option>Jordan</option>
            <option>Kuwait</option>
            <option>Egypt</option>
            <option>Syria</option>
            <option>Oman</option>
            <option>United Arab Emirates</option>
            <option>Iraq</option>
            <option>Bahrain</option>
            <option>Yemen</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default EventVenue;