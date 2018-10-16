import React, { Component } from 'react';
import { Container, Header, Content, Text, Left, Button, Icon, Title, Body, Right } from 'native-base';

export class Setting extends Component {
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
                        <Title>Setting Screen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>Setting</Text>
                </Content>
            </Container>
        );
    }
}