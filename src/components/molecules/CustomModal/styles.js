import { StyleSheet, Dimension } from 'react-native'

export const styles = StyleSheet.create({
    modalContainerContent: {
        width: '80%',
        height: '30%',
        justifyContent: 'center',
        borderRadius: 4,
        marginLeft: 40,
        marginTop: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
      },
      modaTitle: {
        fontSize: 14,
        color: '#212121',
        padding: 25,
      },
      modalContent: {
        paddingHorizontal: 25,
      },
      modalContentText: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        marginVertical: 10
      },
      modalButton: {
        marginVertical: 10,
        paddingHorizontal: 25,
      }
});