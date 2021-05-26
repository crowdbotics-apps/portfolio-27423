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
      <View style={styles.View_322_52}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
          }}
          style={styles.ImageBackground_322_53}
        />
        <View style={styles.View_322_54}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
            }}
            style={styles.ImageBackground_322_55}
          />
        </View>
        <View style={styles.View_322_58}>
          <View style={styles.View_322_59}>
            <Text style={styles.Text_322_59}>Apr 2019 -</Text>
          </View>
          <View style={styles.View_322_60}>
            <View style={styles.View_322_61}>
              <View style={styles.View_322_62}>
                <Text style={styles.Text_322_62}>Zeta Suite </Text>
              </View>
              <View style={styles.View_322_63}>
                <Text style={styles.Text_322_63}>Bangalore, India</Text>
              </View>
            </View>
            <View style={styles.View_322_64}>
              <Text style={styles.Text_322_64}>Product Designer </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_322_65}>
        <View style={styles.View_322_66}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
            }}
            style={styles.ImageBackground_322_67}
          />
        </View>
        <View style={styles.View_322_70}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
            }}
            style={styles.ImageBackground_322_71}
          />
          <View style={styles.View_322_72}>
            <View style={styles.View_322_73}>
              <Text style={styles.Text_322_73}>Aug 2018 - Mar 2019 </Text>
            </View>
            <View style={styles.View_322_74}>
              <View style={styles.View_322_75}>
                <View style={styles.View_322_76}>
                  <Text style={styles.Text_322_76}>Appiness Interactive</Text>
                </View>
                <View style={styles.View_322_77}>
                  <Text style={styles.Text_322_77}>Bangalore, India</Text>
                </View>
              </View>
              <View style={styles.View_322_78}>
                <Text style={styles.Text_322_78}>Ace UX/UI Designer</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_322_79}>
        <View style={styles.View_322_80}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
            }}
            style={styles.ImageBackground_322_81}
          />
        </View>
        <View style={styles.View_322_84}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
            }}
            style={styles.ImageBackground_322_85}
          />
          <View style={styles.View_322_86}>
            <View style={styles.View_322_87}>
              <Text style={styles.Text_322_87}>Jun 2017 - Dec 2017 </Text>
            </View>
            <View style={styles.View_322_88}>
              <View style={styles.View_322_89}>
                <View style={styles.View_322_90}>
                  <Text style={styles.Text_322_90}>Redbus</Text>
                </View>
                <View style={styles.View_322_91}>
                  <Text style={styles.Text_322_91}>Remote</Text>
                </View>
              </View>
              <View style={styles.View_322_92}>
                <Text style={styles.Text_322_92}>UX/UI Designer- Intern</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_322_52: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.49019607843137%"),
    minHeight: hp("25.49019607843137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_322_53: {
    width: wp("72.55533077550017%"),
    minWidth: wp("72.55533077550017%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.444669224499822%"),
    top: hp("25.49019607843137%")
  },
  View_322_54: {
    width: wp("3.364884905530443%"),
    minWidth: wp("3.364884905530443%"),
    height: hp("7.8431372549019605%"),
    minHeight: hp("7.8431372549019605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.37345654112849%"),
    top: hp("2.941176470588235%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_322_55: {
    width: wp("1.4724572443496975%"),
    height: hp("5.392594898448271%"),
    top: hp("1.225490196078431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9461845484260323%")
  },
  View_322_58: {
    width: wp("49.21144174338273%"),
    minWidth: wp("49.21144174338273%"),
    height: hp("13.725490196078432%"),
    minHeight: hp("13.725490196078432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_59: {
    width: wp("17.35018779414135%"),
    minWidth: wp("17.35018779414135%"),
    minHeight: hp("4.411764705882353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_59: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_60: {
    width: wp("21.76659923265005%"),
    minWidth: wp("21.76659923265005%"),
    height: hp("13.725490196078432%"),
    minHeight: hp("13.725490196078432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.444842510732677%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_61: {
    width: wp("21.76659923265005%"),
    minWidth: wp("21.76659923265005%"),
    height: hp("5.88235294117647%"),
    minHeight: hp("5.88235294117647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_62: {
    width: wp("10.93587594297394%"),
    minWidth: wp("10.93587594297394%"),
    minHeight: hp("5.88235294117647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_62: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_63: {
    width: wp("9.989502063293502%"),
    minWidth: wp("9.989502063293502%"),
    minHeight: hp("3.431372549019608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.777097169356544%"),
    top: hp("2.450980392156863%")
  },
  Text_322_63: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_64: {
    width: wp("13.77499758201525%"),
    minWidth: wp("13.77499758201525%"),
    minHeight: hp("4.411764705882353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.313725490196079%")
  },
  Text_322_64: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_65: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.49019607843137%"),
    minHeight: hp("25.49019607843137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.254901960784316%")
  },
  View_322_66: {
    width: wp("3.364884905530443%"),
    minWidth: wp("3.364884905530443%"),
    height: hp("7.8431372549019605%"),
    minHeight: hp("7.8431372549019605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.37345654112849%"),
    top: hp("2.941176470588232%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_322_67: {
    width: wp("1.4724572443496975%"),
    height: hp("5.392594898448271%"),
    top: hp("1.2254901960784323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9461845484260323%")
  },
  View_322_70: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.49019607843137%"),
    minHeight: hp("25.49019607843137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_322_71: {
    width: wp("72.55533077550017%"),
    minWidth: wp("72.55533077550017%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.444669224499822%"),
    top: hp("25.490196078431367%")
  },
  View_322_72: {
    width: wp("60.252470339654494%"),
    minWidth: wp("60.252470339654494%"),
    height: hp("13.725490196078432%"),
    minHeight: hp("13.725490196078432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_73: {
    width: wp("17.35018779414135%"),
    minWidth: wp("17.35018779414135%"),
    minHeight: hp("4.411764705882353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_73: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_74: {
    width: wp("32.807627828921824%"),
    minWidth: wp("32.807627828921824%"),
    height: hp("13.725490196078432%"),
    minHeight: hp("13.725490196078432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.444842510732677%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_75: {
    width: wp("32.807627828921824%"),
    minWidth: wp("32.807627828921824%"),
    height: hp("5.88235294117647%"),
    minHeight: hp("5.88235294117647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_76: {
    width: wp("21.976904539245705%"),
    minWidth: wp("21.976904539245705%"),
    minHeight: hp("5.88235294117647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_76: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_77: {
    width: wp("9.989502063293502%"),
    minWidth: wp("9.989502063293502%"),
    minHeight: hp("3.431372549019608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.81812576562831%"),
    top: hp("2.4509803921568576%")
  },
  Text_322_77: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_78: {
    width: wp("15.5625926880783%"),
    minWidth: wp("15.5625926880783%"),
    minHeight: hp("4.411764705882353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.313725490196077%")
  },
  Text_322_78: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_79: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.49019607843137%"),
    minHeight: hp("25.49019607843137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.50980392156863%")
  },
  View_322_80: {
    width: wp("3.364884905530443%"),
    minWidth: wp("3.364884905530443%"),
    height: hp("7.8431372549019605%"),
    minHeight: hp("7.8431372549019605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.37345654112849%"),
    top: hp("2.941176470588232%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_322_81: {
    width: wp("1.4724572443496975%"),
    height: hp("5.392594898448271%"),
    top: hp("1.2254901960784252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9461845484260323%")
  },
  View_322_84: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.49019607843137%"),
    minHeight: hp("25.49019607843137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_322_85: {
    width: wp("72.55533077550017%"),
    minWidth: wp("72.55533077550017%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.444669224499822%"),
    top: hp("25.490196078431367%")
  },
  View_322_86: {
    width: wp("44.90018295817185%"),
    minWidth: wp("44.90018295817185%"),
    height: hp("13.725490196078432%"),
    minHeight: hp("13.725490196078432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_87: {
    width: wp("16.614119221056562%"),
    minWidth: wp("16.614119221056562%"),
    minHeight: hp("4.411764705882353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_87: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_88: {
    width: wp("18.191409020523956%"),
    minWidth: wp("18.191409020523956%"),
    height: hp("13.725490196078432%"),
    minHeight: hp("13.725490196078432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.70877393764789%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_89: {
    width: wp("13.880150235313076%"),
    minWidth: wp("13.880150235313076%"),
    height: hp("5.88235294117647%"),
    minHeight: hp("5.88235294117647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_90: {
    width: wp("8.096754303932627%"),
    minWidth: wp("8.096754303932627%"),
    minHeight: hp("5.88235294117647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_90: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_91: {
    width: wp("4.9421747049978375%"),
    minWidth: wp("4.9421747049978375%"),
    minHeight: hp("3.431372549019608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937975530315235%"),
    top: hp("2.4509803921568647%")
  },
  Text_322_91: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_92: {
    width: wp("18.191409020523956%"),
    minWidth: wp("18.191409020523956%"),
    minHeight: hp("4.411764705882353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.313725490196077%")
  },
  Text_322_92: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
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
