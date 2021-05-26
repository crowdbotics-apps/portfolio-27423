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
      <View style={styles.View_40_21}>
        <View style={styles.View_40_20}>
          <View style={styles.View_37_27}>
            <Text style={styles.Text_37_27}>work experience</Text>
          </View>
          <View style={styles.View_40_2}>
            <View style={styles.View_37_28}>
              <View style={styles.View_37_29}>
                <Text style={styles.Text_37_29}>
                  Zeta Suite - Product Designer
                </Text>
              </View>
              <View style={styles.View_37_30}>
                <View style={styles.View_37_32}>
                  <Text style={styles.Text_37_32}>Apr 2019 - Present</Text>
                </View>
                <View style={styles.View_37_31}>
                  <Text style={styles.Text_37_31}>
                    Working closely with a design group on large-scale products
                    for different countries and create Finance-First products
                    for banks and other financial institutions.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_37_33}>
              <View style={styles.View_37_34}>
                <Text style={styles.Text_37_34}>
                  Appiness Interactive - Ace UX/UI Designer
                </Text>
              </View>
              <View style={styles.View_37_35}>
                <View style={styles.View_37_36}>
                  <Text style={styles.Text_37_36}>Aug 2018 - Mar 2019</Text>
                </View>
                <View style={styles.View_37_37}>
                  <Text style={styles.Text_37_37}>
                    In my tenure here, I have worked on 6 different products,
                    with the most recent ones being the electric mobility
                    solutions, school administration software, and the next-gen
                    lifestyle app.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_40_25}>
              <View style={styles.View_40_26}>
                <Text style={styles.Text_40_26}>RedBus - UX Intern</Text>
              </View>
              <View style={styles.View_40_27}>
                <View style={styles.View_40_28}>
                  <Text style={styles.Text_40_28}>Jun 2017 - Dec 2017 </Text>
                </View>
                <View style={styles.View_40_29}>
                  <Text style={styles.Text_40_29}>
                    Iterated on screens and design system components for the
                    Payment Implementation Guide based on feedback from the
                    Product Experience Design team and key stakeholders.
                    Conducted user surveys to capture qualitative &amp;
                    quantitative data and generate insights.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_40_19}>
          <View style={styles.View_40_0}>
            <Text style={styles.Text_40_0}>involvement</Text>
          </View>
          <View style={styles.View_40_4}>
            <View style={styles.View_40_5}>
              <View style={styles.View_40_6}>
                <Text style={styles.Text_40_6}>Mycaptain - Design Mentor</Text>
              </View>
              <View style={styles.View_40_7}>
                <View style={styles.View_40_8}>
                  <Text style={styles.Text_40_8}>Jan 2020 - Present</Text>
                </View>
                <View style={styles.View_40_9}>
                  <Text style={styles.Text_40_9}>
                    Guiding aspiring designers on breaking into the design
                    industry and made design more accessible by organizing
                    relevant educational workshops, speaker events, and
                    fostering an open design community.{" "}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_40_10}>
              <View style={styles.View_40_11}>
                <Text style={styles.Text_40_11}>
                  StartupManch Inc. - Design Lead &amp; Instructor
                </Text>
              </View>
              <View style={styles.View_40_12}>
                <View style={styles.View_40_13}>
                  <Text style={styles.Text_40_13}>Nov 2019 - Present</Text>
                </View>
                <View style={styles.View_40_14}>
                  <Text style={styles.Text_40_14}>
                    Leading Design Team in branding, web design, and experience
                    design in cross-functional collaboration with the Tech and
                    Marketing teams for MSME and non-profit organisation.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_40_22}>
        <View style={styles.View_214_11}>
          <View style={styles.View_40_17}>
            <View style={styles.View_27_109}>
              <Text style={styles.Text_27_109}>shushant kumar</Text>
            </View>
            <View style={styles.View_37_0}>
              <Text style={styles.Text_37_0}>shushant0657.in</Text>
            </View>
            <View style={styles.View_37_1}>
              <Text style={styles.Text_37_1}>
                shushant0657@gmail.com 7064006454 Bangalore, IN
              </Text>
            </View>
          </View>
          <View style={styles.View_214_0}>
            <View style={styles.View_214_1}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f0/8c57/900d452c009441046c73a4cb12480dc1"
                }}
                style={styles.ImageBackground_214_2}
              />
              <View style={styles.View_214_13}>
                <Text style={styles.Text_214_13}>f</Text>
              </View>
            </View>
            <View style={styles.View_214_3}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c1/32a7/1f74ba101c0b20fc493a825f0e70c651"
                }}
                style={styles.ImageBackground_214_4}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cad/ed24/6447821d5f910b0d3b5816dd8b1aea70"
              }}
              style={styles.ImageBackground_214_7}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8281/5046/0368939e54ec4bb67ba4f9177d38a302"
              }}
              style={styles.ImageBackground_214_9}
            />
          </View>
        </View>
        <View style={styles.View_40_16}>
          <View style={styles.View_37_4}>
            <Text style={styles.Text_37_4}>education</Text>
          </View>
          <View style={styles.View_37_16}>
            <View style={styles.View_37_15}>
              <View style={styles.View_37_5}>
                <Text style={styles.Text_37_5}>
                  KIIT University, Odisha, IN
                </Text>
              </View>
              <View style={styles.View_37_14}>
                <View style={styles.View_37_6}>
                  <Text style={styles.Text_37_6}>
                    B.Tech Electronics &amp; Electrical Engineering
                  </Text>
                </View>
                <View style={styles.View_37_7}>
                  <Text style={styles.Text_37_7}>
                    GPA: 7.3/10 Class of 2019
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_37_13}>
              <View style={styles.View_37_11}>
                <Text style={styles.Text_37_11}>
                  Govind Vidyalaya, Jamshedpur, IN
                </Text>
              </View>
              <View style={styles.View_37_12}>
                <View style={styles.View_37_9}>
                  <Text style={styles.Text_37_9}>
                    Central Board of Secondary Education School of Science
                  </Text>
                </View>
                <View style={styles.View_37_10}>
                  <Text style={styles.Text_37_10}>
                    Percentage: 82% Class of 2015
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_40_15}>
          <View style={styles.View_37_17}>
            <Text style={styles.Text_37_17}>skills</Text>
          </View>
          <View style={styles.View_40_1}>
            <View style={styles.View_37_18}>
              <View style={styles.View_37_19}>
                <Text style={styles.Text_37_19}>Design</Text>
              </View>
              <View style={styles.View_37_20}>
                <View style={styles.View_37_21}>
                  <Text style={styles.Text_37_21}>
                    User Experience Design, UI Design, Visual Design, Product
                    Design, Branding, User Research and Testing, Wireframing,
                    Rapid Prototyping, Usability Testing, Sketching, Design
                    Thinking, Web Development, Information Architecture, Design
                    Systems
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_37_23}>
              <View style={styles.View_37_24}>
                <Text style={styles.Text_37_24}>Toolbox</Text>
              </View>
              <View style={styles.View_37_25}>
                <View style={styles.View_37_26}>
                  <Text style={styles.Text_37_26}>
                    Figma, Adobe Creative Suite, Sketch, InVision, Principle,
                    Marvel, Framer, Pixate.{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_214_14}>
        <Text style={styles.Text_214_14}>0</Text>
      </View>
      <View style={styles.View_214_17}>
        <Text style={styles.Text_214_17}>0</Text>
      </View>
      <View style={styles.View_214_19}>
        <Text style={styles.Text_214_19}>0</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("108.19672131147541%") },
  View_40_21: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("96.99453551912568%"),
    minHeight: hp("96.99453551912568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.790849673202615%"),
    top: hp("4.371584699453552%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_20: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_27: {
    width: wp("27.941176470588236%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_27: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_2: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("49.45355191256831%"),
    minHeight: hp("49.45355191256831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_28: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_29: {
    width: wp("50.98039215686274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_29: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_30: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590163933%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_32: {
    width: wp("50.98039215686274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_32: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_31: {
    width: wp("50.98039215686274%"),
    top: hp("3.4153005464480852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_31: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_33: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.027322404371585%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_34: {
    width: wp("50.98039215686274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_34: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_35: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590163915%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_36: {
    width: wp("50.98039215686274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_36: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_37: {
    width: wp("50.98039215686274%"),
    top: hp("3.4153005464480906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_37: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_25: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_26: {
    width: wp("50.98039215686274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_26: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_27: {
    width: wp("51.633986928104584%"),
    minWidth: wp("51.633986928104584%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_28: {
    width: wp("50.98039215686274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_28: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_29: {
    width: wp("51.633986928104584%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_29: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_19: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("37.02185792349727%"),
    minHeight: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.97267759562841%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_0: {
    width: wp("21.07843137254902%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_0: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_4: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_5: {
    width: wp("47.05882352941176%"),
    minWidth: wp("47.05882352941176%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_6: {
    width: wp("50.98039215686274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_6: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_7: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_8: {
    width: wp("50.98039215686274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_8: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_9: {
    width: wp("50.98039215686274%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_9: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_10: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.62295081967214%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_11: {
    width: wp("44.11764705882353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_11: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_12: {
    width: wp("50.98039215686274%"),
    minWidth: wp("50.98039215686274%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_13: {
    width: wp("19.11764705882353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_13: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_14: {
    width: wp("50.98039215686274%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_40_14: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_22: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("100.27322404371584%"),
    minHeight: hp("100.27322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.228758169934641%"),
    top: hp("4.371584699453552%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_214_11: {
    width: wp("32.35294117647059%"),
    minWidth: wp("32.35294117647059%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_17: {
    width: wp("32.35294117647059%"),
    minWidth: wp("32.35294117647059%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_109: {
    width: wp("32.35294117647059%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_27_109: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_0: {
    width: wp("16.666666666666664%"),
    top: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_0: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_1: {
    width: wp("26.143790849673206%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_1: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_0: {
    width: wp("21.568627450980394%"),
    minWidth: wp("21.568627450980394%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.486338797814206%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_214_1: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_214_2: {
    width: wp("1.1764707128986034%"),
    height: hp("1.967213192924124%"),
    top: hp("0.655744375426913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2549107370812909%")
  },
  View_214_13: {
    width: wp("1.3071895424836601%"),
    top: hp("-0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3071895424836608%")
  },
  Text_214_13: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_3: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.88235294117647%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_214_4: {
    width: wp("2.0392159231347975%"),
    height: hp("1.7049177096841113%"),
    top: hp("0.786886580003415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9411780662785958%")
  },
  ImageBackground_214_7: {
    width: wp("3.9215686274509802%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.764705882352942%")
  },
  ImageBackground_214_9: {
    width: wp("3.9215686274509802%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.647058823529413%")
  },
  View_40_16: {
    width: wp("32.6797385620915%"),
    minWidth: wp("32.6797385620915%"),
    height: hp("33.7431693989071%"),
    minHeight: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.13661202185792%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_4: {
    width: wp("16.830065359477125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_4: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_16: {
    width: wp("32.6797385620915%"),
    minWidth: wp("32.6797385620915%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_15: {
    width: wp("28.921568627450984%"),
    minWidth: wp("28.921568627450984%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_5: {
    width: wp("25.326797385620914%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_5: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_14: {
    width: wp("28.921568627450984%"),
    minWidth: wp("28.921568627450984%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_6: {
    width: wp("28.921568627450984%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_6: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_7: {
    width: wp("11.27450980392157%"),
    top: hp("5.464480874316941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_7: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_13: {
    width: wp("32.6797385620915%"),
    minWidth: wp("32.6797385620915%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.89071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_11: {
    width: wp("32.6797385620915%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_11: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_12: {
    width: wp("31.5359477124183%"),
    minWidth: wp("31.5359477124183%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_9: {
    width: wp("31.5359477124183%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_9: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_10: {
    width: wp("13.562091503267974%"),
    top: hp("5.464480874316948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_10: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_15: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("37.02185792349727%"),
    minHeight: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.25136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_17: {
    width: wp("8.986928104575163%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_17: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_1: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_18: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_19: {
    width: wp("6.862745098039216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_19: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_20: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_21: {
    width: wp("33.33333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_21: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_23: {
    width: wp("28.26797385620915%"),
    minWidth: wp("28.26797385620915%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.901639344262293%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_24: {
    width: wp("7.516339869281046%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_24: {
    color: "rgba(230, 125, 84, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_25: {
    width: wp("28.26797385620915%"),
    minWidth: wp("28.26797385620915%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_26: {
    width: wp("28.26797385620915%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_37_26: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_14: {
    width: wp("2.1241830065359477%"),
    minWidth: wp("2.1241830065359477%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.091503267973856%"),
    top: hp("21.311475409836063%")
  },
  Text_214_14: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_17: {
    width: wp("2.1241830065359477%"),
    minWidth: wp("2.1241830065359477%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.973856209150327%"),
    top: hp("21.584699453551913%")
  },
  Text_214_17: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_19: {
    width: wp("2.1241830065359477%"),
    minWidth: wp("2.1241830065359477%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.856209150326798%"),
    top: hp("21.584699453551913%")
  },
  Text_214_19: {
    fontSize: 18,
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
