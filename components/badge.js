import styled from "styled-components";
import PropTypes from "prop-types";

const getBadgeColours = (colour) => {
  switch (colour) {
    case "green":
      return { background: "#c2f7e1", color: "#006b57" };
    case "red":
      return { background: "#fecaca", color: "#b91c1c" };
    case "grey":
    default:
      return { background: "#e5e5e5", color: "#525252" };
  }
};

const Badge = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
  ${({ colour }) => getBadgeColours(colour)};
  border-radius: 9999px;
  padding: 0 24px;
`;

Badge.propTypes = {
  colour: PropTypes.string,
};

export default Badge
