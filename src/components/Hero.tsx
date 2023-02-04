import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-slate-100 rounded-b-2xl max-w-6xl mx-auto">
        <div className="p-8 hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://us.123rf.com/450wm/vectorlab/vectorlab1901/vectorlab190100067/vectorlab190100067.jpg?ver=6"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Flash Sell!</h1>
            <p className="py-6">
            We are offering a limited-time special on our product! For a limited time only,
            you can get our product at a 20% discount. Hurry and grab this offer
            while supplies last!
            </p>
            <button className="btn btn-primary">Start Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
