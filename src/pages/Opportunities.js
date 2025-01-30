import React from "react";
import OpportunityCard from "../components/OpportunityCard";
import { hackathonData, jobData } from "../Data";

const Opportunities = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <h2 className="text-3xl text-center font-bold text-dark mb-6">🌟 Explore Opportunities</h2>

      {/* Job Openings Section */}
      <h3 className="text-3xl font-semibold text-dark mb-4">💼 Job Openings</h3>
      <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-custom scroll-smooth mb-8">
        {jobData.map((job, index) => (
          <OpportunityCard key={index} data={job} type="job" />
        ))}
      </div>

      {/* Hackathons Section */}
      <h3 className="text-3xl font-semibold text-dark mb-4">🚀 Hackathons & Challenges</h3>
      <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-custom scroll-smooth mb-8">
        {hackathonData.map((hackathon, index) => (
          <OpportunityCard key={index} data={hackathon} type="hackathon" />
        ))}
      </div>
    </div>
  );
};

/* Reusable Opportunity Card */


/* Sample Data */


export default Opportunities;
