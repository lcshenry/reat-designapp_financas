import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './pages/Home'
import Money from './pages/Money'
import Store from './pages/Store'
import CustomTabBar from './components/CustomTabBar'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#121212',

            tabBarStyle:{
                borderTopWidth: 0,
                backgroundColor: '#FFF',
            }
        }}

tabBar={ (props) => <CustomTabBar {...props} />}

        >
            <Tab.Screen options={{
                tabBarIcon: 'compare-arrows'
            }} name='Home' component={Home}/>
            <Tab.Screen options={{
                tabBarIcon: 'attach-money'
            }}  name='Money' component={Money}/>
            <Tab.Screen options={{
                tabBarIcon: 'storefront'
            }} name='Store' component={Store}/>

        </Tab.Navigator>
    )
}