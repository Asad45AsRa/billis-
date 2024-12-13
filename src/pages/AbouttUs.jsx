import React, { useState, useEffect } from 'react'
import AboutUs from '../components/AboutUs'

const AbouttUs = () => {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/AbouttUs');
        if (!response.ok) {
          throw new Error('Failed to fetch About Us data');
        }
        const data = await response.json();
        setAboutUsData(data.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching About Us data:', err);
      }
    };

    fetchAboutUsData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {aboutUsData && (
        <AboutUs 
          title={aboutUsData.title} 
          content={aboutUsData.content} 
        />
      )}
    </div>
  );
}

export default AbouttUs;