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
        style={styles.ImageBackground_3_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc22/2120/b54f4727bfaf8224f95845fec9e0c05a"
        }}
        style={styles.ImageBackground_9_36}
      />
      <View style={styles.View_3_24}>
        <Text style={styles.Text_3_24}>Shushant</Text>
      </View>
      <View style={styles.View_321_0} />
      <View style={styles.View_4_16}>
        <Text style={styles.Text_4_16}>+91- 7064006454</Text>
      </View>
      <View style={styles.View_4_18}>
        <View style={styles.View_4_19}>
          <View style={styles.View_4_20}>
            <Text style={styles.Text_4_20}>01.</Text>
          </View>
          <View style={styles.View_4_21}>
            <Text style={styles.Text_4_21}>Hi!</Text>
          </View>
        </View>
        <View style={styles.View_4_22}>
          <View style={styles.View_4_23}>
            <Text style={styles.Text_4_23}>02.</Text>
          </View>
          <View style={styles.View_4_24}>
            <Text style={styles.Text_4_24}>About me</Text>
          </View>
        </View>
        <View style={styles.View_4_25}>
          <View style={styles.View_4_26}>
            <Text style={styles.Text_4_26}>03.</Text>
          </View>
          <View style={styles.View_4_27}>
            <Text style={styles.Text_4_27}>Playground</Text>
          </View>
        </View>
        <View style={styles.View_4_28}>
          <View style={styles.View_4_29}>
            <Text style={styles.Text_4_29}>04.</Text>
          </View>
          <View style={styles.View_4_30}>
            <Text style={styles.Text_4_30}>Work</Text>
          </View>
        </View>
        <View style={styles.View_4_31}>
          <View style={styles.View_4_32}>
            <Text style={styles.Text_4_32}>05.</Text>
          </View>
          <View style={styles.View_4_33}>
            <Text style={styles.Text_4_33}>Contact me</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_34}>
        <Text style={styles.Text_4_34}>
          Hi, my name is Shushant. I’m a Product Designer and an aspiring
          storyteller.{" "}
        </Text>
      </View>
      <View style={styles.View_14_1}>
        <Text style={styles.Text_14_1}>Experience</Text>
      </View>
      <View style={styles.View_9_2}>
        <Text style={styles.Text_9_2}>
          The next big thing is the one that makes the last big thing usable.
        </Text>
      </View>
      <View style={styles.View_13_3}>
        <View style={styles.View_11_0}>
          <Text style={styles.Text_11_0}>
            I&#39;m relentless in the face of adversity and passionate about
            unlocking the power in individuals, teams, and communities.
          </Text>
        </View>
        <View style={styles.View_13_0}>
          <Text style={styles.Text_13_0}>
            Over the past 2 years, I&#39;ve been working with Zeta to help and
            solve design issues in Banking and Finance. Before that, I studied
            electronics and electrical engineering at KIIT, Bhubaneswar.
          </Text>
        </View>
        <View style={styles.View_13_1}>
          <Text style={styles.Text_13_1}>
            I’m currently based in Bangalore, IN and taking time to Learn,
            design, teach, and give back ☀️. I also like meeting people to talk
            about design, movies, music and ambitious product ideas over coffee
            or beers. If you do too, lets chat.
          </Text>
        </View>
      </View>
      <View style={styles.View_9_3}>
        <Text style={styles.Text_9_3}>
          -Blake Ross, Co-creator of Mozilla Firefox
        </Text>
      </View>
      <View style={styles.View_9_25}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ea/e4ba/7b14efc018b9ada2f1aab9af8f9c8863"
          }}
          style={styles.ImageBackground_9_26}
        />
        <View style={styles.View_9_28}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c1/32a7/1f74ba101c0b20fc493a825f0e70c651"
            }}
            style={styles.ImageBackground_9_29}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cad/ed24/6447821d5f910b0d3b5816dd8b1aea70"
          }}
          style={styles.ImageBackground_9_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8281/5046/0368939e54ec4bb67ba4f9177d38a302"
          }}
          style={styles.ImageBackground_9_34}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa61/862d/4a674caa9884183da45e96c9f2424d5a"
        }}
        style={styles.ImageBackground_9_37}
      />
      <View style={styles.View_9_42}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8c5/414a/530538e9db1cfb256164efb3bb1c9a61"
          }}
          style={styles.ImageBackground_9_43}
        />
      </View>
      <View style={styles.View_23_15} />
      <View style={styles.View_23_26}>
        <Text style={styles.Text_23_26}>insert image here</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d27/b4ec/5329550b2f0cde70382c9c76abf6589d"
        }}
        style={styles.ImageBackground_13_6}
      />
      <View style={styles.View_33_3}>
        <View style={styles.View_33_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
            }}
            style={styles.ImageBackground_16_10}
          />
          <View style={styles.View_16_11}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
              }}
              style={styles.ImageBackground_16_12}
            />
          </View>
          <View style={styles.View_16_7}>
            <View style={styles.View_16_5}>
              <Text style={styles.Text_16_5}>Apr 2019 -</Text>
            </View>
            <View style={styles.View_14_13}>
              <View style={styles.View_14_14}>
                <View style={styles.View_14_15}>
                  <Text style={styles.Text_14_15}>Zeta Suite </Text>
                </View>
                <View style={styles.View_14_16}>
                  <Text style={styles.Text_14_16}>Bangalore, India</Text>
                </View>
              </View>
              <View style={styles.View_14_17}>
                <Text style={styles.Text_14_17}>Product Designer </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_33_1}>
          <View style={styles.View_16_15}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
              }}
              style={styles.ImageBackground_16_16}
            />
          </View>
          <View style={styles.View_23_0}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
              }}
              style={styles.ImageBackground_16_19}
            />
            <View style={styles.View_16_8}>
              <View style={styles.View_16_6}>
                <Text style={styles.Text_16_6}>Aug 2018 - Mar 2019 </Text>
              </View>
              <View style={styles.View_16_0}>
                <View style={styles.View_16_1}>
                  <View style={styles.View_16_2}>
                    <Text style={styles.Text_16_2}>Appiness Interactive</Text>
                  </View>
                  <View style={styles.View_16_3}>
                    <Text style={styles.Text_16_3}>Bangalore, India</Text>
                  </View>
                </View>
                <View style={styles.View_16_4}>
                  <Text style={styles.Text_16_4}>Ace UX/UI Designer</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_33_2}>
          <View style={styles.View_23_10}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec76/b261/4a0b0605d047b4340be7be9e65e05d65"
              }}
              style={styles.ImageBackground_23_11}
            />
          </View>
          <View style={styles.View_23_1}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7dd0/80fd6ece1d95463a40d04bf826d4c9b2"
              }}
              style={styles.ImageBackground_23_2}
            />
            <View style={styles.View_23_3}>
              <View style={styles.View_23_4}>
                <Text style={styles.Text_23_4}>Jun 2017 - Dec 2017 </Text>
              </View>
              <View style={styles.View_23_5}>
                <View style={styles.View_23_6}>
                  <View style={styles.View_23_7}>
                    <Text style={styles.Text_23_7}>Redbus</Text>
                  </View>
                  <View style={styles.View_23_8}>
                    <Text style={styles.Text_23_8}>Remote</Text>
                  </View>
                </View>
                <View style={styles.View_23_9}>
                  <Text style={styles.Text_23_9}>UX/UI Designer- Intern</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_23_17} />
      <View style={styles.View_25_127}>
        <Text style={styles.Text_25_127}>
          I’m always excited to discuss and learn more about various design
          &amp; research opportunities to create a more meaningful, inclusive
          experience for everyone. Email me shushant0657@gmail.com
        </Text>
      </View>
      <View style={styles.View_23_18}>
        <Text style={styles.Text_23_18}>Connect with me</Text>
      </View>
      <View style={styles.View_23_25}>
        <View style={styles.View_23_20}>
          <Text style={styles.Text_23_20}>Resume</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("27_55"))
        }
      >
        <View style={styles.View_25_11}>
          <View style={styles.View_25_12}>
            <Text style={styles.Text_25_12}>Download </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_25_0}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ea/e4ba/7b14efc018b9ada2f1aab9af8f9c8863"
          }}
          style={styles.ImageBackground_25_1}
        />
        <View style={styles.View_25_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c1/32a7/1f74ba101c0b20fc493a825f0e70c651"
            }}
            style={styles.ImageBackground_25_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cad/ed24/6447821d5f910b0d3b5816dd8b1aea70"
          }}
          style={styles.ImageBackground_25_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8281/5046/0368939e54ec4bb67ba4f9177d38a302"
          }}
          style={styles.ImageBackground_25_9}
        />
      </View>
      <View style={styles.View_9_49} />
      <View style={styles.View_118_10}>
        <View style={styles.View_118_11} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f021/8e59/170360000c0e71e4c55a234a295642ed"
          }}
          style={styles.ImageBackground_118_12}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("339.8907103825137%") },
  ImageBackground_3_23: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3332188924153647%"),
    top: hp("9.836065573770492%")
  },
  ImageBackground_9_36: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3332188924153647%"),
    top: hp("86.6120218579235%")
  },
  View_3_24: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("3.278688524590164%")
  },
  Text_3_24: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_0: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25%"),
    top: hp("2.73224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_16: {
    width: wp("9.930555555555555%"),
    minWidth: wp("9.930555555555555%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.73611111111111%"),
    top: hp("3.278688524590164%")
  },
  Text_4_16: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_18: {
    width: wp("33.125%"),
    minWidth: wp("33.125%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.541666666666664%"),
    top: hp("3.825136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_19: {
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
  View_4_20: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_4_20: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_21: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("0%")
  },
  Text_4_21: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_22: {
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
  View_4_23: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_4_23: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_24: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("0%")
  },
  Text_4_24: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_25: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56944444444445%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_26: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_4_26: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_27: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0%")
  },
  Text_4_27: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_28: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.041666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_29: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_4_29: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_30: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("0%")
  },
  Text_4_30: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_31: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_32: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316942%")
  },
  Text_4_32: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_33: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("0%")
  },
  Text_4_33: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_34: {
    width: wp("56.875%"),
    minWidth: wp("56.875%"),
    minHeight: hp("35.24590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("19.672131147540984%")
  },
  Text_4_34: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.333333333333336%"),
    top: hp("153.96174863387978%")
  },
  Text_14_1: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_2: {
    width: wp("26.944444444444443%"),
    minWidth: wp("26.944444444444443%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("64.75409836065575%")
  },
  Text_9_2: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_3: {
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
  View_11_0: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_11_0: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_0: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.93442622950819%")
  },
  Text_13_0: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1: {
    width: wp("32.916666666666664%"),
    minWidth: wp("32.916666666666664%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.42076502732239%")
  },
  Text_13_1: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_3: {
    width: wp("14.791666666666666%"),
    minWidth: wp("14.791666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("67.75956284153006%")
  },
  Text_9_3: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_25: {
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
  ImageBackground_9_26: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_28: {
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
  ImageBackground_9_29: {
    width: wp("0.866666767332289%"),
    height: hp("1.7049177096841113%"),
    top: hp("0.7868852771696453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40000067816839646%")
  },
  ImageBackground_9_32: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_34: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%")
  },
  ImageBackground_9_37: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("81.55737704918032%")
  },
  View_9_42: {
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
  ImageBackground_9_43: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248728434244839%")
  },
  View_23_15: {
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
  View_23_26: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("273.3606557377049%")
  },
  Text_23_26: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 17,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_6: {
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
  View_33_3: {
    width: wp("66.0415522257487%"),
    minWidth: wp("66.0415522257487%"),
    height: hp("55.73770491803278%"),
    minHeight: hp("55.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.208333333333332%"),
    top: hp("176.22950819672133%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_0: {
    width: wp("66.0415522257487%"),
    minWidth: wp("66.0415522257487%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_16_10: {
    width: wp("47.91666666666667%"),
    minWidth: wp("47.91666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.124885559082035%"),
    top: hp("14.207650273224033%")
  },
  View_16_11: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.986111111111114%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_16_12: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092895847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248749627007442%")
  },
  View_16_7: {
    width: wp("32.5%"),
    minWidth: wp("32.5%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_5: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_5: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_13: {
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
  View_14_14: {
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
  View_14_15: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_15: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_16: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.777777777777779%"),
    top: hp("1.3661202185792263%")
  },
  Text_14_16: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_17: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601077%")
  },
  Text_14_17: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_1: {
    width: wp("66.0415522257487%"),
    minWidth: wp("66.0415522257487%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.765027322404364%")
  },
  View_16_15: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.986111111111114%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_16_16: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248749627007442%")
  },
  View_23_0: {
    width: wp("66.0415522257487%"),
    minWidth: wp("66.0415522257487%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_16_19: {
    width: wp("47.91666666666667%"),
    minWidth: wp("47.91666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.124885559082035%"),
    top: hp("14.207650273224004%")
  },
  View_16_8: {
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
  View_16_6: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_6: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_0: {
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
  View_16_1: {
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
  View_16_2: {
    width: wp("14.51388888888889%"),
    minWidth: wp("14.51388888888889%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_2: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_3: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.069444444444443%"),
    top: hp("1.3661202185792263%")
  },
  Text_16_3: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_4: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601077%")
  },
  Text_16_4: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_2: {
    width: wp("66.0415522257487%"),
    minWidth: wp("66.0415522257487%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.53005464480873%")
  },
  View_23_10: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.986111111111114%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_11: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248749627007442%")
  },
  View_23_1: {
    width: wp("66.0415522257487%"),
    minWidth: wp("66.0415522257487%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_2: {
    width: wp("47.91666666666667%"),
    minWidth: wp("47.91666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.124885559082035%"),
    top: hp("14.207650273224033%")
  },
  View_23_3: {
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
  View_23_4: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_23_4: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_5: {
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
  View_23_6: {
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
  View_23_7: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_23_7: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_8: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.902777777777779%"),
    top: hp("1.3661202185792263%")
  },
  Text_23_8: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_9: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601077%")
  },
  Text_23_9: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_17: {
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
  View_25_127: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.52777777777777%"),
    top: hp("253.41530054644807%")
  },
  Text_25_127: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_18: {
    width: wp("11.944444444444445%"),
    minWidth: wp("11.944444444444445%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.52777777777777%"),
    top: hp("248.0874316939891%")
  },
  Text_23_18: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_25: {
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
  View_23_20: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("0.5464480874316848%")
  },
  Text_23_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_25_11: {
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
  View_25_12: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("0.5464480874317701%")
  },
  Text_25_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_0: {
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
  ImageBackground_25_1: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_25_3: {
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
  ImageBackground_25_4: {
    width: wp("0.866666767332289%"),
    height: hp("1.7049177096841113%"),
    top: hp("0.7868865800033973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4000006781684107%")
  },
  ImageBackground_25_7: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.000000000000014%")
  },
  ImageBackground_25_9: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.500000000000014%")
  },
  View_9_49: {
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
  View_118_10: {
    width: wp("26.73611111111111%"),
    minWidth: wp("26.73611111111111%"),
    height: hp("49.59016393442623%"),
    minHeight: hp("49.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("106.69398907103825%")
  },
  View_118_11: {
    width: wp("26.73611111111111%"),
    minWidth: wp("26.73611111111111%"),
    height: hp("49.59016393442623%"),
    minHeight: hp("49.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_118_12: {
    width: wp("26.73611111111111%"),
    minWidth: wp("26.73611111111111%"),
    height: hp("49.59016393442623%"),
    minHeight: hp("49.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
