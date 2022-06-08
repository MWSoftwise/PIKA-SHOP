import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
  name: 'Adam Romański',
  attendance: '50%',
  average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
  name: 'Adam Romański',
  attendance: '50%',
  average: '5.0',
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
  name: 'Adam Romański',
  attendance: '50%',
  average: '2.0',
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
  name: 'Adam Romański',
  attendance: '50%',
  average: null,
  },
};