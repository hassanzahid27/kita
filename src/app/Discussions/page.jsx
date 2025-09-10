// import React from "react";
// import UserCard from "./navb";
// import Step from "./hero";
// import DiscussionBoard from "./b";
// import ActiveCourses from "./Active";
// import AssignmentsCard from "./Assignments";
// import CalendarBar from "./Calednder";

// function page() {
//   return (
//     <div>
//       <UserCard />
//       <Step />
//       <div className=""></div>
//       <ActiveCourses />
//       <AssignmentsCard />
//       <CalendarBar />
//       <DiscussionBoard />
//     </div>
//   );
// }

// export default page;

import React from "react";
import UserCard from "./navb";
import Step from "./hero";
import DiscussionBoard from "./b";
import ActiveCourses from "./Active";
import AssignmentsCard from "./Assignments";
import CalendarBar from "./Calednder";

function Page() {
  return (
    <div className="p-4 space-y-6">
      <UserCard />
      <Step />

      {/* Active Courses + Assignments */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <ActiveCourses />
        </div>
        <div className="flex-1">
          <AssignmentsCard />
        </div>
      </div>

      {/* Calendar + Discussion Board */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <CalendarBar />
        </div>
        <div className="flex-1">
          <DiscussionBoard />
        </div>
      </div>
    </div>
  );
}

export default Page;
