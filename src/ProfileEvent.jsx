// import Events from "./assets/data";
// // import { api } from "./services";

// const ProfileEvent = ({ data, index, trigger }) => {
//     const deleteEvent = (e) => {
//         if (confirm("Confirm Delete? It will cancel your registration. You can not undo it later.")) {
//             api.deleteEventById(data.id).then((result) => {
//                 // update registrations
//                 trigger();
//                 console.log(result);
//             }).catch((error) => {
//                 console.error(error);
//             })
//         }
//         // console.log(data.id);
//     }
//     return (
//         <>
//             <div className="py-2 mb-5">
//                 <h3 className="mb-2 text-center d-flex justify-content-center">
//                     <div className="me-3">Event {index + 1}</div>
//                     <span type="button" onClick={deleteEvent}><i className="bi bi-trash-fill text-danger"></i></span>
//                 </h3>
//                 <table className='table table-striped table-success col-md-8 offset-md-2 col-12 mx-2 text-break rounded rounded-3'>
//                     <tbody className="w-100">
//                         <tr className="w-100">
//                             <th scope='row' className='text-start w-50'>Event Name</th>
//                             <td className='text-start w-50'>{Events[data.eventId - 1].title}</td>
//                         </tr>
//                         <tr>
//                             <th scope='row' className='text-start w-50'>Team Name</th>
//                             <td className='text-start w-50'>{data.teamName}</td>
//                         </tr>
//                         <tr>
//                             <th scope='row' className='text-start w-50'>Total Members</th>
//                             <td className='text-start w-50'>{data.membersCount}</td>
//                         </tr>

//                     </tbody>
//                 </table>
//                 <div className="h3 text-center">Members Details :</div>
//                 <div className="row justify-content-center">
//                     {data.members.map((member, index) => {
//                         return (
//                             <div className="bg-success-subtle rounded-2 shadow col-5 mx-auto my-2 h-auto overflow-x-auto py-4" key={index}>
//                                 <div className="card-body">
//                                     <div className="h4 mb-0">
//                                         <i className="bi bi-person-fill"></i> Member Name:
//                                     </div>
//                                     <div className="p">
//                                         - {member.name}
//                                     </div>
//                                     <div className="h4 mb-0 mt-1">
//                                         <i className="bi bi-person-lines-fill"></i> Roll Number:
//                                     </div>
//                                     <div className="p">
//                                         - {member.rollnum}
//                                     </div>
//                                     {/* <div className="h4 mb-0 mt-1">
//                                         <i className="bi bi-journals"></i> Course & Branch:
//                                     </div>
//                                     <div className="p">
//                                         - {member.branch}
//                                     </div>
//                                     <div className="h4 mb-0 mt-1">
//                                         <i className="bi bi-journal"></i> Semester:
//                                     </div>
//                                     <div className="p">
//                                         - {member.sem}
//                                     </div> */}
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div >
//         </>
//     )
// }
// export default ProfileEvent;

import Events from "./assets/data";
// import { api } from "./services";  // Assuming this is where Firebase code was being used, so you can leave it as is if it's unrelated.

const ProfileEvent = ({ data, index, trigger }) => {
    const deleteEvent = (e) => {
        if (confirm("Confirm Delete? It will cancel your registration. You cannot undo it later.")) {
            // Assuming `api.deleteEventById` is not related to Firebase, you can keep using it if it's using a different API service.
            api.deleteEventById(data.id).then((result) => {
                // update registrations
                trigger();
                console.log(result);
            }).catch((error) => {
                console.error(error);
            })
        }
        // console.log(data.id);
    }

    return (
        <>
            <div className="py-2 mb-5">
                <h3 className="mb-2 text-center d-flex justify-content-center">
                    <div className="me-3">Event {index + 1}</div>
                    <span type="button" onClick={deleteEvent}><i className="bi bi-trash-fill text-danger"></i></span>
                </h3>
                <table className='table table-striped table-success col-md-8 offset-md-2 col-12 mx-2 text-break rounded rounded-3'>
                    <tbody className="w-100">
                        <tr className="w-100">
                            <th scope='row' className='text-start w-50'>Event Name</th>
                            <td className='text-start w-50'>{Events[data.eventId - 1].title}</td>
                        </tr>
                        <tr>
                            <th scope='row' className='text-start w-50'>Team Name</th>
                            <td className='text-start w-50'>{data.teamName}</td>
                        </tr>
                        <tr>
                            <th scope='row' className='text-start w-50'>Total Members</th>
                            <td className='text-start w-50'>{data.membersCount}</td>
                        </tr>

                    </tbody>
                </table>
                <div className="h3 text-center">Members Details :</div>
                <div className="row justify-content-center">
                    {data.members.map((member, index) => {
                        return (
                            <div className="bg-success-subtle rounded-2 shadow col-5 mx-auto my-2 h-auto overflow-x-auto py-4" key={index}>
                                <div className="card-body">
                                    <div className="h4 mb-0">
                                        <i className="bi bi-person-fill"></i> Member Name:
                                    </div>
                                    <div className="p">
                                        - {member.name}
                                    </div>
                                    <div className="h4 mb-0 mt-1">
                                        <i className="bi bi-person-lines-fill"></i> Roll Number:
                                    </div>
                                    <div className="p">
                                        - {member.rollnum}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ProfileEvent;
