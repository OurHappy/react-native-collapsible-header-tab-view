
import React from 'react';
import {
    View,
} from 'react-native';
import { TabViewContainer } from './component/TabViewBase'
import { useHomeConfig } from './hook'
import { styles } from './styles'

const ExampleWithPullRefresh: React.FC<any> = (props) => {
    const { tabviewType, enableSnap } = useHomeConfig(props)
    return (
        <View style={styles.container}>
            <TabViewContainer
                sceneRefreshEnabled={true} enableSnap={enableSnap}/>
        </View>
    )
}
export default ExampleWithPullRefresh
