import { Outlet } from 'react-router-dom';
import { Flex, Text } from 'rebass';

import { Navigation } from '../../components/Navigation';
import { CopyRight } from '../../components/CopyRight';
import { NavBrand } from '../../components/NavBrand';

import { layoutStyles } from '../../styles';
import { usePageVisitsQuery } from '../../hooks/usePageVisitsQuery';
import { useEffect } from 'react';

export const Layout = () => {
  const { data, updateVisitCount } = usePageVisitsQuery();

  useEffect(() => {
    updateVisitCount();
  }, [updateVisitCount]);

  return (
    <>
      <Flex flexDirection={'column'}>
        <Flex
          as="header"
          sx={{
            flexDirection: 'row',
            backgroundColor: layoutStyles.brandDefaultColor,
            alignItems: 'center',
            minHeight: '5rem',
            padding: layoutStyles.pageGutter
          }}
        >
          <NavBrand />
          <Navigation />
        </Flex>
        <Flex
          as="main"
          sx={{
            padding: layoutStyles.pageGutter,
            flexDirection: 'column',
            minHeight: '79vh',
            margin: `2rem 0`,
          }}
        >
          <Outlet />
        </Flex>
        <Flex
          as="footer"
          sx={{
            padding: layoutStyles.pageGutter,
            alignItems: 'center',
            minHeight: '3rem',
            backgroundColor: layoutStyles.brandDefaultColor,
            color: layoutStyles.brandDefaultFontColor
          }}
        >
          <CopyRight />
          { !!data?.visits && <Text as='p'>{`No. page visits - ${data?.visits}`}</Text> }
        </Flex>
      </Flex>
    </>
  );
};
