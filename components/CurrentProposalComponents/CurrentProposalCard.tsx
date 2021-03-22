import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

interface CurrentPropsalTypes {
  title: string,
  description: string,
  location: string,
  vote: number,
  img: string,
}



 const CurrentProposalCard: React.FC<CurrentPropsalTypes> = ({ title, description, location, vote, img}) => {
  return (
    <Container>
      <Header />
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{title}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={img} style={{ height: 200, width: 200, flex: 1 }} />
              <Text>
                  {description}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Text>{vote}</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
export default CurrentProposalCard;
