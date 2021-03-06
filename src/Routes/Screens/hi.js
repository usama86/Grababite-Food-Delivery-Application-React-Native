import React, {Component} from 'react';
    import {View, Text, StyleSheet, ImageBackground, Image,Dimensions} from 'react-native';

class AccountHeader extends React.Component{
    render(){
        return(
            <ImageBackground
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOVTmb0ILbDI6ggGhPKUkn3v4UKc2dNB-Kjng7aGM14UbvzKY'}}
                style={styles.container}>
                    <View style={styles.overlay}>
                    <Text style = {[styles.textStyle, {paddingTop: 10}]} >My Account</Text>
                    <Image source= {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOVTmb0ILbDI6ggGhPKUkn3v4UKc2dNB-Kjng7aGM14UbvzKY'}}
                        style={styles.avatarStyle}/>
                    <Text style = {styles.textStyle} > Jenifer Lawrance</Text>
                    <Text style = {styles.textStyle} > +14155552671</Text>
                    </View>
            </ImageBackground>
        );
    }
}     

const styles = StyleSheet.create({
  container: {

},            
overlay: {
    backgroundColor:'rgba(255,0,0,0.5)',
},
    avatarStyle: {
        width:100, 
        height: 100,
        marginTop: 10,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textStyle: {
        marginTop: 10,
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    balanceContainer:{
        padding:10,
    }
  });

export default AccountHeader;