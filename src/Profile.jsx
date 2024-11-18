// // import { onAuthStateChanged } from 'firebase/auth';
// import React, { useEffect, useState } from 'react';
// // import { auth } from './services/firebase';
// // import { api, authServices } from './services';
// import { Link, Navigate } from 'react-router-dom';
// import ProfileEvent from './ProfileEvent';
// import Events from "./assets/data";

// const Profile = () => {
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(auth.currentUser);
//   const [registrations, setRegistrations] = useState([]);
//   const [filteredregistrations, setFilteredRegistrations] = useState({
//     centralized: [],
//     departmental: [],
//     societal: []
//   });

//   onAuthStateChanged(auth, (userData) => {
//     if (userData) {
//       setUser(userData);
//     } else {
//       setUser(null);
//     }
//   });

//   const fetchEvents = (e) => {
//     e?.preventDefault();
//     setLoading(true);
//     const userRollnumber = user?.photoURL?.split("?")[1];
//     api.getEventsRegisteredByYou(userRollnumber).then((response) => {
//       const arr = [];
//       response.docs.map((doc) => {
//         // console.log(doc.data());
//         arr.push({...doc.data(), id: doc.id});
//       });
//       setRegistrations(arr);
//       setLoading(() => false);
//     }).catch((err) => {
//       console.log(err);
//     });
//   }

//   useEffect(() => {
//     setFilteredRegistrations({
//       centralized: registrations.filter((item => Events[item.eventId - 1].catergory2 === "centralized")),
//       departmental: registrations.filter((item => Events[item.eventId - 1].catergory2 === "department")),
//       societal: registrations.filter((item => Events[item.eventId - 1].catergory2 === "society"))
//     })
//   }, [registrations])

//   useEffect(() => {
//     setTimeout(() => {
//       fetchEvents();
//     }, 2000);
//   }, [])

//   const logoutHandler = (e) => {
//     e.preventDefault();
//     authServices.logout().then((res) => {
//       // console.log(res);
//       // user logged out
//     }).catch((Err) => Err);
//   }

//   const userLog = (e) => {
//     e.preventDefault();
//     console.log(user);
//   }

//   const updateProfile = (e) => {
//     e.preventDefault();
//     authServices.profile(user, "Abhinav", 6395074100, "21001001000", "DCRUST", "btech cse", "6").then((res) => {
//       console.log(res);
//     });
//     // console.log(user);
//   }

//   // if (auth.currentUser) {
//   //   // console.log(auth.currentUser);
//   //   return <Navigate to="/signup" />
//   // }
//   return (
//     <div className='mx-4'>
//       {user && (
//         <div className='mx-2'>
//           <h1>Welcome, {user.displayName ? user.displayName : "User"} !</h1>
//           <p>Email: {user.email}</p>
//           <button className='btn btn-primary btn-lg me-4' onClick={userLog}>
//             Log User in console
//           </button>
//           <button className='btn btn-success btn-lg me-4' onClick={updateProfile}>
//             Update Profile
//           </button>
//           <button className='btn btn-danger btn-lg me-4' onClick={logoutHandler}>
//             Logout
//           </button>
//           <button className='btn btn-info btn-lg' onClick={fetchEvents}>
//             Get Events
//           </button>
//           <div className="w-100 row my-5">
//             <table className='table table-striped col-md-8 offset-md-2 col-12 mx-2 table-borderless text-break border border-2 border-primary rounded rounded-3'>
//               <tbody>
//                 <tr>
//                   <th scope='row' className='text-start'>Roll No</th>
//                   <td className='text-start'>{user.photoURL?.split("?")[1]}</td>
//                 </tr>
//                 <tr>
//                   <th scope='row' className='text-start'>Email</th>
//                   <td className='text-start'>{user.email}</td>
//                 </tr>
//                 <tr>
//                   <th scope='row' className='text-start'>Email Verified</th>
//                   <td className='text-start'>{user.emailVerified ? "True" : "False"}</td>
//                 </tr>
//                 <tr>
//                   <th scope='row' className='text-start'>Phone</th>
//                   <td className='text-start'>{user.photoURL?.split("?")[0]}</td>
//                 </tr>
//                 <tr>
//                   <th scope='row' className='text-start'>Organisation</th>
//                   <td className='text-start'>{user.photoURL?.split("?")[2]}</td>
//                 </tr>
//                 <tr>
//                   <th scope='row' className='text-start'>Branch</th>
//                   <td className='text-start'>{user.photoURL?.split("?")[3]}</td>
//                 </tr>
//                 <tr>
//                   <th scope='row' className='text-start'>Semester</th>
//                   <td className='text-start'>{user.photoURL?.split("?")[4]}</td>
//                 </tr>

//               </tbody>
//             </table>
//           </div>
//           {/* Show event data */}
//           {loading ? (
//             <div className="text-center">
//               <div
//                 className="alert alert-warning text-capitalized d-flex justify-content-center"
//                 role="alert"
//               >
//                 <span className="spinner-border my-auto"></span>{' '}
//                 <div className='ms-3 fs-5'>Loading your registrations...</div>
//                 <a className='ms-3' role='button' onClick={fetchEvents}>Click here to retry</a>
//               </div>
//             </div>
//           ) : (
//             <></>
//           )}
//           {registrations.length ?
//             <div>
//               <h2 className='text-center fw-bold text-decoration-underline'>Registered Events:</h2>
//               {
//                 filteredregistrations.centralized.length ?
//                   <div className='w-100'>
//                     <div className='fs-1 text-center fw-bold text-decoration-underline'>Centralized Events</div>
//                     {filteredregistrations.centralized.map((event, index) => (
//                       <ProfileEvent data={event} key={index} index={index} trigger={fetchEvents} />
//                     ))}
//                   </div>
//                   : null
//               }
//               {
//                 filteredregistrations.departmental.length ?
//                   <div className='w-100'>
//                     <div className='fs-1 text-center fw-bold text-decoration-underline'>Deparment Events</div>
//                     {filteredregistrations.departmental.map((event, index) => (
//                       <ProfileEvent data={event} key={index} index={index} />
//                     ))}
//                   </div>
//                   : null
//               }
//               {
//                 filteredregistrations.societal.length ?
//                   <div className='w-100'>
//                     <div className='fs-1 text-center fw-bold text-decoration-underline'>Society Events</div>
//                     {filteredregistrations.societal.map((event, index) => (
//                       <ProfileEvent data={event} key={index} index={index} />
//                     ))}
//                   </div>
//                   : null
//               }
//             </div> :
//             <div className="row justify-content-center align-items-center">
//               <div className='text-center w-100 fw-bold h3'>
//                 Not registered any event yet!
//               </div>
//               <div className="w-100 d-flex">
//                 <Link to="/event" className='btn btn-primary mx-auto btn-lg'>Register now</Link>

//               </div>
//             </div>}
//         </div>
//       )}
//       {/* Login button for unauthenticated users */}
//       {!user && (
//         <Link to="/signup" className='btn btn-primary btn-lg m-3'>
//           Login
//         </Link>
//       )}
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileEvent from './ProfileEvent';
import Events from "./assets/data";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Removed Firebase auth reference
  const [registrations, setRegistrations] = useState([]);
  const [filteredregistrations, setFilteredRegistrations] = useState({
    centralized: [],
    departmental: [],
    societal: []
  });

  // Placeholder for user data fetching or authentication
  useEffect(() => {
    const fetchUser = () => {
      // Fetch user data from an alternative source here if needed
      setUser({ displayName: "User", email: "user@example.com" });
    };

    fetchUser();
  }, []);

  const fetchEvents = (e) => {
    e?.preventDefault();
    setLoading(true);
    const userRollnumber = user?.photoURL?.split("?")[1]; // Adjusted to accommodate non-Firebase implementation
    // Replace with your own API call to fetch events registered by the user
    api.getEventsRegisteredByYou(userRollnumber).then((response) => {
      const arr = [];
      response.docs.map((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setRegistrations(arr);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    setFilteredRegistrations({
      centralized: registrations.filter((item => Events[item.eventId - 1].catergory2 === "centralized")),
      departmental: registrations.filter((item => Events[item.eventId - 1].catergory2 === "department")),
      societal: registrations.filter((item => Events[item.eventId - 1].catergory2 === "society"))
    });
  }, [registrations]);

  useEffect(() => {
    setTimeout(() => {
      fetchEvents();
    }, 2000);
  }, []);

  const logoutHandler = (e) => {
    e.preventDefault();
    // Replace with your logout logic
    console.log("User logged out");
  };

  const userLog = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const updateProfile = (e) => {
    e.preventDefault();
    // Replace with your profile update logic
    console.log("Profile updated");
  };

  return (
    <div className='mx-4'>
      {user && (
        <div className='mx-2'>
          <h1>Welcome, {user.displayName ? user.displayName : "User"}!</h1>
          <p>Email: {user.email}</p>
          <button className='btn btn-primary btn-lg me-4' onClick={userLog}>
            Log User in console
          </button>
          <button className='btn btn-success btn-lg me-4' onClick={updateProfile}>
            Update Profile
          </button>
          <button className='btn btn-danger btn-lg me-4' onClick={logoutHandler}>
            Logout
          </button>
          <button className='btn btn-info btn-lg' onClick={fetchEvents}>
            Get Events
          </button>
          <div className="w-100 row my-5">
            <table className='table table-striped col-md-8 offset-md-2 col-12 mx-2 table-borderless text-break border border-2 border-primary rounded rounded-3'>
              <tbody>
                <tr>
                  <th scope='row' className='text-start'>Roll No</th>
                  <td className='text-start'>{user.photoURL?.split("?")[1]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Email</th>
                  <td className='text-start'>{user.email}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Email Verified</th>
                  <td className='text-start'>True</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Phone</th>
                  <td className='text-start'>{user.photoURL?.split("?")[0]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Organisation</th>
                  <td className='text-start'>{user.photoURL?.split("?")[2]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Branch</th>
                  <td className='text-start'>{user.photoURL?.split("?")[3]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Semester</th>
                  <td className='text-start'>{user.photoURL?.split("?")[4]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {loading ? (
            <div className="text-center">
              <div
                className="alert alert-warning text-capitalized d-flex justify-content-center"
                role="alert"
              >
                <span className="spinner-border my-auto"></span>{' '}
                <div className='ms-3 fs-5'>Loading your registrations...</div>
                <a className='ms-3' role='button' onClick={fetchEvents}>Click here to retry</a>
              </div>
            </div>
          ) : (
            <></>
          )}
          {registrations.length ?
            <div>
              <h2 className='text-center fw-bold text-decoration-underline'>Registered Events:</h2>
              {filteredregistrations.centralized.length ? (
                <div className='w-100'>
                  <div className='fs-1 text-center fw-bold text-decoration-underline'>Centralized Events</div>
                  {filteredregistrations.centralized.map((event, index) => (
                    <ProfileEvent data={event} key={index} index={index} trigger={fetchEvents} />
                  ))}
                </div>
              ) : null}
              {filteredregistrations.departmental.length ? (
                <div className='w-100'>
                  <div className='fs-1 text-center fw-bold text-decoration-underline'>Department Events</div>
                  {filteredregistrations.departmental.map((event, index) => (
                    <ProfileEvent data={event} key={index} index={index} />
                  ))}
                </div>
              ) : null}
              {filteredregistrations.societal.length ? (
                <div className='w-100'>
                  <div className='fs-1 text-center fw-bold text-decoration-underline'>Society Events</div>
                  {filteredregistrations.societal.map((event, index) => (
                    <ProfileEvent data={event} key={index} index={index} />
                  ))}
                </div>
              ) : null}
            </div>
            : (
              <div className="row justify-content-center align-items-center">
                <div className='text-center w-100 fw-bold h3'>
                  Not registered any event yet!
                </div>
                <div className="w-100 d-flex">
                  <Link to="/event" className='btn btn-primary mx-auto btn-lg'>Register now</Link>
                </div>
              </div>
            )}
        </div>
      )}
      {!user && (
        <Link to="/signup" className='btn btn-primary btn-lg m-3'>
          Login
        </Link>
      )}
    </div>
  );
};

export default Profile;
