import { Link } from 'react-router-dom';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { layoutStyles } from '../../styles';

export const BaseStyledLink = styled(Link)`
  padding: 0.6rem 0.5rem;
  text-decoration: none;
  color: ${layoutStyles.brandDefaultFontColor};
  display: inline-block;
  text-align: ${(props) => props.textalign ?? `center`};

  &::after {
    content: ' ';
    display: block;
    height: 1px;
    width: 100%;
  }
`;

const StyledLink = styled(BaseStyledLink)`
  &:hover,
  &:focus {
    font-weight: 600;

    &::after {
     border-bottom: 5px solid ${layoutStyles.brandMenuItemHoverColor};
    }
  }
`;

export const Navigation = () => {
  return (
    <Flex as={'nav'}>
      <Flex
        as="ul"
        flexDirection={'row'}
        sx={{
          gap: '1rem',
          listStyle: 'none',
          alignItems: 'center'
        }}
      >
        <li>
          <StyledLink to={`/`}> About </StyledLink>
        </li>
        <li>
          <StyledLink to={`/career`}> Career </StyledLink>
        </li>
        <li>
          <StyledLink to={`/resume`}> Resume </StyledLink>
        </li>
      </Flex>
    </Flex>
  );
};
