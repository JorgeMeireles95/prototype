import React from "react";
// import ProgressTimeline from "../components/progress/proceeess";
import ProgressHorizontal from "../components/progressHorizontal/progress02";

import ProgressVertical from './../components/progressVertical/progress01';
export default function Dashboard() {
  return (
    <div>

<ProgressVertical />
      <ProgressHorizontal />


      {/* <ProgressTimeline/> */}


    </div>
  );
}