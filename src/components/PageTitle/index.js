import { Text } from "rebass";
import propTypes from "prop-types";

export const PageTitle = ({ title }) => (
  <Text as={`h1`} fontSize={`2.6rem`}>{title}</Text>
);

PageTitle.propTypes = {
  title: propTypes.string,
};