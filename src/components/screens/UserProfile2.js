// import { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";

// const EmpListing = () => {
//     const [empdata, empdatachange] = useState(null);
//     const history = useHistory();

//     const LoadDetail = (id) => {
//         history.push("/employee/detail/" + id);
//     }
//     const LoadEdit = (id) => {
//         history.push("/employee/edit/" + id);
//     }
//     const Removefunction = (id) => {
//         if (window.confirm('Do you want to remove?')) {
//             fetch("http://localhost:8000/api/users/" + id, {
//                 method: "DELETE"
//             }).then((res) => {
//                 alert('Removed successfully.')
//                 window.location.reload();
//             }).catch((err) => {
//                 console.log(err.message)
//             })
//         }
//     }




//     useEffect(() => {
//         fetch("http://localhost:8000/api/users").then((res) => {
//             return res.json();
//         }).then((resp) => {
//             empdatachange(resp);
//         }).catch((err) => {
//             console.log(err.message);
//         })
//     }, [])

//     // useEffect(() => {
//     //     fetch("http://localhost:8000/api/products").then((res) => {
//     //         return res.json();
//     //     }).then((resp) => {
//     //         empdatachange(resp);
//     //     }).catch((err) => {
//     //         console.log(err.message);
//     //     })
//     // }, [])
//     return (
//         <div className="container">
//             <div className="card">
//                 <div className="card-title">
//                     <h2>PROFILE PAGE</h2>
//                 </div>
//                 <div className="card-body">
//                     <div className="divbtn">
//                         <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
//                     </div>
//                     <table className="table table-bordered">
//                         <thead className="bg-dark text-white">
//                             <tr>
//                                 <td>ID</td>
//                                 <td>Date</td>
//                                 <td>Name</td>
//                                 <td>Email</td>
//                                 <td>Delivered</td>
//                                 <td>Action</td>
                                
//                             </tr>
//                         </thead>
//                         <tbody>

//                             {empdata &&
//                                 empdata.map(item => (
//                                     <tr key={item.id}>
//                                         <td>{item.id}</td>
//                                         <td>{item.date_joined}</td>
//                                         <td>{item.name}</td>
//                                         <td>{item.email}</td>
//                                         <td>{item.phone}</td>
//                                         <td>
//                                             {/* <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a> */}
//                                             {/* <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a> */}
//                                             <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
//                                         </td>
//                                     </tr>
//                                 ))
//                             }

//                         </tbody>

//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EmpListing;