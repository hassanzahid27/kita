import React from "react";
import UpcomingAssignments from "./components/Assignments";
import DiscussionBoard from "./components/Discussionboard";
import SubmissionStatus from "./components/Submissionstatus";
import CalendarCard from "./components/Calender";
import UserCard from "./Navbar";
import Step from "./components/Hero";

function Dashboard() {
  return (
    <div>
      {" "}
      <UserCard />
      <div className="bg-gray-50">
        <Step />
        <div className="p-6 lg:pl-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 - Wide */}
            <div className="lg:col-span-2 overflow-x-auto">
              <div className="min-w-[650px]">
                <UpcomingAssignments />
              </div>
            </div>

            {/* Card 2 - Small */}
            <div className="lg:col-span-1">
              <DiscussionBoard />
            </div>

            {/* Card 3 - Small */}
            <div className="lg:col-span-1">
              <CalendarCard />
            </div>

            {/* Card 4 - Wide */}
            <div className="lg:col-span-2 overflow-x-auto">
              <div className="min-w-[650px]">
                <SubmissionStatus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
