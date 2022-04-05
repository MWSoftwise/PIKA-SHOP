import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
// prettier-ignore
import { NameStyle, AttendanceStyle, AverageStyle, ParagraphWrapper } from './UsersListItem.styles';
import { UsersContext } from 'Providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <AverageStyle value={average}>{average}</AverageStyle>
      <ParagraphWrapper>
        <NameStyle>{name}</NameStyle>
        <AttendanceStyle>attendance:{attendance}</AttendanceStyle>
      </ParagraphWrapper>
      <DeleteButton onClick={() => deleteUser(name)} />
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
