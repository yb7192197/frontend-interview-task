import styled from "styled-components";
import PropTypes from "prop-types";

const Badge = styled.div`
  padding: 0 ${(props) => props.theme.space.l};
  background: ${(props) => props.theme.colors[props.colour][200]};
  color: ${(props) => props.theme.colors[props.colour][500]};
  font-size: ${(props) => props.theme.typography.m.fontSize};
  border-radius: 9999px;
  font-weight: bold;
`;

Badge.propTypes = {
  colour: PropTypes.oneOf(['green', 'red', 'grey']),
};

export default Badge
