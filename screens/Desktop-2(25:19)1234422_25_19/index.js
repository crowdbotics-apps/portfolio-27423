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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc22/2120/b54f4727bfaf8224f95845fec9e0c05a"
        }}
        style={styles.ImageBackground_25_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc22/2120/b54f4727bfaf8224f95845fec9e0c05a"
        }}
        style={styles.ImageBackground_25_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
        }}
        style={styles.ImageBackground_25_22}
      />
      <View style={styles.View_25_23}>
        <Text style={styles.Text_25_23}>Shushant</Text>
      </View>
      <View style={styles.View_25_24}>
        <Text style={styles.Text_25_24}>+91- 7064006454</Text>
      </View>
      <View style={styles.View_25_25}>
        <View style={styles.View_25_26}>
          <View style={styles.View_25_27}>
            <Text style={styles.Text_25_27}>01.</Text>
          </View>
          <View style={styles.View_25_28}>
            <Text style={styles.Text_25_28}>Hi!</Text>
          </View>
        </View>
        <View style={styles.View_25_29}>
          <View style={styles.View_25_30}>
            <Text style={styles.Text_25_30}>02.</Text>
          </View>
          <View style={styles.View_25_31}>
            <Text style={styles.Text_25_31}>About me</Text>
          </View>
        </View>
        <View style={styles.View_25_32}>
          <View style={styles.View_25_33}>
            <Text style={styles.Text_25_33}>03.</Text>
          </View>
          <View style={styles.View_25_34}>
            <Text style={styles.Text_25_34}>Experience</Text>
          </View>
        </View>
        <View style={styles.View_25_35}>
          <View style={styles.View_25_36}>
            <Text style={styles.Text_25_36}>04.</Text>
          </View>
          <View style={styles.View_25_37}>
            <Text style={styles.Text_25_37}>Work</Text>
          </View>
        </View>
        <View style={styles.View_25_38}>
          <View style={styles.View_25_39}>
            <Text style={styles.Text_25_39}>05.</Text>
          </View>
          <View style={styles.View_25_40}>
            <Text style={styles.Text_25_40}>Contact me</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_25_41}>
        <Text style={styles.Text_25_41}>
          Hi, my name is Shushant. I’m a Product Designer and aspiring
          storyteller.{" "}
        </Text>
      </View>
      <View style={styles.View_25_77} />
      <View style={styles.View_25_42}>
        <Text style={styles.Text_25_42}>Experience</Text>
      </View>
      <View style={styles.View_25_43}>
        <Text style={styles.Text_25_43}>
          The next big thing is the one that makes the last big thing usable.
        </Text>
      </View>
      <View style={styles.View_25_80} />
      <View style={styles.View_25_81}>
        <Text style={styles.Text_25_81}>insert image here</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d27/b4ec/5329550b2f0cde70382c9c76abf6589d"
        }}
        style={styles.ImageBackground_25_83}
      />
      <View style={styles.View_25_82}>
        <Text style={styles.Text_25_82}>insert image here</Text>
      </View>
      <View style={styles.View_25_44}>
        <View style={styles.View_25_45}>
          <Text style={styles.Text_25_45}>
            I’m fearless in the face of adversity and passionate about unlocking
            the power in individuals, teams, and communities.
          </Text>
        </View>
        <View style={styles.View_25_46}>
          <Text style={styles.Text_25_46}>
            Over the past 2 years, I&#39;ve been working with Zeta to help solve
            design issues in Banking and Finance. Before that, I studied
            electronics and electrical engineering at KIIT, Bhubaneswar.
          </Text>
        </View>
        <View style={styles.View_25_47}>
          <Text style={styles.Text_25_47}>
            I’m currently based in Bangalore, IN and taking time to Learn,
            design, teach, and give back ☀️. I also like meeting people to talk
            about design, movies, music and ambitious product ideas over coffee
            or beers. If you do too, lets chat.
          </Text>
        </View>
      </View>
      <View style={styles.View_25_48}>
        <Text style={styles.Text_25_48}>
          -Blake Ross, Co-creator of Mozilla Firefox
        </Text>
      </View>
      <View style={styles.View_25_61}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8c5/414a/530538e9db1cfb256164efb3bb1c9a61"
          }}
          style={styles.ImageBackground_25_62}
        />
      </View>
      <View style={styles.View_25_49}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c62/0816/382eed4daa322f9656d3a3b7e3976cfd"
          }}
          style={styles.ImageBackground_25_50}
        />
        <View style={styles.View_25_52}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b00/d8d2/22f73d5fa52c65995482a483ece2005e"
            }}
            style={styles.ImageBackground_25_53}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d85f/8d0b/0b3131da3086f95c689a4fa1a82e1219"
          }}
          style={styles.ImageBackground_25_56}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/845e/6e97/1fd13fcb631ba2011bc8d5943bba7001"
          }}
          style={styles.ImageBackground_25_58}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d5/7e37/e2d2e48a8a251590b311679eee89d096"
        }}
        style={styles.ImageBackground_25_60}
      />
      <View style={styles.View_25_65}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
          }}
          style={styles.ImageBackground_25_66}
        />
      </View>
      <View style={styles.View_25_69}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
          }}
          style={styles.ImageBackground_25_70}
        />
      </View>
      <View style={styles.View_25_73}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
          }}
          style={styles.ImageBackground_25_74}
        />
      </View>
      <View style={styles.View_25_78} />
      <View style={styles.View_25_79}>
        <Text style={styles.Text_25_79}>insert image here</Text>
      </View>
      <View style={styles.View_25_84}>
        <View style={styles.View_25_85}>
          <Text style={styles.Text_25_85}>Apr 2019 -</Text>
        </View>
        <View style={styles.View_25_86}>
          <View style={styles.View_25_87}>
            <View style={styles.View_25_88}>
              <Text style={styles.Text_25_88}>Zeta Suite </Text>
            </View>
            <View style={styles.View_25_89}>
              <Text style={styles.Text_25_89}>Bangalore, India</Text>
            </View>
          </View>
          <View style={styles.View_25_90}>
            <Text style={styles.Text_25_90}>Product Designer </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_25_91}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
          }}
          style={styles.ImageBackground_25_92}
        />
        <View style={styles.View_25_93}>
          <View style={styles.View_25_94}>
            <Text style={styles.Text_25_94}>Aug 2018 - Mar 2019 </Text>
          </View>
          <View style={styles.View_25_95}>
            <View style={styles.View_25_96}>
              <View style={styles.View_25_97}>
                <Text style={styles.Text_25_97}>Appiness Interactive</Text>
              </View>
              <View style={styles.View_25_98}>
                <Text style={styles.Text_25_98}>Bangalore, India</Text>
              </View>
            </View>
            <View style={styles.View_25_99}>
              <Text style={styles.Text_25_99}>UX/UI Designer</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_25_100}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
          }}
          style={styles.ImageBackground_25_101}
        />
        <View style={styles.View_25_102}>
          <View style={styles.View_25_103}>
            <Text style={styles.Text_25_103}>Jun 2017 - Dec 2017 </Text>
          </View>
          <View style={styles.View_25_104}>
            <View style={styles.View_25_105}>
              <View style={styles.View_25_106}>
                <Text style={styles.Text_25_106}>Redbus</Text>
              </View>
              <View style={styles.View_25_107}>
                <Text style={styles.Text_25_107}>Remote</Text>
              </View>
            </View>
            <View style={styles.View_25_108}>
              <Text style={styles.Text_25_108}>UX/UI Designer- Intern</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_25_109} />
      <View style={styles.View_25_110}>
        <Text style={styles.Text_25_110}>Connect with me</Text>
      </View>
      <View style={styles.View_25_111}>
        <View style={styles.View_25_112}>
          <Text style={styles.Text_25_112}>Resume</Text>
        </View>
      </View>
      <View style={styles.View_25_113}>
        <View style={styles.View_25_114}>
          <Text style={styles.Text_25_114}>Download </Text>
        </View>
      </View>
      <View style={styles.View_25_115}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c62/0816/382eed4daa322f9656d3a3b7e3976cfd"
          }}
          style={styles.ImageBackground_25_116}
        />
        <View style={styles.View_25_118}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b00/d8d2/22f73d5fa52c65995482a483ece2005e"
            }}
            style={styles.ImageBackground_25_119}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d85f/8d0b/0b3131da3086f95c689a4fa1a82e1219"
          }}
          style={styles.ImageBackground_25_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/845e/6e97/1fd13fcb631ba2011bc8d5943bba7001"
          }}
          style={styles.ImageBackground_25_124}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("111.6120218579235%") },
  ImageBackground_25_20: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3332146538628473%"),
    top: hp("9.836065573770492%")
  },
  ImageBackground_25_21: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3332146538628473%"),
    top: hp("86.6120218579235%")
  },
  ImageBackground_25_22: {
    width: wp("47.91666666666667%"),
    minWidth: wp("47.91666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333214653862846%"),
    top: hp("190.43715846994536%")
  },
  View_25_23: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("3.278688524590164%")
  },
  Text_25_23: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_24: {
    width: wp("9.930555555555555%"),
    minWidth: wp("9.930555555555555%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.73611111111111%"),
    top: hp("3.278688524590164%")
  },
  Text_25_24: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_25: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.541666666666664%"),
    top: hp("3.825136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_26: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_27: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_25_27: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_28: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("0%")
  },
  Text_25_28: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_29: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111114%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_30: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_25_30: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_31: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("0%")
  },
  Text_25_31: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_32: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56944444444445%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_33: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_25_33: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_34: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0%")
  },
  Text_25_34: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_35: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.83333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_36: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_25_36: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_37: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333428%"),
    top: hp("0%")
  },
  Text_25_37: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_38: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.736111111111107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_39: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_25_39: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_40: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333428%"),
    top: hp("0%")
  },
  Text_25_40: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_41: {
    width: wp("53.888888888888886%"),
    minWidth: wp("53.888888888888886%"),
    minHeight: hp("35.24590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("19.672131147540984%")
  },
  Text_25_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_77: {
    width: wp("26.38888888888889%"),
    minWidth: wp("26.38888888888889%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("76.775956284153%"),
    backgroundColor: "rgba(218, 213, 208, 1)"
  },
  View_25_42: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("153.96174863387978%")
  },
  Text_25_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_43: {
    width: wp("26.944444444444443%"),
    minWidth: wp("26.944444444444443%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("64.75409836065575%")
  },
  Text_25_43: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_80: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26388888888889%"),
    top: hp("94.94535519125684%"),
    backgroundColor: "rgba(230, 125, 84, 1)"
  },
  View_25_81: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333334%"),
    top: hp("99.59016393442623%")
  },
  Text_25_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_25_83: {
    width: wp("19.375%"),
    minWidth: wp("19.375%"),
    height: hp("38.114754098360656%"),
    minHeight: hp("38.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.125%"),
    top: hp("16.80327868852459%")
  },
  View_25_82: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.708333333333336%"),
    top: hp("112.43169398907105%")
  },
  Text_25_82: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_44: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.708333333333336%"),
    top: hp("94.94535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_45: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_25_45: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_46: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.93442622950819%")
  },
  Text_25_46: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_47: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.42076502732239%")
  },
  Text_25_47: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_48: {
    width: wp("14.791666666666666%"),
    minWidth: wp("14.791666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("67.75956284153006%")
  },
  Text_25_48: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_61: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.05555555555556%"),
    top: hp("84.2896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_25_62: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248728434244839%")
  },
  View_25_49: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.5%"),
    top: hp("64.75409836065575%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_25_50: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_25_52: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_25_53: {
    width: wp("0.866666767332289%"),
    height: hp("1.7049177096841113%"),
    top: hp("0.7868852771696453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40000067816839646%")
  },
  ImageBackground_25_56: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_25_58: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%")
  },
  ImageBackground_25_60: {
    width: wp("138.125%"),
    minWidth: wp("138.125%"),
    height: hp("271.72131147540983%"),
    minHeight: hp("271.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.65277777777778%"),
    top: hp("-98.224043715847%")
  },
  View_25_65: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("177.8688524590164%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_25_66: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092895847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248728434244839%")
  },
  View_25_69: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("198.63387978142077%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_25_70: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248728434244839%")
  },
  View_25_73: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("219.39890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_25_74: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248728434244839%")
  },
  View_25_78: {
    width: wp("47.91666666666667%"),
    minWidth: wp("47.91666666666667%"),
    height: hp("59.97267759562842%"),
    minHeight: hp("59.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("245.08196721311478%"),
    backgroundColor: "rgba(218, 213, 208, 1)"
  },
  View_25_79: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("273.3606557377049%")
  },
  Text_25_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_84: {
    width: wp("32.5%"),
    minWidth: wp("32.5%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("176.22950819672133%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_85: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_25_85: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_86: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.125000000000004%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_87: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_88: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_25_88: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_89: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.777777777777779%"),
    top: hp("1.3661202185792263%")
  },
  Text_25_89: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_90: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601077%")
  },
  Text_25_90: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_91: {
    width: wp("66.0415522257487%"),
    minWidth: wp("66.0415522257487%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("196.9945355191257%")
  },
  ImageBackground_25_92: {
    width: wp("47.91666666666667%"),
    minWidth: wp("47.91666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.124881320529514%"),
    top: hp("14.207650273224004%")
  },
  View_25_93: {
    width: wp("39.791666666666664%"),
    minWidth: wp("39.791666666666664%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_94: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_25_94: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_95: {
    width: wp("21.666666666666668%"),
    minWidth: wp("21.666666666666668%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.125000000000004%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_96: {
    width: wp("21.666666666666668%"),
    minWidth: wp("21.666666666666668%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_97: {
    width: wp("14.51388888888889%"),
    minWidth: wp("14.51388888888889%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_25_97: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_98: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.069444444444443%"),
    top: hp("1.3661202185792263%")
  },
  Text_25_98: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_99: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601077%")
  },
  Text_25_99: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_100: {
    width: wp("66.0415522257487%"),
    minWidth: wp("66.0415522257487%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("217.75956284153006%")
  },
  ImageBackground_25_101: {
    width: wp("47.91666666666667%"),
    minWidth: wp("47.91666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.124881320529514%"),
    top: hp("14.207650273224033%")
  },
  View_25_102: {
    width: wp("29.65277777777778%"),
    minWidth: wp("29.65277777777778%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_103: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_25_103: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_104: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.63888888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_105: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_25_106: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_25_106: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_107: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.902777777777779%"),
    top: hp("1.3661202185792263%")
  },
  Text_25_107: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_108: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601077%")
  },
  Text_25_108: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_109: {
    width: wp("21.11111111111111%"),
    minWidth: wp("21.11111111111111%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.30555555555556%"),
    top: hp("238.52459016393445%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_25_110: {
    width: wp("11.944444444444445%"),
    minWidth: wp("11.944444444444445%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.52777777777777%"),
    top: hp("248.0874316939891%")
  },
  Text_25_110: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_111: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.52777777777777%"),
    top: hp("242.89617486338798%"),
    backgroundColor: "rgba(47, 47, 48, 1)"
  },
  View_25_112: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("0.5464480874316848%")
  },
  Text_25_112: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_25_113: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.52777777777777%"),
    top: hp("273.22404371584696%"),
    backgroundColor: "rgba(47, 107, 221, 1)"
  },
  View_25_114: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("0.5464480874317701%")
  },
  Text_25_114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_115: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.52777777777777%"),
    top: hp("281.1475409836066%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_25_116: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_25_118: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_25_119: {
    width: wp("0.866666767332289%"),
    height: hp("1.7049177096841113%"),
    top: hp("0.7868865800033973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4000006781684107%")
  },
  ImageBackground_25_122: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.000000000000014%")
  },
  ImageBackground_25_124: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.500000000000014%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
