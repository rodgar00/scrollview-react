import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingTop: 20,
    },
        titleText: {
        fontSize: 20,
            fontWeight: "bold",
        },
    scrollContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },

    container: {
        width: 200,
        height: 350,
        marginRight: 15,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#efefef",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "white",
    },

    imageContainer: {
        width: "100%",
        height: 140,
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    contentContainer: {
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 5,
    },

    titleProduct: {
        fontWeight: "bold",
        fontSize: 18,
    },

    descProduct: {
        color: "#757575",
        fontSize: 14,
    },

    actionContainer: {
        marginTop: 10,
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 5,
    },

    priceProduct: {
        fontWeight: "bold",
        fontSize: 16,
    },
});
