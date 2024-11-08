export function hideBottomTabNavigator(navigation){
    navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none'
        }
      });
}

export function showBottomTabNavigator(navigation){
    navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex'
        }
      });
}