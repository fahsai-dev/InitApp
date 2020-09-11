import React, { useContext } from 'react';
import { View, ActivityIndicator, Platform, Dimensions } from 'react-native';
import { observer } from 'mobx-react'
import { LoadingContext } from '../contexts';
import colors from '../helpers/colors';

const LoadingIndicator = observer(() => {
  const loadingContext = useContext(LoadingContext);

  if (Platform.OS === 'ios') {
    return (
      <View style={{
        position: 'absolute',
        zIndex: 100,
        top: 0,
        bottom: 0,
        width: '100%',
        height: 'auto',
        display: loadingContext.loading ? 'flex' : 'none',
        justifyContent: 'center'
      }}
      >
        <ActivityIndicator animating={loadingContext.loading} color={colors.primary} />
      </View>
    );
  }
  if (Platform.OS === 'android') {
    if (!loadingContext.loading) {
      return (
        <View style={{ position: 'absolute', width: 0, height: 0 }} />
      );
    } else {
      return (
        <View style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
        }}>
          <ActivityIndicator
            size="large" color={colors.primary} animating={loadingContext.loading}
          />
        </View >
      );
    }
  }
});

export default LoadingIndicator;
