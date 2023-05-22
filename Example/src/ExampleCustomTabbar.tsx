
import React from 'react';
import {
    View
} from 'react-native';
import { TabBar } from 'react-native-tab-view'
import { TabViewContainer } from './component/TabViewBase'
import { styles } from './styles'
import { useHomeConfig } from './hook'

const ExampleCustomTabbar: React.FC<any> = (props) => {
    const { tabviewType, enableSnap } = useHomeConfig(props)

    const _renderTabBar = (props: any) => {
        return <TabBar {...props} inactiveColor={'#333'} activeColor={'#FFD321'} style={styles.tabbarStyle} />
    }

    const Props = {
        overflowHeight: 20,
        tabbarHeight: 60,
        enableSnap
    }

    return (
        <View style={styles.container}>
            <TabViewContainer
                {...Props}
                renderTabBar={_renderTabBar}
            />
        </View>
    )
}
export default ExampleCustomTabbar
