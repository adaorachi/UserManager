import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';

import { PopupMessage, Button, Table } from '../components';
import { PageContainer } from '../shared';
import { deleteAUser, fetchSortedUser } from '../redux/actions';

const tableHeader = [
  'ID',
  'Name',
  'Username',
  'Email',
  'City',
  'Edit',
  'Delete',
];

const EditAction = ({ user }) => (
  <Button
    component={Link}
    to={'/edit-user'}
    state={{ user }}
    label="Edit"
    color="warning"
  />
);

const DeleteAction = ({ handleClickOpen }) => (
  <Button color="error" handleClick={handleClickOpen} label="Delete" />
);

export default function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [sortBy, setSortBy] = useState('asc');

  const [openPopup, setOpenPopUp] = useState(false);

  const dispatch = useDispatch();
  const { getUsers } = useSelector((state) => state?.user);

  useEffect(() => {
    if (userId) {
      setOpenPopUp(true);
    }
  }, [userId]);

  useEffect(() => {
    if (!openPopup) {
      setUserId(null);
      setIsDeleted(false);
    }
  }, [openPopup]);

  useEffect(() => {
    if (isDeleted) setOpenPopUp(false);
  }, [isDeleted]);

  const handleDeleteUser = (id) => {
    dispatch(deleteAUser({ id, setIsDeleting, setIsDeleted }));
  };

  const handleSortUser = () => {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
    dispatch(fetchSortedUser({ sortBy }));
  };

  const handleClickOpen = (id) => {
    setUserId(id);
  };

  const tableRowData = getUsers?.map((user, index) => {
    const { id, name, username, email, city } = user;
    const listId = index + 1;
    return [
      id,
      name,
      username || '--',
      email,
      city || '--',
      <EditAction user={user} />,
      <DeleteAction handleClickOpen={() => handleClickOpen(id)} />,
    ];
  });

  return (
    <>
      <PageContainer pageTitle="Dashboard">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          border="1px solid #eee"
        >
          <Box display="flex" alignItems="center">
            <Typography variant="body1">UserList</Typography>
            <Box ml={2}>
              <Button
                label="Sort"
                endIcon={sortBy === 'asc' ? <ArrowDropDown /> : <ArrowDropUp />}
                handleClick={handleSortUser}
              />
            </Box>
          </Box>
          <Button component={Link} to={'/create-user'} label="Add user" />
        </Box>

        <Table tableHeader={tableHeader} tableRowData={tableRowData} />
      </PageContainer>
      {userId && openPopup && (
        <PopupMessage
          buttonLabel="Yes"
          message="Are you sure you want to delete this user?"
          handleClick={() => handleDeleteUser(userId)}
          isSubmitting={isDeleting}
          open={openPopup}
          setOpen={setOpenPopUp}
        />
      )}
    </>
  );
}
