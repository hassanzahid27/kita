// import React from "react";
// import ForumPage from "./Formpage";
// import QASection from "./Question";
// import UserCard from "./navbar";

// function page() {
//   return (
//     <div>
//       <UserCard />
//       <ForumPage />
//       <QASection />
//     </div>
//   );
// }

// export default page;

import React from "react";
import ForumPage from "./Formpage";
import QASection from "./Question";
import UserCard from "./navbar";

function Page() {
  return (
    <div className="p-4 space-y-6">
      <UserCard />

      {/* Forum + QA Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <ForumPage />
        </div>
        <div className="flex-1">
          <QASection />
        </div>
      </div>
    </div>
  );
}

export default Page;
