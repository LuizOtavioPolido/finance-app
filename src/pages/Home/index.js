import { StyleSheet, Text, View, Flat, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id:1,
    label: 'Boleto conta Luz',
    value: '300,90',
    date: '17/04/2022',
    type: 0 // gastos
  },
  {
    id:2,
    label: 'Pix recebido',
    value: '500,00',
    date: '18/04/2022',
    type: 1 // entrada
  },
  {
    id:3,
    label: 'Adiantamento salário',
    value: '660,60',
    date: '25/04/2022',
    type: 1 // entrada
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Luiz O A Polido'/>
        <Balance balance='12.390,98' expenses='-300,90'/>
        <Actions />
        <Text style={styles.title}>Ultimas movimentações</Text>

        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Movements data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize:18,
    fontWeight:'bold',
    margin:14,
  },
  list: {
    marginStart:14,
    marginEnd: 14,

  }
});
