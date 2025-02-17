import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHourglassHalf, FaSearch, FaEye, FaCogs } from "react-icons/fa";

const TimelineComponent = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-10 pt-24">
      
      {/* Custom CSS to shorten the timeline length */}
      <style>
        {`
          .vertical-timeline::before {
            height: 80% !important; /* Adjust this percentage to modify the line length */
          }
        `}
      </style>

      {/* Timeline */}
      <VerticalTimeline lineColor="#00AEEF">
        {/* January 2025 */}
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          iconStyle={{ background: "#00AEEF", color: "#000" }}
          icon={<FaHourglassHalf />}
          style={{ marginTop: "80px" }} // Increased margin to lower it
        >
          <h3 className="text-lg font-semibold">January 2025</h3>
        </VerticalTimelineElement>

        {/* Mr. Bharathkumar Ramachandiran */}
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          iconStyle={{ background: "#00AEEF", color: "#000" }}
          icon={<FaSearch />}
        >
          <h3 className="text-lg font-semibold">Mr. Bharathkumar Ramachandandiran</h3>
        </VerticalTimelineElement>

        {/* Engineering Products */}
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          iconStyle={{ background: "#00AEEF", color: "#000" }}
          icon={<FaEye />}
        >
          <h3 className="text-lg font-semibold">
            Engineering products with advanced technologies for an innovative future
          </h3>
        </VerticalTimelineElement>

        {/* Medical Devices */}
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          iconStyle={{ background: "#00AEEF", color: "#000" }}
          icon={<FaCogs />}
        >
          <h3 className="text-lg font-semibold">
            Engineering excellence in medical devices and tech for an evolving global market.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimelineComponent;
