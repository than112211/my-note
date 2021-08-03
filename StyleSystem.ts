import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  LayoutProps,
  PositionProps,
  layout,
  position,
} from 'styled-system';

type StyledSystemProps = TypographyProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps;

const styledSystemProps = [typography, space, layout, color, position];

export const CloseIconStyled = styled(CloseIcon)<StyledSystemProps>`
  color: red;
  ${styledSystemProps}
`;
export const ArrowIconStyled = styled(ExpandMoreIcon)<StyledSystemProps>`
  ${styledSystemProps}
`;


// using
<ArrowIconStyled color="red" m={4} p={4} />
// >>> color="red" margin: 4; padding: 4;