import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
// prettier-ignore
import { NameStyle, AttendanceStyle, AverageStyle, ParagraphWrapper } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' }, ...props }) => {
  return (
    <Wrapper>
      <AverageStyle value={average}>{average}</AverageStyle>
      <ParagraphWrapper>
        <NameStyle>{name}</NameStyle>
        <AttendanceStyle>attendance:{attendance}</AttendanceStyle>
      </ParagraphWrapper>
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
