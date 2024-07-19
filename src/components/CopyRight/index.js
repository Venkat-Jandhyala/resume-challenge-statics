import { Flex } from 'rebass';

export const CopyRight = () => (
  <Flex
    sx={{
      flexGrow: 1,
      flexDirection: 'column',
      alignContent: 'center',
      flexWrap: 'wrap',
      padding: `2rem 0`,
    }}
  >
    {' '}
    Purna&apos;s resume &copy; {new Date().getFullYear()}.
  </Flex>
);
