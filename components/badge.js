import styled from "styled-components";
import PropTypes from "prop-types";

const Badge = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
  background: ${(props) => props.theme.colors[props.colour][200]};
  color: ${(props) => props.theme.colors[props.colour][500]};
  border-radius: 9999px;
  padding: 0 24px;
`;

Badge.propTypes = {
  colour: PropTypes.string,
};

export default Badge
