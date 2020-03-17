import styled from "styled-components";
const CustomButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #00179b;
  border: 2px solid #00179b;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #00179b;
    color: white;
  }
`;

/** Custom button styled component */
export default CustomButton;
