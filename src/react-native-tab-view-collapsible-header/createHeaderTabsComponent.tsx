import {
  TabView,
  type TabViewProps,
  Route,
  TabBar,
} from 'react-native-tab-view';
import React, { useEffect, useRef } from 'react';
import {
  GestureContainer,
  type CollapsibleHeaderProps,
  type GestureContainerRef,
} from '../react-native-head-tab-view';

type ZTabViewProps<T extends Route> = Partial<TabViewProps<T>> &
  Pick<TabViewProps<T>, 'onIndexChange' | 'navigationState' | 'renderScene'> &
  CollapsibleHeaderProps;
type ForwardTabViewProps<T extends Route> = ZTabViewProps<T> & {
  forwardedRef: React.Ref<typeof TabView>;
  Component: typeof TabView;
};

export default function createHeaderTabsComponent<T extends Route>(
  Component: typeof TabView,
  _config?: {}
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ZTabViewProps<T>> & React.RefAttributes<typeof TabView>
> {
  return React.forwardRef((props: ZTabViewProps<T>, ref) => {
    return (
      <CollapsibleHeaderTabView
        {...props}
        forwardedRef={ref}
        Component={Component}
      />
    );
  });
}

function CollapsibleHeaderTabView<T extends Route>(
  props: ForwardTabViewProps<T>
): any {
  const gestureContainerRef = useRef<GestureContainerRef>();

  useEffect(() => {
    gestureContainerRef.current?.setCurrentIndex(props.navigationState.index);
  }, [props.navigationState.index]);

  const _renderTabBar = (tabbarProps: any) => {
    if (props.renderTabBar) {
      return props.renderTabBar(tabbarProps);
    }
    return <TabBar {...tabbarProps} />;
  };

  const renderTabView = (e: { renderTabBarContainer: any }) => {
    const { Component } = props;
    return (
      <Component
        ref={props.forwardedRef}
        {...props}
        renderTabBar={(tabbarProps) =>
          e.renderTabBarContainer(_renderTabBar(tabbarProps))
        }
      />
    );
  };

  return (
    <GestureContainer
      ref={gestureContainerRef}
      initialPage={props.navigationState.index}
      renderTabView={renderTabView}
      {...props}
    />
  );
}
