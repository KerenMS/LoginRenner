import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    logo:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 70,
        backgroundColor: '#DB1C07',
        
    },
    imagem:{
        width: 280,
        height: 190,
        marginBottom: 40,
        alignSelf: 'center',
    },

    email:{
        backgroundColor:'#fff',
        borderBottomWidth:1.9,
        borderRadius: 10,
        paddingHorizontal: 13,
    
    },
    senha:{
        backgroundColor:'#fff',
        borderBottomWidth:1.9,
        borderRadius: 10,
        paddingHorizontal: 13,
        marginTop:5,
        
    },

    button:{
        marginTop:20,
        width:60,
        borderRadius:50,
        alignSelf:'center'
    },

    textButton:{
        backgroundColor:'#fff',
        borderBottomWidth:1.9,
        borderRadius: 8,
        fontSize: 17,
        textAlign:'center',

    },

    saudacao:{
        fontSize:20,
        marginBottom:100,
        color:'#fff',
        fontWeight:'bold',
    },

    esqueciButton:{
        color:'#fff',
        fontWeight:'bold',
        marginTop:30,
        textAlign:'center',
    },

    cadastroText:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10,
    }

})
