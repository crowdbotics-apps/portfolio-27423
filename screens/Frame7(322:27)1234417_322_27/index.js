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
      <View style={styles.View_322_28}>
        <Text style={styles.Text_322_28}>
          I&#39;m relentless in the face of adversity and passionate about
          unlocking the power in individuals, teams, and communities.
        </Text>
      </View>
      <View style={styles.View_322_29}>
        <Text style={styles.Text_322_29}>
          Over the past 2 years, I&#39;ve been working with Zeta to help and
          solve design issues in Banking and Finance. Before that, I studied
          electronics and electrical engineering at KIIT, Bhubaneswar.
        </Text>
      </View>
      <View style={styles.View_322_30}>
        <Text style={styles.Text_322_30}>
          I’m currently based in Bangalore, IN and taking time to Learn, design,
          teach, and give back ☀️. I also like meeting people to talk about
          design, movies, music and ambitious product ideas over coffee or
          beers. If you do too, lets chat.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_322_28: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("21.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_28: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_29: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("28.888888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.333333333333332%")
  },
  Text_322_29: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_30: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("36.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.888888888888886%")
  },
  Text_322_30: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
