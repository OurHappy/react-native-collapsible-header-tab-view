import React from 'react';
import {View} from 'react-native';
import {TabViewContainer} from './component/TabViewBase';
import {styles} from './styles';
import {useHomeConfig} from './hook';

const ExampleBasic: React.FC<any> = props => {
  const {enableSnap} = useHomeConfig(props);
  return (
    <View style={styles.container}>
      <TabViewContainer enableSnap={enableSnap} />
    </View>
  );
};
export default ExampleBasic;
