import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  padding: ${(props) => props.padding};
  border-radius: 4rem;
  font-weight: var(--font-weight-light);
  cursor: pointer;
  color: ${(props) =>
    props.primary ? '#FFFFFF' : props.secondary ? '#000000' : '#333333'};
  background-color: ${(props) =>
    props.primary ? 'black' : props.secondary ? '#FFFFFF' : '#DDDDDD'};
  border: ${(props) =>
    props.primary ? 'none' : props.secondary ? '2px solid black' : 'none'};
`;
Button.defaultProps = {
    padding: '0.7rem 3rem'
  };

export default Button;
