import { StyleSheet, Dimensions, Platform } from 'react-native'


export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#87CEFA',
    backgroundColor: '#B0E0E6',
    height: 70,
    flex: 1,
    padding: 5,
    fontSize: 20
  },
  iconWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop:20,
    height:70,
    backgroundColor:'#B0E0E6',
    borderColor: '#87CEFA',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20
  }
});
