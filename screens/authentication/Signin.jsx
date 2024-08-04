import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import styles from './signin.style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { COLORS, SIZES } from '../../constance/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Hspace, ReUseBtn, Wspace } from '../../components'

const validationSchema = Yup.object().shape({
    password: Yup.string()
    .min(8, "Password must be at least 8 charachers!")
    .required('Required'),
    email: Yup.string()
    .email("Provide a valid Email!")
    .required('Required')
})

const Signin = () => {

    const [loader, setLoader] = useState(false)
    const [responseData, setResponseData] = useState(null)
    const [obsecureText, setObsecureText] = useState(false)



  return (
    <View style={styles.contsiner}>
       <Formik 
        initialValues={{email: "", password: ""}}
        validationSchema={validationSchema}
        onSubmit={(value)=> {
            console.log(value);
        }}
       >

       {({
            handleChange,
            touched,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched
       }) => (                     
            <View style={{paddingTop: 20}}>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Email</Text>
                    <View>
                        <View
                            style={styles.inputWrapper(
                                touched.email ? COLORS.lightBlue : COLORS.lightGray
                            )}
                        >
                            <MaterialCommunityIcons 
                                name='email-outline'
                                size={20}
                                color={COLORS.gray}
                            />
                            <Wspace width={10}/>
                            <TextInput 
                                placeholder='Enter Email'
                                onFocus={() => {setFieldTouched('email')}}
                                onBlur={() => {setFieldTouched('email', "")}}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={{flex: 1}}
                            />
                        </View>
                        {touched.email && errors.email && (
                            <Text style={styles.errorMessage}>{errors.email}</Text>
                        )

                        }
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Password</Text>
                    <View>
                        <View
                            style={styles.inputWrapper(
                                touched.password ? COLORS.lightBlue : COLORS.lightGray
                            )}
                        >
                            <MaterialCommunityIcons 
                                name='lock-outline'
                                size={20}
                                color={COLORS.gray}
                            />
                            <Wspace width={10}/>
                            <TextInput 
                                secureTextEntry={obsecureText}
                                placeholder='Enter Password'
                                onFocus={() => {setFieldTouched('password')}}
                                onBlur={() => {setFieldTouched('password', "")}}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={{flex: 1}}
                            />

                            <TouchableOpacity onPress={()=>{
                                setObsecureText(!obsecureText)
                            }}>
                                <MaterialCommunityIcons 
                                    name={obsecureText ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        {touched.password && errors.password && (
                            <Text style={styles.errorMessage}>{errors.password}</Text>
                        )

                        }
                    </View>
                </View>

                <Hspace height={20}/>

                <ReUseBtn 
                    onPress={handleSubmit}
                    btnText={"SIGN IN"}
                    width={SIZES.width - 40}
                    backgroundColor={COLORS.lightBlue}
                    borderColor={COLORS.green}
                    borderWidth={0}
                    textColor={COLORS.white}
                />

            </View>
       )}
        </Formik>
    </View>
  )
}

export default Signin

