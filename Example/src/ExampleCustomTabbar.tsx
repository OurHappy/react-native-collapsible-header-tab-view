import React from 'react';
import {View} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import {TabViewContainer} from './component/TabViewBase';
import {styles} from './styles';
import {useHomeConfig} from './hook';

const ExampleCustomTabbar: React.FC<any> = props => {
  const {enableSnap} = useHomeConfig(props);

  const _renderTabBar = (barProps: any) => {
    return (
      <TabBar
        {...barProps}
        inactiveColor={'#333'}
        activeColor={'#FFD321'}
        style={styles.tabbarStyle}
      />
    );
  };

  const Props = {
    overflowHeight: 20,
    tabbarHeight: 60,
    enableSnap,
  };

  return (
    <View style={styles.container}>
      <TabViewContainer {...Props} renderTabBar={_renderTabBar} />
    </View>
  );
};
export default ExampleCustomTabbar;
