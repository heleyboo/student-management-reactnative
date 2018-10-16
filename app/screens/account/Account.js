import React, { Component } from 'react';
import { Container, Header, Content, Text, Left, Button, Body, Title, Icon, Right } from 'native-base';

export class Account extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Account Screen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>Account screen</Text>
                </Content>
            </Container>
        );
    }
}
