import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './login';

const Login: React.FC = () => {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleLogin = () => {
    console.log('Username:', email);
    console.log('Password:', senha);
};

return (
    <View style={styles.logo}>
    <Text
    style={styles.saudacao}>
    Olá, {'\n\n'}Acesse sua conta.
    </Text>
    <Image source={require('../assets/images/logo_lojasrenner.png')} style={styles.imagem} />

    <TextInput    
    style={styles.email} 
    placeholder='Insira E-mail ou CPF'
    value={email}
    onChangeText={setEmail}
    />

    <TextInput    
    style={styles.senha} 
    placeholder='Senha'
    value={senha}
    onChangeText={setSenha}
    secureTextEntry
    />

<TouchableOpacity style={styles.button} activeOpacity={0.7}>
    <Text style={styles.textButton}> Entrar </Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.7}>
    <Text style={styles.esqueciButton}> Esqueci minha senha </Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.7}>
    <Text style={styles.cadastroText}>
    Novo por aqui? Cadastre-se
    </Text>
    </TouchableOpacity>

    </View>
)
};
export default Login;