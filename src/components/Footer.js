import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';

export default class Footer extends React.Component {

    render() {

        return (
            <KeyboardAvoidingView 
                style={styles.footer}
                behavior="position" 
                enabled={true}
            >

                <View style={styles.footerInner}>

                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={ () => this.props.onNoteAdd() }
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>

                    <TextInput 
                        style={styles.textInput}
                        placeholder={'New note'}
                        placeholderTextColor={'rgba(255, 255, 255, .7)'}
                        onChangeText={ (val) => this.props.onChangeText(val) }
                        value={this.props.inputValue}
                    />

                </View>

            </KeyboardAvoidingView>
        );

    }

}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        width: '100%',
        height: 80,
        bottom: 0,
    },
    footerInner: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    btn: {
        zIndex: 1,
        position: 'absolute',
        right: 10,
        top: -30,
        width: 70,
        height: 70,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#95a5a6',
        backgroundColor: '#f39c12'
    },
    btnText: {
        color: '#fff',
        fontSize: 40,
    },
    textInput: {
        zIndex: 0,
        flex: 1,
        padding: 20,
        fontSize: 16,
        color: '#ecf0f1',
        backgroundColor: '#f1c40f'
    }
});