import React from 'react';
import {View} from 'react-native';
import {TabViewContainer} from './component/TabViewBase';
import {styles} from './styles';
import {useHomeConfig} from './hook';

const ExampleWithTabViewPullRefresh: React.FC<any> = props => {
  const {enableSnap} = useHomeConfig(props);
  return (
    <View style={styles.container}>
      <TabViewContainer tabsRefreshEnabled={true} enableSnap={enableSnap} />
    </View>
  );
};
export default ExampleWithTabViewPullRefresh;
