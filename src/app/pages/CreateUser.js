import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Form } from '../components';
import { PageContainer } from '../shared';
import { fetchAddedUser } from '../redux/actions';
import { FIELDLIST } from '../utils/constants';

export default function CreateUser() {
  const dispatch = useDispatch();

  const handleUserAdd = (values, setIsSubmitting, setIsSubmitted) => {
    const userValues = values;
    dispatch(
      fetchAddedUser({
        userValues,
        setIsSubmitting,
        setIsSubmitted,
      })
    );
  };

  const initialFieldValues = {
    name: '',
    email: '',
    username: '',
    city: '',
  };

  return (
    <PageContainer pageTitle="Add User">
      <Form
        fieldList={FIELDLIST}
        initialFieldValues={initialFieldValues}
        buttonText="Add"
        handleSubmit={handleUserAdd}
      />
    </PageContainer>
  );
}
