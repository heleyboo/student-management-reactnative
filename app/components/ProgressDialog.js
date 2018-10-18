import React from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';

const ProgressDialog = ({ visible }) => (
    <Modal onRequestClose={() => null} visible={visible} style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
      <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: '200' }}>Loading</Text>
          <ActivityIndicator size="large"  />
        </View>
      </View>
    </Modal>
  );

export default ProgressDialog;