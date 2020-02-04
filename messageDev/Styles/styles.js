import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color: '#000000'
    // },
    screen: {
        flex: 1,
        backgroundColor: '#9eb6ff'
    },
    background: {
        flex: 2
    },
    tabs: {
        top: 170,
        textAlign: 'center',
        flexDirection: 'row',
        left: 15
    },
    lightTab: {
        width: 175,
        textAlign: 'center',
        color: 'white'
    },
    darkTab: {
        width: 175,
        textAlign: 'center',
        color: '#C8C8C8'
    },
    lines: {
        flexDirection: 'row',
        top: 180
    },
    lightLine: {
        backgroundColor: 'white',
        borderRadius: 3,
        height: 3,
        width: 175,
        left: 15
    },
    darkLine: {
        backgroundColor: '#C8C8C8',
        borderRadius: 3,
        height: 3,
        width: 175,
        left: 15
    },
    card:{
        flex: 4,
        backgroundColor: 'white',
        borderRadius: 10
    },
    textBox:{
        flex: 1,
        left: 15,
    },
    title:{
        flex: 2,
        top: 60,
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 34
    }, 
    subtitle:{
        flex: 1,
        width: 250,
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 22,
        color: '#999999'
    }, 
    inputLabel:{
        flex: 1,
        fontWeight: 'bold',
        top: 20
    }, 
    input:{
        flex: 1,
        height: 10,
        width: 350,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#E0E0E0'
    },
    button: {
        flex: 1,
        height: 40,
        width: 350,
        backgroundColor: '#9eb6ff',
    },
    helpText: {
        flex: 1,
        textAlign: 'center',
        color: '#9eb6ff'
    }
});
