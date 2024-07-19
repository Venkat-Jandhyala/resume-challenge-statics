import { Link } from 'react-router-dom';
import { Flex } from 'rebass';

import { CVIcon } from '../CVIcon';
import { layoutStyles } from '../../styles';

export const NavBrand = () => {
  return (
    <Flex
      sx={{
        flexGrow: 1,
        alignItems: 'center'
      }}
    >
      <Link to="/">
        <CVIcon
          width={`8rem`}
          fontColor={layoutStyles.brandDefaultFontColor}
          iconColor={layoutStyles.brandLogoIconColor}
        />
      </Link>
    </Flex>
  );
};
