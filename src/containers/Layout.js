import React from 'react';
import { Container, Grid, Image, Menu, Segment, Card } from 'semantic-ui-react';
import _ from 'lodash';
import m from 'moment';

import logo from '../assets/images/logo-256.png';
import { AuthConsumer } from '../contexts/AuthContext';

const Layout = ({logout, currentUser}) => {
  const colNumber = 3;
  const moduleChunks = _.chunk(currentUser.modules, colNumber);

  return (
    <div>
      <Menu fixed='top' className="custom-menu" inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='tiny'
              src={logo}
              style={{ marginRight: '1.5em' }}
            />
          </Menu.Item>
          <Menu.Item as='a'>Inicio</Menu.Item>
          <Menu.Item position="right">
            <span style={{fontWeight: 'bold'}}>Usuario:&nbsp;</span>{currentUser.user}
          </Menu.Item>
          <Menu.Item>
            <span style={{fontWeight: 'bold'}}>Fecha:&nbsp;</span>{m().format('DD-MM-YYYY')}
          </Menu.Item>
          <Menu.Item as='a' onClick={logout}>Cerrar Sesión</Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '7em' }}>
        <Grid>
          {moduleChunks.map((moduleChunk, i) => (
            <Grid.Row columns={colNumber} key={i}>
              {moduleChunk.map((module, j) => (
                <Grid.Column key={j}>
                  <Card href={`${module.url}?id=${currentUser.id}&tipo=${currentUser.tipo}&nombre=${currentUser.user}`}>
                    <div className="module-logo-container">
                      <span className={`glyphicon glyphicon-${module.icon}`}/>
                    </div>
                    <Card.Content>
                      <Card.Header>{module.name}</Card.Header>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid.Row>
          ))}
        </Grid>
      </Container>

      <Segment
        inverted
        vertical
        style={{ margin: '3em 0em 0em', padding: '3em 0em' }}
      >
        <Container textAlign='center'>
          <Image
            centered
            size='small'
            src={logo}
          />
        </Container>
      </Segment>
    </div>
  );
};

export default props => (
  <AuthConsumer>
    {({logout, currentUser}) => <Layout {...props} logout={logout} currentUser={currentUser}/>}
  </AuthConsumer>
);