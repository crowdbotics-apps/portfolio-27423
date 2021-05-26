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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ea/e4ba/7b14efc018b9ada2f1aab9af8f9c8863"
        }}
        style={styles.ImageBackground_322_101}
      />
      <View style={styles.View_322_103}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c1/32a7/1f74ba101c0b20fc493a825f0e70c651"
          }}
          style={styles.ImageBackground_322_104}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cad/ed24/6447821d5f910b0d3b5816dd8b1aea70"
        }}
        style={styles.ImageBackground_322_107}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8281/5046/0368939e54ec4bb67ba4f9177d38a302"
        }}
        style={styles.ImageBackground_322_109}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_322_101: {
    width: wp("18.181818181818183%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_322_103: {
    width: wp("18.181818181818183%"),
    minWidth: wp("18.181818181818183%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.27272727272727%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_322_104: {
    width: wp("9.454546552715879%"),
    height: hp("51.999990145365395%"),
    top: hp("24.000040690104164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.363643761837121%")
  },
  ImageBackground_322_107: {
    width: wp("18.181818181818183%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.54545454545454%")
  },
  ImageBackground_322_109: {
    width: wp("18.181818181818183%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.81818181818183%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
