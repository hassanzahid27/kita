// import React from "react";
// import UserCard from "../overview/nav";
// import Announcements from "./aasignmnt";
// import Step from "./heroo";
// import AssignmentsPage from "./asign";
// import StudentsList from "./students";
// import DiscussionBoard from "./board";
// import Calendar from "../Discussions/Calednder";
// import Resources from "../overview/Resource";
// import PerformanceCard from "./graph";

// function page() {
//   return (
//     <div>
//       <UserCard />
//       <Step />S
//       <Announcements />
//       <AssignmentsPage />
//       <DiscussionBoard />

//       <StudentsList />
//       <PerformanceCard />
//       <Calendar />
//       <Resources />
//     </div>
//   );
// }

// export default page;

import React from "react";
import UserCard from "../overview/nav";
import Announcements from "./aasignmnt";
import Step from "./heroo";
import AssignmentsPage from "./asign";
import StudentsList from "./students";
import DiscussionBoard from "./board";
import Calendar from "../Discussions/Calednder";
import Resources from "../overview/Resource";
import PerformanceCard from "./graph";
import Calennnnnndar from "./calender";
import Resourcesssss from "./rescources";

function Page() {
  return (
    <div className="space-y-6">
      <UserCard />
      <Step />

      {/* Announcements + Assignments */}
      <div className="flex flex-col md:flex-row gap-6">
        <Announcements className="flex-1" />
        <AssignmentsPage className="flex-1" />
      </div>

      {/* Discussion + Students */}
      <div className="flex flex-col md:flex-row gap-6">
        <DiscussionBoard className="flex-1" />
        <StudentsList className="flex-1" />
      </div>

      {/* Performance Card (full width) */}
      <PerformanceCard />

      {/* Calendar + Resources */}
      <div className="flex flex-col md:flex-row gap-6">
        <Calennnnnndar className="flex-1" />
        <Resourcesssss className="flex-1" />
      </div>
    </div>
  );
}

export default Page;
