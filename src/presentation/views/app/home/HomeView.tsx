import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./HomeStyle";
import { ButtonWithIcon } from "../../../sharedComponents/ButtonWithIcon";
import {FontAwesome} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


export const HomeView = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Bienvenido de nuevo, Rodrigo</Text>
                <TouchableOpacity onPress={() => alert("Ir al carrito")}>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                </TouchableOpacity>
            </View>


            <ScrollView
                horizontal={true}
                style={{ paddingVertical: 20 }}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.scrollContainer}>

                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require("../../../../../assets/Productos/product1.jpg")}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.titleProduct}>Batido de plátano</Text>
                            <Text style={styles.descProduct}>Delicioso batido cremoso de plátano natural, ideal para comenzar el día con energía.</Text>
                            <View style={styles.actionContainer}>
                                <Text style={styles.priceProduct}>6 €</Text>
                                <ButtonWithIcon
                                    text={"Comprar"}
                                    fnDeOtroComponente={() => alert("Producto 1 comprado")}
                                    iconName={"plus"}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require("../../../../../assets/Productos/product2.jpg")}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.titleProduct}>Batido de fresa</Text>
                            <Text style={styles.descProduct}>Refrescante batido de fresas frescas, dulce y ligero, perfecto para cualquier momento del día.</Text>
                            <View style={styles.actionContainer}>
                                <Text style={styles.priceProduct}>5 €</Text>
                                <ButtonWithIcon
                                    text={"Comprar"}
                                    fnDeOtroComponente={() => alert("Producto 2 comprado")}
                                    iconName={"plus"}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require("../../../../../assets/Productos/product3.jpg")}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.titleProduct}>Batido de arándanos</Text>
                            <Text style={styles.descProduct}>Nutritivo batido de arándanos con un toque de yogur, lleno de antioxidantes y sabor intenso.</Text>
                            <View style={styles.actionContainer}>
                                <Text style={styles.priceProduct}>6 €</Text>
                                <ButtonWithIcon
                                    text={"Comprar"}
                                    fnDeOtroComponente={() => alert("Producto 3 comprado")}
                                    iconName={"plus"}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require("../../../../../assets/Productos/product4.jpg")}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.titleProduct}>Batido de chocolate</Text>
                            <Text style={styles.descProduct}>Exquisito batido de chocolate cremoso, ideal para los amantes del chocolate.</Text>
                            <View style={styles.actionContainer}>
                                <Text style={styles.priceProduct}>8 €</Text>
                                <ButtonWithIcon
                                    text={"Comprar"}
                                    fnDeOtroComponente={() => alert("Producto 4 comprado")}
                                    iconName={"plus"}
                                />
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
