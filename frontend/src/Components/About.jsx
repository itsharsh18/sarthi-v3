import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-white py-16">
        
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About SAARTHI</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Saathi, we are passionate about making programming education inclusive, engaging, and easy for everyone. We understand that learning to code can be intimidating, so we've created a platform where students can embark on their coding journey in a friendly and supportive environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our mission is to break down barriers to programming education by providing high-quality resources, interactive tutorials, and personalized support. Whether you're a complete beginner or looking to advance your skills, Saathi is here to guide you every step of the way.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            What sets Saathi apart is our commitment to fostering a sense of community among our learners. Through collaborative projects, forums, and mentorship opportunities, students can connect with like-minded individuals and learn from each other's experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Join us at Saathi and discover the joy of coding in a supportive and encouraging environment. Together, we'll unlock the world of programming and empower you to achieve your goals.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
