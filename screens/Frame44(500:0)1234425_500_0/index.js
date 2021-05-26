import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_500_1}>
        <Text style={styles.Text_500_1}>Today, I try</Text>
      </View>
      <View style={styles.View_500_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ea/e4ba/7b14efc018b9ada2f1aab9af8f9c8863"
          }}
          style={styles.ImageBackground_500_5}
        />
        <View style={styles.View_500_7}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c1/32a7/1f74ba101c0b20fc493a825f0e70c651"
            }}
            style={styles.ImageBackground_500_8}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cad/ed24/6447821d5f910b0d3b5816dd8b1aea70"
          }}
          style={styles.ImageBackground_500_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8281/5046/0368939e54ec4bb67ba4f9177d38a302"
          }}
          style={styles.ImageBackground_500_13}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_500_1: {
    width: wp("25.264550264550266%"),
    minWidth: wp("25.264550264550266%"),
    minHeight: hp("45.26558891454965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.91534391534393%"),
    top: hp("28.406466512702078%")
  },
  Text_500_1: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 66,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_500_4: {
    width: wp("8.73015873015873%"),
    minWidth: wp("8.73015873015873%"),
    height: hp("5.542725173210162%"),
    minHeight: hp("5.542725173210162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.44973544973546%"),
    top: hp("70.43879907621246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_500_5: {
    width: wp("1.5873015873015872%"),
    height: hp("5.542725173210162%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_500_7: {
    width: wp("1.5873015873015872%"),
    minWidth: wp("1.5873015873015872%"),
    height: hp("5.542725173210162%"),
    minHeight: hp("5.542725173210162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3809523809523654%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_500_8: {
    width: wp("0.8253969212688466%"),
    height: hp("2.8822165438539713%"),
    top: hp("1.3302527729413356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3809530268270578%")
  },
  ImageBackground_500_11: {
    width: wp("1.5873015873015872%"),
    height: hp("5.542725173210162%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.761904761904759%")
  },
  ImageBackground_500_13: {
    width: wp("1.5873015873015872%"),
    height: hp("5.542725173210162%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857139%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
