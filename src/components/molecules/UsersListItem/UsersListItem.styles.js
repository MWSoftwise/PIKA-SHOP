import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

export const NameStyle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontColor};
  margin-bottom: 0;
`;
export const AttendanceStyle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.fontColor};
  margin-top: 0;
`;
export const AverageStyle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  background-color: ${({ theme, value }) => {
    if (value >= 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
  color: ${({ theme }) => theme.colors.white};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ParagraphWrapper = styled.div`
  margin: 25px;
`;
