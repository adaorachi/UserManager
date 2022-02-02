import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Form } from '../components';
import { PageContainer } from '../shared';
import { fetchUpdatedUser } from '../redux/actions';
import { FIELDLIST } from '../utils/constants';

export default function EditUser() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = location?.state ?? {};

  const handleUserEdit = (values, setIsSubmitting, setIsSubmitted) => {
    const userValues = values;
    dispatch(
      fetchUpdatedUser({
        userValues,
        userId: user?.id,
        setIsSubmitting,
        setIsSubmitted,
      })
    );
  };

  return (
    <PageContainer pageTitle="Edit User">
      <Form
        fieldList={FIELDLIST}
        initialFieldValues={user}
        buttonText="Edit"
        handleSubmit={handleUserEdit}
      />
    </PageContainer>
  );
}
