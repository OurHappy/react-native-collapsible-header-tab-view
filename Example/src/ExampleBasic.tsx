import React from 'react';
import {View} from 'react-native';
import {TabViewContainer} from './component/TabViewBase';
import {TabViewType} from './types';
import {styles} from './styles';
import {useHomeConfig} from './hook';

const ExampleBasic: React.FC<any> = props => {
  const {tabviewType, enableSnap} = useHomeConfig(props);
  return (
    <View style={styles.container}>
      <TabViewContainer enableSnap={enableSnap} />
    </View>
  );
};
export default ExampleBasic;
