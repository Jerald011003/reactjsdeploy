import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUserProfile, getUserDetails } from '../../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

const UpdateUserProfileScreen = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userProfileUpdate = useSelector((state) => state.userProfileUpdate);

  const { loading } = userProfileUpdate || {};
  const { error } = userProfileUpdate || {};
  const { success } = userProfileUpdate || {};
  
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!userInfo.username) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
      } else {
        setUsername(userInfo.username);
        setEmail(userInfo.email);
      }
    }
  }, [dispatch, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInfo); // check value of userInfo
    console.log(username, email, password); // check values of username, email, and password
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(updateUserProfile({ id: userInfo._id, username, email, password }));
    }
  };
  
  return (
    <div>
      <h1>My Profile</h1>
      <table className='table'>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{userInfo._id}</td>
          </tr>
          <tr>
            <td>Firstname:</td>
            <td>{userInfo.name} {userInfo.lastName}</td>
          </tr>
          <tr>
            <td>Lastname:</td>
            <td>{userInfo.lastName}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Date Joined:</td>
          <td>{new Date(userInfo.date_joined).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
          </tr>
        </tbody>
      </table>
      <h1>Update Profile</h1>
      {message && <div className='alert alert-danger'>{message}</div>}
      {error && <div className='alert alert-danger'>{error}</div>}
      {success && <div className='alert alert-success'>Profile Updated</div>}
      {loading && <div className='alert alert-info'>Updating...</div>}
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter New Username'
            id='username'
            // value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter New Email'
            id='email'
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter New Password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Confirm New Password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <h1>
          
        </h1>
        <button type='submit' className='btn btn-primary'>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUserProfileScreen;