"use client";
import React, { useState } from "react";
import EventForm from "@/components/shared/EventForm";

import { useAuth, useUser } from "@clerk/nextjs";

const CreateEvent = () => {
  // // const { sessionClaims } = auth();
  // const [userId, setUserId] = useState("");

  // const fetchUserId = async () => {
  //   try {
  //     const id = await userID();
  //     setUserId(id);
  //   } catch (error) {
  //     console.error("Error fetching user ID:", error);
  //   }
  // };

  // fetchUserId();
  // console.log("userid : ", userId);
  const { user } = useUser();
  const id = user?.publicMetadata.userId as string;
  console.log("userid (create event): ", id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={id} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;

// import EventForm from "@/components/shared/EventForm";
// import { userID } from "@/lib/utils";
// import { auth } from "@clerk/nextjs";
// import { currentUser } from "@clerk/nextjs/server";

// const CreateEvent = () => {
//   const { sessionClaims } = auth();

//   // const userId = sessionClaims?.userId as string;
//   const currentuser = currentUser();
//   const userId = userID();
//   console.log(userId);
//   return (
//     <>
//       <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
//         <h3 className="wrapper h3-bold text-center sm:text-left">
//           Create Event
//         </h3>
//       </section>

//       <div className="wrapper my-8">
//         <EventForm userId={userId} type="Create" />
//       </div>
//     </>
//   );
// };

// export default CreateEvent;
