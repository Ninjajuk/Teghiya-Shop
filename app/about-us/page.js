
import React from 'react';

const Card = ({ title, content,listItems,bgcolor }) => (
  <div className={` ${bgcolor} p-6 rounded-lg shadow-md mb-6`}>
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h2>
    {listItems ? (
      <ul className="list-disc ml-8 text-gray-700">
        {listItems.map((item, index) => (
          <li key={index} >{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-700">{content}</p>
    )}
  </div>
);

const AboutUs = () => {
  return (
    <section className=''>
          <div className="container mx-auto  p-8  rounded-md">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="Our Story"
          content="Founded in 2024, Yingkiong Store was born out of a love for our product and a commitment to what makes our brand unique. What started as a small idea has now grown into a  thriving community of our customer base who share our passion."
          bgcolor='bg-yellow-400'
        />

        <Card
          title="Our Mission"
          bgcolor='bg-green-400'
          content="At Yingkiong Store, our mission is to our product better. We believe in  core beliefs, and every product we offer is a reflection of that commitment. We strive to excel in every aspect of our business."
        />
      </div>
    </div>
    </section>

  );
};

export default AboutUs;
