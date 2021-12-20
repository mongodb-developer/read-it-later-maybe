import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginView } from './views/LoginView';
import { AuthProvider } from './providers/AuthProvider';
import { LinksView } from './views/LinksView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Login View"
              component={LoginView}
              options={{ title: "Read it Later - Maybe" }}
            />
          <Stack.Screen
              name="Links">
               {() => {
                return (
                  <LinksView />
                );
              }} 
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
