import * as React from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';

import { Video } from 'expo-av';



const ARMF1 = require('../assets/ArmFat/HowtoLoseArmFat.mp4')
const ARMF2 = require('../assets/ArmFat/ARM1.mp4')
const ARMF3 = require('../assets/ArmFat/ARM2.mp4')
const ARMF4 = require('../assets/ArmFat/ARM3.mp4')
const BELF1 = require('../assets/BellyFat/HowToLostBellyFat.mp4')
const BELF2 = require('../assets/BellyFat/BF1.mp4')
const BELF3 = require('../assets/BellyFat/BF2.mp4')
const BELF4 = require('../assets/BellyFat/BF3.mp4')
const BELF5 = require('../assets/BellyFat/BF4.mp4')

const CH1 = require('../assets/ChestFat/CH1.mp4')
const CH2 = require('../assets/ChestFat/CH2.mp4')
const CH3 = require('../assets/ChestFat/CH3.mp4')
const CH4 = require('../assets/ChestFat/CH4.mp4')

const H1 = require('../assets/HealthyDiet/H1.mp4')
const H2 = require('../assets/HealthyDiet/H2.mp4')
const H3 = require('../assets/HealthyDiet/H3.mp4')
const H4 = require('../assets/HealthyDiet/H4.mp4')

const Z1 = require('../assets/Zumba/Z1.mp4')
const Z2 = require('../assets/Zumba/Z2.mp4')
const Z3 = require('../assets/Zumba/Z3.mp4')
const Z4 = require('../assets/Zumba/Z4.mp4')

import { ScrollView } from 'react-native-gesture-handler';

function Home({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Exercise</Text>

            <ScrollView>

                <Text style={styles.dtext}>You might wonder how exercising helps bullying... It found that physical activity made a significant difference in the mental health and attitudes of bullying victims.
                Physical activities promotes healthy growth and development.

                Developing a good physical foundation from a young age helps the mental state of mind healthy.

                Stretching exercises help to relax the muscles and relax the mind as well.

                It helps to improve the positivity by giving the sense of protection.
                Eating right food at the right time helps to keep you fit. </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ArmFat')}
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "black",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10,
                    }}>

                    <Image

                    />
                    <Text style={{ color: "white" }}>
                        Arm Fat Exerise
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BellyFat')} style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "black",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Belly Fat Exerise
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ChestFat')} style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "black",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Chest Fat Exerise
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('HealthyDiet')} style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "black",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Healthy Diet
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ThighFat')}
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "black",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10,
                    }}>

                    <Image

                    />
                    <Text style={{ color: "white" }}>
                        Zumba
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('DailyFitness')} style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "black",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Daily Fitness
                </Text>

                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function ArmFat({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Arm Fat Exercise</Text>
            <ScrollView>
                <Text style={styles.dtext}>When testosterone level drops, your body may be more inclined to store fat while resisting the need to build muscles and this excess fat will show in areas like the arms.
                Stress, lack of sleep and unhealthy lifestyle habits are just some contributing factors to plummeting testosterone levels.
                Arm Fat exercises help in tightening and smoothing tissue, and removing extra fat.
                Teenagers can lose arm fat by making simple changes in their daily lives.
            </Text>

                <Video
                    source={ARMF1}
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
                    Yoga for Beginners
            </Text>

                <Video
                    source={ARMF2}
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
                    Lose Arm Fat in 1 WEEK - Get Slim Arms, Arms Workout Exercise for Flabby Arms & Tone Sagging Arm
            </Text>


                <Video
                    source={ARMF3}
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
                    How To Lose Arm Fat - Home Workout
            </Text>

                <Video
                    source={ARMF4}
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
                    How To Lose Arm Fat Fast - 5 Minute Upper Body Workout to Lose Arm Fat
            </Text>

            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    borderWidth: 5,
                    borderColor: "#E1FF3E",
                    marignTop: 30,
                    backgroundColor: "#000000",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,
                    padding: 10
                }}>
                <Text style={{ color: "white" }}>
                    Back
                </Text>

            </TouchableOpacity>

        </View>
    );
}

function BellyFat({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Belly Fat Exercise</Text>

            <ScrollView>
                <Text style={styles.dtext}>Belly fat refers to fat around the abdomen.
                There are many reasons why people gain belly fat, including poor diet, lack of exercise, and stress. Improving nutrition, increasing activity, reducing stress, and making other lifestyle changes can all help people lose unwanted belly fat.
                Teenagers are prone to drinking more sugary drinks than water. Sugary drinks are full of empty calories that contain no nutrition. To lose weight, teenagers should substitute those drinks for water instead.
            </Text>

                <Video
                    source={BELF1}
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
                    How To Lose Belly Fat
                </Text>

                <Video
                    source={BELF2}
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
                    8-Minute Home Workout to Lose Body Fat
                </Text>

                <Video
                    source={BELF3}
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
                      Kids Exercises To Lose Belly Fat At Home
                </Text>

                <Video
                    source={BELF4}
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
                    Lose Belly Fat In 3 Days With an Easy Egg Diet
                </Text>

                <Video
                    source={BELF5}
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
                    10 Safe Exercises to Get Rid of Belly Fat Easily
                </Text>

            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    borderWidth: 5,
                    borderColor: "#E1FF3E",
                    marignTop: 30,
                    backgroundColor: "#000000",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,
                    padding: 10
                }}>
                <Text style={{ color: "white" }}>
                    Back
                </Text>

            </TouchableOpacity>

        </View>
    );
}

function ChestFat({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Chest Fat Exercise</Text>

            <ScrollView>

                <Text style={styles.dtext}>Losing chest fat is no different from losing fat anywhere else on your body, and there’s no way to lose fat from your chest only, it comes as part of total-body fat loss.
                Exercise and healthy diet will help to reduce the chest fat.
                </Text>

                <Video
                    source={CH1}
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
                    7-Minute Home Workout for Bigger Chest
                </Text>

                <Video
                    source={CH4}
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
                    Exercise For Kids To Lose Chest Fat
                </Text>

                <Video
                    source={CH2}
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
                    10+ Best Exercises to Get Rid of Chest Fat
                </Text>

                <Video
                    source={CH3}
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
                    How to Lose Man Boobs
                </Text>

            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    borderWidth: 5,
                    borderColor: "#E1FF3E",
                    marignTop: 30,
                    backgroundColor: "#000000",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,
                    padding: 10
                }}>
                <Text style={{ color: "white" }}>
                    Back
                </Text>

            </TouchableOpacity>

        </View>
    );
}

function DailyFitness({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Daily Fitness</Text>

            <ScrollView>

                <Text style={styles.dtext}>Aerobic activities like biking, dancing,playing or running are the best fitness exercise for teenagers. Also, take few minutes for some strength training.
                Daily exercise may help prevent conditions such as obesity and keeps you healthy lifestyle.
                Regular exercise helps to improve the self-image and confidence.
            </Text>

                <Image
                    source={require('../assets/exercise.jpg')}
                    style={{
                        height: 590, width: 395, alignSelf: 'center', marginTop: 20, borderWidth: 5, borderColor: "#E1FF3E",
                    }}
                />
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    borderWidth: 5,
                    borderColor: "#E1FF3E",
                    marignTop: 30,
                    backgroundColor: "#000000",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,
                    padding: 10
                }}>
                <Text style={{ color: "white" }}>
                    Back
                </Text>

            </TouchableOpacity>

        </View>
    );
}

function ThighFat({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Zumba</Text>

            <ScrollView>
                <Text style={styles.dtext}>Zumba is also the most enjoyable form of exercise.
                stretching the muscles and moving the body to the beats of Hip-Hop and Salsa always feels great and is worth all the fun.
                Besides losing weight, Zumba brings energy and smile with nice movements for the beats.</Text>

                <Video
                    source={Z1}
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
                    Aerobics for body toning and for fast weight loss
                </Text>

                <Video
                    source={Z2}
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
                    Basic Aerobics - Full Body Workout Dance workout
                </Text>

                <Video
                    source={Z3}
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
                    Basic Zumba Steps for Quick Weight Loss Easy Cardio Workout For Beginners Fitness in 4 minute
                </Text>

                <Video
                    source={Z4}
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
                    Easy Zumba Steps for Beginners 
                </Text>
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    borderWidth: 5,
                    borderColor: "#E1FF3E",
                    marignTop: 30,
                    backgroundColor: "#000000",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,
                    padding: 10
                }}>
                <Text style={{ color: "white" }}>
                    Back
                </Text>

            </TouchableOpacity>

        </View>
    );
}

function HealthyDiet({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Healthy Diet</Text>

            <ScrollView>

                <Text style={styles.dtext}>It's not only the 100 pushups or situps that help you become fit ,a balanced diet is very important for the health of your body and mind. Healthy diet helps overcome the anxiety and depression. Nutritious diet isn't just good for the body; it's great for the brain too.</Text>

                <Video
                    source={H1}
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
                    10 Health Habits to Lose Weight Without Diet or Exercise
            </Text>

                <Video
                    source={H2}
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
                    14 Foods to Reduce Anxiety and Lose Weight 
            </Text>

                <Video
                    source={H3}
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
                    Lose Belly Fat In 3 Days With an Easy Egg Diet
            </Text>

                <Video
                    source={H4}
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
                    11 Mistakes People Make Trying to Lose Weight
            </Text>
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    borderWidth: 5,
                    borderColor: "#E1FF3E",
                    marignTop: 30,
                    backgroundColor: "#000000",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,
                    padding: 10
                }}>
                <Text style={{ color: "white" }}>
                    Back
                </Text>

            </TouchableOpacity>
        </View>
    );
}

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.ModalPresentationIOS,
            }}
            mode="modal"
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ArmFat" component={ArmFat} />
            <Stack.Screen name="BellyFat" component={BellyFat} />
            <Stack.Screen name="ChestFat" component={ChestFat} />
            <Stack.Screen name="ThighFat" component={ThighFat} />
            <Stack.Screen name="HealthyDiet" component={HealthyDiet} />
            <Stack.Screen name="DailyFitness" component={DailyFitness} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({

    text: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 15,
        color: "white",
        justifyContent: 'center',
    },
    dtext: {
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 14,
        color: "white",
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
});
