import styled from "styled-components";
const Container = styled.div`
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Element = styled.div`
  flex: 1 0 21%;
  margin: 15px;
  padding: 10px;
  border: 1px solid #77aaff;
  box-shadow: -1px 1px #77aaff, -2px 2px #77aaff, -3px 3px #77aaff,
    -4px 4px #77aaff, -5px 5px #77aaff;
`;
/** Bundle of components for the layout */
export { Container, Flex, Element };
