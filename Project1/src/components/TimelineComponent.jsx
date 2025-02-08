import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaClock, FaSearch, FaEye, FaCogs, FaLock, FaTimes, FaTimesCircle, FaRegTimesCircle, FaUserTimes, FaBusinessTime, FaCalendarTimes, FaStopwatch, FaHourglassHalf } from "react-icons/fa";
import { FaKitMedical, FaTimeline } from "react-icons/fa6";

const TimelineComponent = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-10"></h1>

      {/* Timeline */}
      <VerticalTimeline lineColor="#00AEEF">
        {/* January 2025 */}
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          iconStyle={{ background: "#00AEEF", color: "#000" }} // Change the color to black
          icon={<FaHourglassHalf/> }
        >
          <h3 className="text-lg font-semibold">January 2025</h3>
        </VerticalTimelineElement>

        {/* Mr. Bharathkumar Ramachandiran */}
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          iconStyle={{ background: "#00AEEF", color: "#000" }} // Change the color to black
          icon={<FaSearch />}
        >
          <h3 className="text-lg font-semibold">Mr. Bharathkumar Ramachandandiran</h3>
        </VerticalTimelineElement>

        {/* Engineering Products */}
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          iconStyle={{ background: "#00AEEF", color: "#000" }} // Change the color to black
          icon={<FaEye />}
        >
          <h3 className="text-lg font-semibold">
            Engineering products with advanced technologies for an innovative future
          </h3>
        </VerticalTimelineElement>

        {/* Medical Devices */}
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          iconStyle={{ background: "#00AEEF", color: "#000" }} // Change the color to black
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



