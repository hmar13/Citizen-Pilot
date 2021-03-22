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
              <Text>IMG GOES HERE</Text>
              </Body>
            </Left>
          </CardItem>
           <CardItem style={styles.lowerCardColor} >
            <Body>
            <Body>
             <Left>
                <Text>{title}</Text>
              </Left>
              <Right>
                <Text>{ location }</Text>
              </Right>
            </Body>
            <Body>
              <Text>{description}</Text>
            </Body>
            </Body>
          </CardItem>
          <CardItem style={styles.lowerCardColor}>
            <Left>
              <Button transparent >
                <Text> Supporters {vote}</Text>
              </Button>
             </Left>
             <Right>
                <Text><Icon name="thumbs-up"  color="#FFEB3B"/></Text>
             </Right>
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
  },
  lowerCardColor: {
    backgroundColor:'#EF476F'
  }
})
