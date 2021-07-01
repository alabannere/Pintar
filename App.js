import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text, Animated, Vibration, Dimensions } from 'react-native';
import { DraxProvider, DraxView } from 'react-native-drax';
import { Audio } from 'expo-av';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';
import { Ionicons,saaasa } from '@expo/vector-icons';

//Contenido
import Lapiz from "./components/lapiz.js";
import Goma from "./components/goma.js";



//Escenarios
import Naranja from "./escenarios/naranja.js";
import Pera from "./escenarios/pera.js";
import Cerezas from "./escenarios/cerezas.js";
import Banana from "./escenarios/banana.js";
import Manzana from "./escenarios/manzana.js";
import Limon from "./escenarios/limon.js";
import Uvas from "./escenarios/uvas.js";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  const [sound, setSound] = React.useState();
  const [bgColor, setBgColor] = React.useState('white');
  const [nivel, setNivel] = React.useState(0);
  const [colorSeleccionado, setColorSeleccionado] = React.useState('white');
  const [title, setTitle] = React.useState('');

  const NIVELES = 10;

  let [fontsLoaded] = useFonts({
    'Itim-Regular': require('./assets/fonts/Itim-Regular.ttf')
  });

  const AnimationRefImagen = React.useRef(null);

  const _animImagen = () => {
    if (AnimationRefImagen) {
      AnimationRefImagen.current?.bounceInRight();
    }
  }

  const _animImagenError = () => {
    if (AnimationRefImagen) {
      AnimationRefImagen.current?.tada();
    }
  }
  const _animImagenOk = () => {
    if (AnimationRefImagen) {
      AnimationRefImagen.current?.flash();
    }
  }

  React.useEffect(() => {
    nuevoNivel(1)
    fadeIn()
    _animImagen()
  }, []);

  React.useEffect(() => {
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);


  //ANIMACIONES
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  function fadeIn() {
    Animated.timing(fadeAnim, { toValue: 1, duration: 2000, useNativeDriver: true }).start();
  };

  function fadeOut() {
    Animated.timing(fadeAnim, { toValue: 0, duration: 2000, useNativeDriver: true, }).start();
  };


  //FUNCIONES

  async function _Win() {
    _animImagenOk()
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/sound/win.mp3')
    );
    setSound(sound);
    await sound.playAsync();
    fadeOut()
    window.setTimeout(() => {
      nuevoNivel(nivel > NIVELES - 1 ? 1 : nivel + 1)
      fadeIn()
      _animImagen()
    }, 2000);
  }

  async function _Loser() {
    _animImagenError()

    Vibration.vibrate(100)
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/sound/loser.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  function nuevoNivel(nivel) {
    setBgColor('white')
    setColorSeleccionado('white')
    setNivel(nivel);

  }

  function pintar(imagen) {
    setBgColor(colorSeleccionado)
  }



  //COMPONENTES

  function Imagen(cuenta) {
    return (<View style={{flexDirection:'row', width: windowWidth, height: windowHeight/ 4, justifyContent:'center' }}>
        
        
        <Text style={{ textAlign: 'center', fontFamily: 'Itim-Regular', fontSize: windowHeight / 5, color: 'white' }}> 2 x 4 = </Text>

        <DraxView style={{ backgroundColor:'red', borderRadius:100,  paddingHorizontal:30}}
          onReceiveDragDrop={({ dragged: { payload } }) => {
            if(cuenta == payload){
                alert('siiii')
              }else{
                alert('nooo')

              }
          }}
        >
        <Text style={{ textAlign: 'center', fontFamily: 'Itim-Regular', fontSize: windowHeight / 5, color: 'white' }}>?</Text>

        </DraxView>


    </View>
    )
  }



  const bg = require("./assets/bg2.png");


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <DraxProvider >
        <StatusBar hidden/>

        <View style={styles.container}>
          <ImageBackground source={bg} style={styles.bg}>


            <View style={styles.screen}>

              <Animatable.View animation="bounceInLeft" style={styles.barraColores}>
                <DraxView style={{ height: windowHeight / 5, marginBottom: 10}} onDragStart={() => { setColorSeleccionado('red') }} payload="8" >
                  <Text style={{ textAlign: 'center', fontFamily: 'Itim-Regular', fontSize: windowHeight / 5, color: 'white' }}> 8 </Text>
                </DraxView>

                <DraxView style={{ height: windowHeight / 5,marginBottom: 10 }} onDragStart={() => { setColorSeleccionado('red') }} payload="3" >
                  <Text style={{ textAlign: 'center', fontFamily: 'Itim-Regular', fontSize: windowHeight / 5, color: 'white' }}> 3 </Text>
                </DraxView>


                <DraxView style={{ height: windowHeight / 5, marginBottom: 10 }} onDragStart={() => { setColorSeleccionado('red') }} payload="2" >
                  <Text style={{ textAlign: 'center', fontFamily: 'Itim-Regular', fontSize: windowHeight / 5, color: 'white' }}> 2 </Text>
                </DraxView>
              </Animatable.View >



              <View style={styles.content}>

                {nivel == 1 ?
                  Imagen(2*4) : null
               
                }

                {nivel == 2 ?
                  Imagen("green", <Pera fill={bgColor} />, 1, "Pera | Pear") : null
                }

                {nivel == 3 ?
                  Imagen("red", <Cerezas fill={bgColor} />, 1, "Cerezas | Cherries") : null
                }
                {nivel == 4 ?

                  Imagen("yellow", <Banana fill={bgColor} />, 1, "Banana | Banana") : null
                }
                {nivel == 5 ?

                  Imagen("red", <Manzana fill={bgColor} />, 1, "Manzana | Apple") : null
                }
                {nivel == 6 ?
                  Imagen("yellow", <Limon fill={bgColor} />, 1, "Limon | Lemon") : null
                }
                {nivel == 7 ?

                  Imagen("purple", <Uvas fill={bgColor} />, 1, "Uvas | Grapes") : null
                }
                {nivel == 8 ?
                  // FALTA
                  Imagen("orange", <Naranja fill={bgColor} />, 1, "Naranja | Orange") : null
                }
                {nivel == 9 ?

                  Imagen("red", <Manzana fill={bgColor} />, 1, "Manzana | Apple") : null
                }
                {nivel == 10 ?

                  Imagen("yellow", <Banana fill={bgColor} />, 1, "Banana | Banana") : null
                }
              </View>

            </View >



            <View style={{ position: 'absolute', top: 0, right: 0, left: 0, flexDirection: 'row', backgroundColor: '#2c4c80', padding: 10 }}>
              <Animatable.View animation="rubberBand" style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: windowHeight / 12, }}>
                <Ionicons name="md-star" size={windowHeight / 18} color="yellow" style={{ marginTop: -2 }} />
                <Text style={{ fontFamily: 'Itim-Regular', fontSize: windowHeight / 13, color: '#fff' }}> {nivel - 1}</Text>
              </Animatable.View>
            </View>

            <View style={{ position: 'absolute', top: 10, right: 20, flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => nuevoNivel(1)}  >
                <Animatable.View animation="rubberBand" style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: windowHeight / 12 }}>
                  <Ionicons name="ios-refresh-circle" size={windowHeight / 13} color="white" style={{ marginTop: -4 }} />
                </Animatable.View>
              </TouchableOpacity>


            </View>


          </ImageBackground >

        </View >
      </DraxProvider >

    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  screen: {
    flex: 1,

  },
  content: {
    position: 'absolute',
    top: 60,
    left: 0, right: 0, bottom: 0,
    alignItems: 'center',
  },
  barraColores: {
    zIndex: 99999,
    position:'absolute',
    bottom:20, left:0, right:0,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0, right: 0, bottom: 0,
    width: '100%',
    height: '100%'
  },


});