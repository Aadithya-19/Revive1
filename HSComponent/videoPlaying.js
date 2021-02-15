import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';

const Vid1 = require('../assets/Bullying/Stop_Bullying.mp4')
const Vid2 = require('../assets/Inspiration/Inspirational1.mp4')
const Vid3 = require('../assets/Inspiration/Inspirational2.mp4')
const Vid4 = require('../assets/Inspiration/Inspirational3.mp4')
const Vid5 = require('../assets/Inspiration/Inspirational4.mp4')
const Vid6 = require('../assets/Bullying/Bully1.mp4')
const Vid7 = require('../assets/Bullying/Bully2.mp4')
const Vid8 = require('../assets/Bullying/Bully3.mp4')
const Vid9 = require('../assets/Bullying/Bully4.mp4')
const Vid10 = require('../assets/Bullying/Bully5.mp4')

export default class videoPlaying extends Component {

  render() {
    return (
      <View style={{ backgroundColor: "black", flex: 1 }}>

        <Image
          source={require('../assets/ReviveLogo.png')}
          style={{ height: 50, width: 50, marginTop: 20 }}
        />
        <Text style={styles.text}>
          Say No To Bullying
        </Text>
        <View>
          <ScrollView>

            <Video
              source={Vid1}
              rate={1.0}
              volume={1.0}
              isMuted={false} 
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Ways to Stop Bullying
            </Text>

            <Video
              source={Vid2}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Don't Worry If People Don't Take Your Goals Seriously
            </Text>

            <Video
              source={Vid3}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Life Story Of Dalai Lama
            </Text>
            <Video
              source={Vid4}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Proof That You Are Never To Old To Achieve Your Dreams
            </Text>
            <Video
              source={Vid5}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Why It's Never Too Late To Achieve Your Dreams
            </Text>
            <Video
              source={Vid6}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />

            <Text style={styles.vtext}>
            Be The Person You Want Your Kids To Be
            </Text>

            <Video
              source={Vid7}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
            How to Talk to Kids About Bullying | Parents
            </Text>
            <Video
              source={Vid8}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
            10 Things To Do If You Are Getting Bullied
            </Text>
            <Video
              source={Vid9}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
            Tips and ways to stop bullying at schools
            </Text>
            <Video
              source={Vid10}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={{ width: 400, height: 300, borderWidth: 4, borderWidth: 5, marginBottom: 10, borderColor: "#E1FF3E", }}
            />
            <Text style={{
              fontSize: 15,
              marginTop: 20,
              marginBottom: 130,
              justifyContent: 'center',
              color: "white",
              alignSelf: 'center',
            }}>
              Protect Yourself Rules - Bullying
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  text: {
    fontSize: 25,
    marginTop: 20,
    justifyContent: 'center',
    color: "white",
    alignSelf: 'center',
  },
  vtext: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    color: "white",
    alignSelf: 'center',
  },
});