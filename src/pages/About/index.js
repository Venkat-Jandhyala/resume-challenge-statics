import { Flex, Text, Box, Image } from "rebass";

import { PageTitle } from "../../components/PageTitle";
import { ContactDetails } from "../../components/ContactDetails";
import PurnaImage from "../../assets/Purna.jpg";

export const About = () => {
  return (
    <Box>
      <PageTitle title="About me" />
      <Flex flexDirection={"row"} sx={{
        gap: `3rem`,
      }}>
        <Image src={PurnaImage} minWidth={`40rem`} sx={{
          display: 'flex'
        }}></Image>
        <Flex flexGrow={1} flexDirection={"column"}>
          <Text>
            Passionate about turning ideas into reality, I am a Software Consultant with a knack for web development in the cloud. With over 10 years of experience in IT, I thrive on building robust web applications and ensuring they perform flawlessly in cloud environments. Whether it&apos;s developing user-friendly interfaces or integrating complex systems, I bring a creative, can-do attitude to everything I do. When I&apos;m not busy coding or troubleshooting, you can find me exploring new technologies or enjoying creative pursuits, always on the lookout for the next challenge to tackle
          </Text>
          <ContactDetails />
        </Flex>
      </Flex>
    </Box>
  );
};
