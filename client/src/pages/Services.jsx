import React from 'react';
import './About.css'; 

const AboutPage = () => {
  return(
    <div className = "about-container">
      <div className = "about-content">
        <h1 className = "about-heading">SERVICES:</h1>
        <ul>
          <li><strong>1. Machine learning-powered detection:</strong> Our application utilizes state-of-the-art 
                      machine learning algorithms to analyze news articles and identify potential instances of fake 
                      news. By harnessing the power of artificial intelligence, we aim to provide users with fast 
                      and accurate assessments of the credibility of news sources and articles.</li>
          <li><strong>2. User-friendly interface:</strong> We understand the importance of simplicity and usability.
                      Our React-based interface is designed with the user in mind, offering an intuitive experience 
                      that allows individuals of all backgrounds to easily navigate and utilize our fake news 
                      detection capabilities.</li>
          <li><strong>3. Real-time analysis:</strong> With our application, users can receive instant feedback on 
                      the authenticity of news content. Whether browsing articles online or accessing news sources 
                      through our platform, our real-time analysis ensures that users stay informed and vigilant 
                      against the spread of misinformation.</li>
          </ul>
        </div>
    </div>
  );
}

export default AboutPage;
