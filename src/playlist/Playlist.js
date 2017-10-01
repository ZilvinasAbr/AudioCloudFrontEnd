import React from 'react';
import _times from 'lodash/times';
import {
  Button,
  Container,
  Grid,
  Icon,
  Image,
  Input,
  Item,
  Menu,
  Progress,
  Segment
} from 'semantic-ui-react'

const Playlist = () => (
  <div>
    <Menu>
      <Container>
        <Menu.Item>
          <Button>Home</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Genres</Button>
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search...'/>
        </Menu.Item>
        <Menu.Item>
          <Button>User Name</Button>
        </Menu.Item>
      </Container>
    </Menu>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={4}>
          <Segment>
            <Segment textAlign='center'>
              <h3>Playlist Name</h3>
            </Segment>
            <Segment>
              <Item.Group divided>
                {_times(5, i => (
                  <Item key={i}>
                    <Item.Image size='tiny' src='/image.png' />
                    <Item.Content>
                      <Item.Header>Song Artist - Song Title (Artist Remix)</Item.Header>
                      <Item.Description>
                        Uploader Name
                      </Item.Description>
                    </Item.Content>
                  </Item>
                ))}
              </Item.Group>
            </Segment>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6} textAlign='center'>
          <Segment>
            <Image src='/image.png' size='large' centered/>
          </Segment>
          <Segment.Group>
            <Segment>
              <h2>Song Artist - Song Title (Artist Remix)</h2>
            </Segment>
            <Segment.Group horizontal>
              <Segment>1,000,000 Plays</Segment>
              <Segment>5,000 Likes</Segment>
            </Segment.Group>
            <Segment>
              <Progress percent={10} size='tiny'/>
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
            <h3>26th May, 2016</h3>
            Song Description.
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Playlist;
