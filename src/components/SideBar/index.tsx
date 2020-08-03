import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Bucar" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Michel Stefani"
                nickname="@michellstefanii"
              />,
              <FollowSuggestion
                name="Michel Stefani"
                nickname="@michellstefanii"
              />,
              <FollowSuggestion
                name="Michel Stefani"
                nickname="@michellstefanii"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
