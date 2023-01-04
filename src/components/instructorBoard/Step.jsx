import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useStep } from 'react-hooks-helper';
import InstructorBoard from './InstructorBoard';
import InstructorBoardThree from './InstructorBoardThree';
import InstructorBoardTwo from './InstructorBoardTwo';
import { GlobalState } from './../../GlobalState';
import { toast } from 'react-hot-toast';
import { isEmpty } from './../../utils/Validation';
const endpoint = process.env.REACT_APP_API;

const steps = [{ id: 'stepone' }, { id: 'steptwo' }, { id: 'stepthree' }];

// THE INITIAL STATE
const initialState = {
  audience: '',
  typeOfTeaching: '',
  videoPro: '',
};

export const Step = () => {
  const [data, setData] = useState(initialState);
  const state = useContext(GlobalState);
  const user = state.userApi.user[0];
  const [callback, setCallback] = state.userApi.callback;

  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const { audience, typeOfTeaching, videoPro } = data;
  const token = localStorage.getItem('token');

  // The handlechange section
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // The handleUpdate section
  const handleUpdate = (e) => {
    e.preventDefault();

    // validating the user input
    if (isEmpty(audience) || isEmpty(typeOfTeaching) || isEmpty(videoPro))
      return setData({ ...data }, toast.error('Input cannot be empty'));

    try {
      axios.patch(
        endpoint + '/user/authorize',
        {
          audience: audience ? audience : user.audience,
          videoPro: videoPro ? videoPro : user.videoPro,
          typeOfTeaching: typeOfTeaching ? typeOfTeaching : user.typeOfTeaching,
        },
        {
          headers: { Authorization: token },
        }
      );
      setData(
        { ...data },
        toast.success('You can start creating courses for review')
      );
      setCallback(!callback);
      setTimeout(() => {
        window.location.href = '/instructor/success_board';
      }, 3500);
    } catch (err) {
      console.log(err);
    }
  };

  const props = { navigation };

  switch (step.id) {
    case 'stepone':
      return (
        <InstructorBoard
          {...props}
          handleChange={handleChange}
          typeOfTeaching={typeOfTeaching}
        />
      );

    case 'steptwo':
      return (
        <InstructorBoardTwo
          {...props}
          handleChange={handleChange}
          videoPro={videoPro}
        />
      );

    case 'stepthree':
      return (
        <InstructorBoardThree
          {...props}
          handleChange={handleChange}
          handleUpdate={handleUpdate}
          audience={audience}
        />
      );

    default:
      return step;
  }
};
