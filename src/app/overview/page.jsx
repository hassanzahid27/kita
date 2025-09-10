// import React from "react";
// import UserCard from "./nav";
// import Step from "./Hero";
// import InstructorList from "./Information";
// import DiscussionBoard from "./Board";
// import Announcements from "./Aannouncements";
// import Assignments from "./Assign";
// import Resources from "./Resource";

// function navbar() {
//   return (
//     <div>
//       <UserCard />

//       <Step />
//       <InstructorList />
//       <DiscussionBoard />
//       <Announcements />
//       <Assignments />
//       <Resources />
//     </div>
//   );
// }

// export default navbar;

import React from "react";
import UserCard from "./nav";
import Step from "./Hero";
import InstructorList from "./Information";
import DiscussionBoard from "./Board";
import Announcements from "./Aannouncements";
import Assignments from "./Assign";
import Resources from "./Resource";

function Navbar() {
  return (
    <div className="space-y-6">
      {/* Top User Info */}
      <UserCard />

      {/* Step + InstructorList */}
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1">
          <Step />
        </div>
        <div className="flex-1">
          <InstructorList />
        </div>
      </div>

      {/* DiscussionBoard + Announcements */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <DiscussionBoard />
        </div>
        <div className="flex-1">
          <Announcements />
        </div>
      </div>

      {/* Assignments + Resources */}
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1">
          <Assignments />
        </div>
        <div className="flex-1">
          <Resources />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
