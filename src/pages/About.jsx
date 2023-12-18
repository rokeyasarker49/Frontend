import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Ecommerce App, your ultimate destination for finding incredible second-hand treasures! At Ecommerce App, we believe in the power of giving pre-loved items a second chance to shine.

          Our platform was born out of a passion for sustainability and a commitment to reducing waste by facilitating the exchange of high-quality, gently-used goods. Whether you're a seller looking to declutter or a buyer searching for unique finds at fantastic prices, Ecommerce App is the place for you.

          What sets us apart is our dedication to creating a seamless and trustworthy marketplace experience. We have crafted a user-friendly platform that connects buyers and sellers, ensuring a hassle-free process for all. Every item listed on our site is carefully vetted to guarantee authenticity and quality, giving you peace of mind with every purchase.

          Join our vibrant community of sellers and buyers who share a love for sustainability, affordability, and the joy of discovering hidden gems. At Ecommerce App, we're not just a marketplace; we are a community built on the idea that every item has a story and deserves a new chapter.

          Explore, sell, and shop with confidence at Ecommerce App, where the thrill of finding something special is just a click away.

          Welcome to the revolution of second-hand shopping. Welcome to Ecommerce App.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;