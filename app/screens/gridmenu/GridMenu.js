import React, { Component } from 'react';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import {
    StyleSheet
} from 'react-native';

import { Container, Header, Content, Text, Body, Grid, Row, Col, Icon, Left, Right, Button, Title } from 'native-base';

export class GridMenu extends Component {

    render = () => (
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
                    <Title>HomeScreen</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Grid>
                    <Row style={styles.rowItem}>
                        <Col style={styles.colItem}>
                            <FIcon name="list-alt" size={30} color='orange' />
                            <Text style={styles.menuText}>Danh sách HS</Text>
                        </Col>
                        <Col style={styles.colItem}>
                            <FIcon name="plus" size={30} color='#318e20' />
                            <Text style={styles.menuText}>Thêm mới HS</Text>
                        </Col>
                        <Col style={styles.colItem}>
                            <FIcon name="calendar" size={30} color='#cc502e' />
                            <Text style={styles.menuText}>Thời khoá biểu</Text>
                        </Col>
                    </Row>
                    <Row style={styles.rowItem}>
                        <Col style={styles.colItem}>
                            <FIcon name="star" size={30} color='orange' />
                            <Text style={styles.menuText}>Hạnh kiểm</Text>
                        </Col>
                        <Col style={styles.colItem}>
                            <FIcon name="pen-nib" size={30} color='red' />
                            <Text style={styles.menuText}>Bảng điểm</Text>
                        </Col>
                        <Col style={styles.colItem}>
                            <FIcon name="calendar-alt" size={30} color='green' />
                            <Text style={styles.menuText}>Khác</Text>
                        </Col>
                    </Row>
                    <Row style={styles.rowItem}>
                        <Col style={styles.colItem}>
                            <FIcon name="comments" size={30} color='#cc1a3b' />
                            <Text style={styles.menuText}>Chat</Text>
                        </Col>
                        <Col style={styles.colItem}>
                            <FIcon name="calendar-alt" size={30} color='#13b0bf' />
                            <Text style={styles.menuText}>Sự kiện</Text>
                        </Col>
                        <Col style={styles.colItem}>
                            <FIcon name="home" size={30} color='orange' />
                            <Text style={styles.menuText}>Abc</Text>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    rowItem: {
        height: 100,
    },
    colItem: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: '#c0c0c0',
    },
    menuText: {
        marginTop: 20,
    }
});
