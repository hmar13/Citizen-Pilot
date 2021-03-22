import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { teal100 } from 'react-native-paper/lib/typescript/styles/colors';

interface CurrentPropsalTypes {
  title: string,
  description: string,
  location: string,
  vote: number,
  img: string,
}



 const CurrentProposalCard: React.FC<CurrentPropsalTypes> = ({ title, description, location, vote, img}) => {
   return (
     <Container style={styles.container}>
      <Header />
      <Content>
        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Body>
                <Text>{title}</Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <Text>{ location }</Text>
              </Body>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
            <Left>
              <Text>IMG GOES HERE</Text>
              </Left>
              <Text>
                  {description}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Text> Votes {vote}</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
export default CurrentProposalCard;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor:'#fffaf1'
  },
  card: {
    padding: 0,
    margin:0
  }
})
