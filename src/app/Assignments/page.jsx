// import React from "react";
// import Hero from "./Hero";

// import Discussion from "./Discussion";
// import Announcements from "./Anouncement";
// import Assignments from "./Assignmnts";
// import Resources from "./Resources";
// import UserCard from "./Navbar";
// import InstructorList from "../overview/Information";

// const page = () => {
//   return (
//     <div>
//       <UserCard />
//       <Hero />
//       <InstructorList />
//       <Discussion />
//       <Announcements />
//       <Assignments />
//       <Resources />
//     </div>
//   );
// };

// export default page;

import React from "react";
import Hero from "./Hero";
import Discussion from "./Discussion";
import Announcements from "./Anouncement";
import Assignments from "./Assignmnts";
import Resources from "./Resources";
import UserCard from "./Navbar";
import InstructorList from "../overview/Information";

const Page = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Navbar */}
      <UserCard />

      {/* Hero + Instructor */}
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1">
          <Hero />
        </div>
        <div className="flex-1">
          <InstructorList />
        </div>
      </div>

      {/* Discussion + Announcements */}
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1">
          <Discussion />
        </div>
        <div className="flex-1">
          <Announcements />
        </div>
      </div>

      {/* Assignments + Resources */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <Assignments />
        </div>
        <div className="flex-1">
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default Page;
