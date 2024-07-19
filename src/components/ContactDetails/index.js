import { Flex, Link } from "rebass";
import { FaLinkedin, FaEnvelopeOpen } from "react-icons/fa6";
import PropTypes from "prop-types";

const ContactItem = ({ label, value }) => (
  <Flex as="li" sx={{
    gap: `2rem`,
  }}>
    <Flex as={"span"} width={`8.5rem`} fontWeight={600}>{`${label}:`}</Flex> 
    <Flex flexGrow={2} as={"span"} alignItems={"center"}>{value}</Flex>
  </Flex>
);

ContactItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
}

export const ContactDetails = () => {
  return (
    <Flex as="ul" flexDirection={"column"} alignContent={"flex-start"} p="0" mt={`2rem`}>
      <ContactItem label="Name" value="Purna Venkateshwarlu Jandhyala"/>
      <ContactItem label="Location" value="Haywards Heath, United Kingdom"/>
      <ContactItem label="Email" value={
        <Link href="mailto:jandhyalapurna@gmail.com" sx={{ textDecoration: 'none' }}>
          <FaEnvelopeOpen /> jandhyalapurna@gmail.com
        </Link>
      }/>
      <ContactItem label="LinkedIn" value={
        <Link rel="noreferrer" href="https://www.linkedin.com/in/venkat-jandhyala-835aa259/" target="_blank"> <FaLinkedin /> </Link>
      }/>
    </Flex>
  )
};
