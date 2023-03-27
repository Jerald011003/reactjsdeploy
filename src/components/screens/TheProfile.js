// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { update_profile } from '../../actions/userActions';

// const Dashboard = ({
//     update_profile,
//     username_global,
//     email_global,
//     loading,
//     error,
//     success
// }) => {
//     const [formData, setFormData] = useState({
//         username: username_global || '',
//         email: email_global || ''
//     });

//     useEffect(() => {
//         setFormData({
//             username: username_global,
//             email: email_global
//         });
//     }, [username_global]);

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = e => {
//         e.preventDefault();
//         update_profile(formData.username, formData.email);
//     };

//     return (
//         <div className='container'>
        
//             <p className='mt-3 mb-3'>Update your user profile below:</p>
//             <form onSubmit={onSubmit}>
//                 <div className='form-group'>
//                     <label className='form-label' htmlFor='username'>Username</label>
//                     <input
//                         className='form-control'
//                         type='text'
//                         name='username'
//                         placeholder={`Current username: ${username_global}`}
//                         onChange={onChange}
//                         value={formData.username || ''}
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label className='form-label mt-3' htmlFor='email'>Email</label>
//                     <input
//                         className='form-control'
//                         type='email'
//                         name='email'
//                         placeholder={`Current email: ${email_global}`}
//                         onChange={onChange}
//                         value={formData.email || ''}
//                     />
//                 </div>
//                 <button className='btn btn-primary mt-3' type='submit'>Update Profile</button>
//             </form>
//         </div>
//     )
// };

// const mapStateToProps = state => ({
//     username_global: state.profile ? state.profile.username : '',
//     email_global: state.profile ? state.profile.email : ''
// });

// export default connect(mapStateToProps, { 
//     update_profile
//  })(Dashboard);
