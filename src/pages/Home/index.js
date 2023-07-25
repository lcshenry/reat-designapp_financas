import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "../../components/Header"
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
{
  id: 1,
  label: "Boleto conta luz",
  value: '390,90',
  date: '18/09/2023',
  type: 0,
},
{
  id: 2,
  label: 'PIX cliente x',
  value: '2.500,00',
  date: '24/09/2023',
  type: 1,
},
{
  id: 3,
  label: 'Salario',
  value: '7.200,00',
  date: '30/09/2023',
  type: 1,
},
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Lucas Henrique"/>

      <Balance saldo="9.250,90" gastos="-527,00"/>

      <Actions/>

      <Text style={styles.title}>Ultimas movimentações</Text>
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:18,
    fontWeight: "bold",
   margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  },
});
