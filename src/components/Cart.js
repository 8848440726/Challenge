import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
}from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { removeProducts } from '../actions/actions';
import { useNavigation } from '@react-navigation/native';

const Cart =()=> {
    const navigation=useNavigation()
    const items = useSelector(state => state);
    const dispatch = useDispatch()
    const removeItem = pid => {
        dispatch(removeProducts(pid))
    }
    if(items.length>0){
    return(
        <View style={{flex:1}}>
            <TouchableOpacity
            onPress={()=>{navigation.goBack();}}>
            <View style={{flexDirection:'row'}}>
            
                <View style={{marginTop:20,marginLeft:10}}>
                <Icon name='arrow-back-ios' size={30} color='black'></Icon>
                </View>
                    <Text style={{fontWeight:'bold',fontSize:25,marginTop:20,marginLeft:0,color:'black'}}>Cart</Text>
            
                </View>
                </TouchableOpacity>
            <FlatList
            data={items}
            renderItem={({item,index})=>{
                return(
                    <View style={{
                        width:'90%',
                        height:150,
                        borderRadius:15,
                        marginTop:10,
                        borderWidth:1,
                        borderColor:'#8e8e8e',
                        flexDirection:'row',
                        backgroundColor:'white',
                        marginLeft:15
                    }}>
                        <View style={{flexDirection:'row'}}>

                        <View style={{marginTop:20,marginLeft:30}}>
                            <Text style={{marginBottom:5,fontWeight:'bold',fontSize:19,color:'red'}}>{item.name}</Text>
                            <Text style={{fontSize:20,fontWeight:'700',color:'black'}}>
                                {item.price}
                            </Text>
                        <TouchableOpacity
                        style={{
                            height:30,
                            borderRadius:10,
                            width:100,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'cyan',
                            marginTop:20
                        }}
                        onPress={()=>{
                            removeItem(item.pid)
                        }}>
                            <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Remove</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                        <View style={{flexDirection:'row',position:'absolute',right:30}}>
                    <Image 
                    source={{uri:item.image}}
                    style={{width:100,height:100,
                    marginTop:15}}></Image>
                        </View>
                         </View>
                 )
        }}/>
        </View>
    )} else{
        return(
            <View style={{flex:1}}>
                <TouchableOpacity
            onPress={()=>{navigation.goBack();}}>
            <View style={{flexDirection:'row'}}>
            
                <View style={{marginTop:20,marginLeft:10}}>
                <Icon name='arrow-back-ios' size={30} color='black'></Icon>
                </View>
                    <Text style={{fontWeight:'bold',fontSize:25,marginTop:20,marginLeft:0,color:'black'}}>Cart</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:24,fontWeight:'bold',color:'black',marginTop:190}}>Your Cart Is Empty</Text>
            </View>
            </View>
        )
            
        
    }
};
export default Cart;
