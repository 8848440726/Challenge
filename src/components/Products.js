import React from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Image
}from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../actions/actions'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { removeProducts } from '../actions/actions';

const data=[
    {
        pid:100,
        name:'Cleopatra',
        price:' ₹420',
        image:'https://cdn2.penguin.com.au/covers/original/9781448114719.jpg'
    
    },
    {   
        pid:101,
        name:'Animal Kingdom',
        price:'₹421',
        image:'https://www.discountmags.com/shopimages/products/extras/62876-world-of-animals-book-of-the-animal-kingdom-digital-Cover-2016-May-1-Issue.jpg'

    
    },
    {   
        pid:102,
        name:'Half Girlfriend',
        price:'₹423',
        image:'https://th.bing.com/th/id/R.f2ce0167bcc2dcbeac2ab82105cc79f0?rik=noBLjBGHhwwrcg&riu=http%3a%2f%2fimg6a.flixcart.com%2fimage%2fbook%2f7%2f2%2f8%2fhalf-girlfriend-original-imadyktcr4gvdkjh.jpeg&ehk=FJMTgp8AVJkx3yM9k%2f8ug%2fgaqhbssqs0KdcL0MXWJNU%3d&risl=&pid=ImgRaw&r=0'

    
    },
    {
        pid:103,
        name:'Souls',
        price:'₹424',
        image:'https://i.ebayimg.com/images/g/c3sAAOSwAFBZsmDc/s-l400.jpg'

    },
    
]
   
const Products = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state);
    const addItem=item =>{
        dispatch(addProducts(item))
    };
    const removeItem = pid => {
        dispatch(removeProducts(pid))
    }
    const navigation = useNavigation();
    return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:25,marginTop:20,marginLeft:10,color:'black'}}>Products</Text>
                <TouchableOpacity
                 style={{
                    height:40,
                    borderRadius:10,
                    width:70,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'grey',
                    marginTop:24,
                    marginLeft:200,
                    flexDirection:'row'
                    
                }}
                underlayColor='transparent'
                onPress={()=>{
                    navigation.navigate('Cart')
                }}>
                <Icon name='shopping-cart' size={24} color='white'></Icon>
                <Text style={{fontSize:18,marginLeft:5,color:'white'}}>{items.length}</Text>
                </TouchableOpacity>
                
                </View>
                <FlatList 
                data={data}
                renderItem={({item,index})=>{
                    return(
                        <View style={{
                            width:'90%',
                            height:150,
                            marginLeft:20,
                            borderRadius:15,
                            marginTop:10,
                            borderWidth:2,
                            borderColor:'#8e8e8e',
                            backgroundColor:'white',
                            
                            
                        }}>
                
                                <View style={{flexDirection:'row',}}>
                                    <View style={{marginTop:20,marginLeft:30}}>
                                <Text style={{marginBottom:5,fontWeight:'bold',fontSize:19,color:'red'}}>{item.name}</Text>
                                <Text style={{fontSize:20,fontWeight:'700',color:'black'
                            }}>
                                    {item.price}
                                </Text>
                             
                             
                            <TouchableOpacity
                            style={{
                                height:30,
                                borderRadius:10,
                                width:100,
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'green',
                                marginTop:24
                                
                            }}
                            onPress={()=>{
                                addItem(item);
                            }}>
                                <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Add To Cart</Text>
                            </TouchableOpacity>
                            </View>
                        
                            <View style={{flexDirection:'row',position:'absolute',right:30}}>
                    <Image 
                    source={{uri:item.image}}
                    style={{width:100,height:100,
                    marginTop:15,}}></Image>
                        </View>
                            
                       </View>
                       </View>
                    )
                }}/>
            
            </View>
    )
};
export default Products;