import styled from 'styled-components';

import {
  background,
  border,
  bottom,
  boxShadow,
  color,
  compose,
  layout,
  left,
  position,
  right,
  space,
  top,
  typography,
} from 'styled-system';

export const composedHelpers = compose(
  background,
  layout,
  border,
  space,
  color,
  typography,
  top,
  bottom,
  left,
  right,
  position,
  boxShadow,
);

// export const Box = styled.div`
//   background-color: white;
//   border-radius: 5px;
//   width: 80%;
//   height: 100px;
//   margin: 20px 0;
// `;

export const Box = styled.div`
  ${composedHelpers}
`;


Box.defaultProps = {};
