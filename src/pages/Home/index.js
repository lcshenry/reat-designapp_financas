import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "../../components/Header"
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
{
  id: 1,
  label: "Conta de Luz",
  value: '89,90',
  date: '30/07/2023',
  type: 0,
},
{
  id: 2,
  label: 'Luiz Fernando / PIX',
  value: '2.500,00',
  date: '24/07/2023',
  type: 1,
},
{
  id: 3,
  label: 'Salario',
  value: '7.200,00',
  date: '30/07/2023',
  type: 1,
},
{
  id: 4,
  label: 'Conta de Agua',
  value: '7.200,00',
  date: '25/07/2023',
  type: 0,
},
{
  id: 5,
  label: 'Maria Joaquina / PIX',
  value: '10.200,00',
  date: '30/07/2023',
  type: 1,
},
{
  id: 6,
  label: 'Ivo / PIX',
  value: '25.000,00',
  date: '30/07/2023',
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
