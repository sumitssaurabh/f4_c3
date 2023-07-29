import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserDetails } from '../redux/actions'; // Update the path to actions.js


const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user details from the API
    fetch(`https://dummyjson.com/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        // Save user details to Redux store for the profile page
        dispatch(saveUserDetails(data));
      });
  }, [dispatch, user.id]);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user information */}
    </div>
  );
};

export default Profile;