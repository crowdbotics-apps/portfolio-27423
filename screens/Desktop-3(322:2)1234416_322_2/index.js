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
        style={styles.ImageBackground_322_3}
      />
      <View style={styles.View_322_24}>
        <Text style={styles.Text_322_24}>
          Hi, my name is Shushant. I’m a Product Designer and an aspiring
          storyteller.{" "}
        </Text>
      </View>
      <View style={styles.View_322_26}>
        <Text style={styles.Text_322_26}>
          The next big thing is the one that makes the last big thing usable.
        </Text>
      </View>
      <View style={styles.View_322_31}>
        <Text style={styles.Text_322_31}>
          -Blake Ross, Co-creator of Mozilla Firefox
        </Text>
      </View>
      <View style={styles.View_322_32}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ea/e4ba/7b14efc018b9ada2f1aab9af8f9c8863"
          }}
          style={styles.ImageBackground_322_33}
        />
        <View style={styles.View_322_35}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c1/32a7/1f74ba101c0b20fc493a825f0e70c651"
            }}
            style={styles.ImageBackground_322_36}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cad/ed24/6447821d5f910b0d3b5816dd8b1aea70"
          }}
          style={styles.ImageBackground_322_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8281/5046/0368939e54ec4bb67ba4f9177d38a302"
          }}
          style={styles.ImageBackground_322_41}
        />
      </View>
      <View style={styles.View_322_44}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8c5/414a/530538e9db1cfb256164efb3bb1c9a61"
          }}
          style={styles.ImageBackground_322_45}
        />
      </View>
      <View style={styles.View_381_1} />
      <View style={styles.View_336_4}>
        <View style={styles.View_336_0} />
      </View>
      <View style={styles.View_340_47}>
        <View style={styles.View_340_40} />
        <View style={styles.View_340_41}>
          <View style={styles.View_340_42} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a79/49a4/8f9285311ee6b3f28be98ad210358a5c"
            }}
            style={styles.ImageBackground_340_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d998/24de/8072a2b1e03fc95cbdfc9f91bbe8fa2f"
            }}
            style={styles.ImageBackground_340_46}
          />
        </View>
      </View>
      <View style={styles.View_340_52} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75c5/1410/3d7dcc09b0c15712ff2e2ac88d252f0b"
        }}
        style={styles.ImageBackground_381_2}
      />
      <View style={styles.View_349_30} />
      <View style={styles.View_363_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b9/a64a/6b8f3385752078800d5ee233301208cb"
          }}
          style={styles.ImageBackground_363_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4012/c3a9/b5905c98279ab56d1661ffbe14d6ad6b"
          }}
          style={styles.ImageBackground_363_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/979e/2976/168478621ec7ebd10325e8ae0c88ef0c"
          }}
          style={styles.ImageBackground_363_9}
        />
      </View>
      <View style={styles.View_345_4}>
        <View style={styles.View_345_5}>
          <Text style={styles.Text_345_5}>
            Designing and Accelerating the world towards invisible payments
          </Text>
        </View>
        <View style={styles.View_345_6}>
          <Text style={styles.Text_345_6}>★★★★★ 4.4</Text>
        </View>
        <View style={styles.View_345_7}>
          <Text style={styles.Text_345_7}>
            At Zeta, we are rethinking payments from core to the edge. The
            algorithms to form factors. The applications to solutions. Led by
            the vision to make payments invisible and seamless, Zeta has built a
            modern stack for Financial Institutions (FIs) for debit, credit,
            prepaid, loans, authentication and Fraud and Risk Management (FRM).
          </Text>
        </View>
        <View style={styles.View_345_8}>
          <Text style={styles.Text_345_8}>Check it out →</Text>
        </View>
      </View>
      <View style={styles.View_348_14}>
        <View style={styles.View_348_15}>
          <Text style={styles.Text_348_15}>Cytopot App</Text>
        </View>
        <View style={styles.View_348_16}>
          <Text style={styles.Text_348_16}>★★★★★ 4.4</Text>
        </View>
        <View style={styles.View_348_17}>
          <Text style={styles.Text_348_17}>
            Cytopot is an innovative healthcare ecosystem with an aim to
            streamline health care services across the country. So its vision is
            to create digital healthcare ecosystem so that patients and
            doctors/healthcare providers can do their jobs/requirements easily.{" "}
          </Text>
        </View>
        <View style={styles.View_348_18}>
          <Text style={styles.Text_348_18}>Read the full case study →</Text>
        </View>
      </View>
      <View style={styles.View_340_53}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d248/ab27/57dd2b3f2405d2e4a32d567fe8d44c46"
          }}
          style={styles.ImageBackground_340_54}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0646/cd39/905f5448101406d1499ec4e15bda1d20"
          }}
          style={styles.ImageBackground_340_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0683/4305/98e05020e20e6fbc962c828e854cb116"
          }}
          style={styles.ImageBackground_340_58}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32cd/de2f/517b1ed348df737f3afedc802cae8eaf"
          }}
          style={styles.ImageBackground_340_59}
        />
      </View>
      <View style={styles.View_348_13}>
        <View style={styles.View_348_3} />
        <View style={styles.View_348_4}>
          <View style={styles.View_348_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7159/b138/5ffb78c99d28b1c6cc0220fac666e65e"
              }}
              style={styles.ImageBackground_348_6}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_379_0}>
        <View style={styles.View_363_14}>
          <View style={styles.View_363_15}>
            <Text style={styles.Text_363_15}>Zeta Banking</Text>
          </View>
          <View style={styles.View_363_17}>
            <Text style={styles.Text_363_17}>For Zeta India</Text>
          </View>
          <View style={styles.View_364_1}>
            <Text style={styles.Text_364_1}>
              Banking and payment systems have not evolved with the Internet. At
              Zeta, we intend to reimagine the world of banking by rethinking
              the landscape from the ground-up and making payments invisible.{" "}
            </Text>
          </View>
          <View style={styles.View_363_18}>
            <Text style={styles.Text_363_18}>Read the full case study →</Text>
          </View>
        </View>
        <View style={styles.View_363_19}>
          <View style={styles.View_363_20} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/413a/bef5/51ac086204ff3e97c9004bbf775175a7"
            }}
            style={styles.ImageBackground_364_4}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ee5/143d/88e1f6d5f8d95a2a056a7b5e93e72d7d"
        }}
        style={styles.ImageBackground_349_29}
      />
      <View style={styles.View_381_11}>
        <View style={styles.View_381_13}>
          <View style={styles.View_381_9}>
            <Text style={styles.Text_381_9}>MyCaptain Design Workshops</Text>
          </View>
          <View style={styles.View_381_10}>
            <Text style={styles.Text_381_10}>
              Design( Graphic Design &amp; UX/UI workshop by MyCaptain team and
              it’s split in a 1h30 session for 8 days in a month where mentees
              learn about user research, process, wireframes and lot more about
              design. All they needed to bring were their energy to learn new
              and intresting skills., which could be anything from an app, a
              video game or even a paper prototype.
            </Text>
          </View>
          <View style={styles.View_381_15}>
            <Text style={styles.Text_381_15}>See more →</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_387_1} />
      <View style={styles.View_387_0}>
        <View style={styles.View_383_1} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/148b/0c96/9a93fd5958fa13cb9051952b24cf8f8e"
          }}
          style={styles.ImageBackground_383_2}
        />
      </View>
      <View style={styles.View_386_10}>
        <View style={styles.View_386_11}>
          <View style={styles.View_386_12}>
            <Text style={styles.Text_386_12}>Evangelism</Text>
          </View>
          <View style={styles.View_386_13}>
            <Text style={styles.Text_386_13}>
              Over the past few years, I&#39;ve been invited to deliver talks
              and conduct design workshops at colleges (such as SHRISTI
              Bangalore, NIT Jamshedpur, GGV etc) and design meet-ups.
            </Text>
          </View>
          <View style={styles.View_386_14}>
            <Text style={styles.Text_386_14}>See more →</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_393_1}>
        <View style={styles.View_393_2}>
          <View style={styles.View_393_3}>
            <Text style={styles.Text_393_3}>All work</Text>
          </View>
          <View style={styles.View_393_7}>
            <View style={styles.View_393_5}>
              <Text style={styles.Text_393_5}>All</Text>
            </View>
            <View style={styles.View_393_6}>
              <Text style={styles.Text_393_6}>UI</Text>
            </View>
            <View style={styles.View_393_8}>
              <Text style={styles.Text_393_8}>UX</Text>
            </View>
            <View style={styles.View_393_9}>
              <Text style={styles.Text_393_9}>Articles</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_415_13}>
        <View style={styles.View_414_7}>
          <View style={styles.View_408_6}>
            <View style={styles.View_409_4}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f7c/1b90/e7d26ce1d87a57b9eab9170507027143"
                }}
                style={styles.ImageBackground_408_7}
              />
              <View style={styles.View_409_3}>
                <Text style={styles.Text_409_3}>
                  Design for Electrification
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_414_3}>
            <View style={styles.View_414_4}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fafb/e5e3/f9716c7527c47566d301bf03a8ab692a"
                }}
                style={styles.ImageBackground_414_5}
              />
              <View style={styles.View_414_6}>
                <Text style={styles.Text_414_6}>Zeta Banking</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_414_8}>
            <View style={styles.View_414_9}>
              <View style={styles.View_474_10}>
                <View style={styles.View_474_11} />
                <View style={styles.View_474_12}>
                  <View style={styles.View_474_13} />
                  <View style={styles.View_474_20}>
                    <Text style={styles.Text_474_20}>
                      Cytopot Innovative healthcare ecosystem{" "}
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d479/07c8/68a5447fbbb01884f3368d972d0bcd01"
                    }}
                    style={styles.ImageBackground_474_21}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7735/daf8/73585cfefc6db546e97d9bf7132d7006"
                    }}
                    style={styles.ImageBackground_474_14}
                  />
                </View>
              </View>
              <View style={styles.View_414_11}>
                <Text style={styles.Text_414_11}>Cytopot App</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_415_0}>
          <View style={styles.View_415_1}>
            <View style={styles.View_415_2}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f7c/1b90/e7d26ce1d87a57b9eab9170507027143"
                }}
                style={styles.ImageBackground_415_3}
              />
              <View style={styles.View_415_4}>
                <Text style={styles.Text_415_4}>StartupManch</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_415_5}>
            <View style={styles.View_415_6}>
              <View style={styles.View_415_7} />
              <View style={styles.View_415_8}>
                <Text style={styles.Text_415_8}>
                  Cytopot Logo and Branding{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_415_9}>
            <View style={styles.View_415_10}>
              <View style={styles.View_415_11} />
              <View style={styles.View_415_12}>
                <Text style={styles.Text_415_12}>Cytopot</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7c0/b40a/62c44030c6e1843e26fea3e62d43230f"
        }}
        style={styles.ImageBackground_439_5}
      />
      <View style={styles.View_387_4}>
        <View style={styles.View_387_3} />
        <View style={styles.View_322_5}>
          <Text style={styles.Text_322_5}>Shushant</Text>
        </View>
        <View style={styles.View_322_8}>
          <View style={styles.View_322_12}>
            <View style={styles.View_322_14}>
              <Text style={styles.Text_322_14}>About</Text>
            </View>
          </View>
          <View style={styles.View_322_15}>
            <View style={styles.View_322_17}>
              <Text style={styles.Text_322_17}>Playground</Text>
            </View>
          </View>
          <View style={styles.View_322_18}>
            <View style={styles.View_322_20}>
              <Text style={styles.Text_322_20}>Work</Text>
            </View>
          </View>
          <View style={styles.View_322_21}>
            <View style={styles.View_322_23}>
              <Text style={styles.Text_322_23}>Contact</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("914.0710382513662%") },
  ImageBackground_322_3: {
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
  View_322_24: {
    width: wp("41.11111111111111%"),
    minWidth: wp("41.11111111111111%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("37.43169398907104%")
  },
  Text_322_24: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 42,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_26: {
    width: wp("26.944444444444443%"),
    minWidth: wp("26.944444444444443%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("122.81420765027322%")
  },
  Text_322_26: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_31: {
    width: wp("14.791666666666666%"),
    minWidth: wp("14.791666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("125.81967213114753%")
  },
  Text_322_31: {
    color: "rgba(157, 153, 149, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_32: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("67.21311475409836%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_322_33: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_322_35: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.499999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_322_36: {
    width: wp("0.866666767332289%"),
    height: hp("1.7049177096841113%"),
    top: hp("0.7868852771696595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40000067816840357%")
  },
  ImageBackground_322_39: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.999999999999999%")
  },
  ImageBackground_322_41: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.499999999999999%")
  },
  View_322_44: {
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
  ImageBackground_322_45: {
    width: wp("0.9724336200290257%"),
    height: hp("3.005708631921987%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6248813205295107%")
  },
  View_381_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126.91256830601093%"),
    minHeight: hp("126.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("479.91803278688525%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_336_4: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("118.5792349726776%"),
    minHeight: hp("118.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.069444444444446%"),
    top: hp("120.35519125683061%")
  },
  View_336_0: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("118.5792349726776%"),
    minHeight: hp("118.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_340_47: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.75409836065575%"),
    minHeight: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138.79781420765028%")
  },
  View_340_40: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.75409836065575%"),
    minHeight: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_340_41: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.75409836065575%"),
    minHeight: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_340_42: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.75409836065575%"),
    minHeight: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.569444444444443%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 47, 48, 1)"
  },
  ImageBackground_340_43: {
    width: wp("123.92361111111111%"),
    minWidth: wp("123.92361111111111%"),
    height: hp("33.26502732240437%"),
    minHeight: hp("33.26502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: hp("56.4207650273224%")
  },
  ImageBackground_340_46: {
    width: wp("91.38888888888889%"),
    minWidth: wp("91.38888888888889%"),
    height: hp("89.75409836065575%"),
    minHeight: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_340_52: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    height: hp("89.75409836065575%"),
    minHeight: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.72222222222222%"),
    top: hp("138.79781420765028%"),
    backgroundColor: "rgba(47, 47, 48, 1)"
  },
  ImageBackground_381_2: {
    width: wp("83.61111111111111%"),
    minWidth: wp("83.61111111111111%"),
    height: hp("123.36065573770492%"),
    minHeight: hp("123.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444445%"),
    top: hp("500.8196721311475%"),
    resizeMode: "cover"
  },
  View_349_30: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126.91256830601093%"),
    minHeight: hp("126.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("353.0054644808743%"),
    backgroundColor: "rgba(230, 125, 84, 1)"
  },
  View_363_6: {
    width: wp("59.201388888888886%"),
    minWidth: wp("59.201388888888886%"),
    height: hp("64.8224043715847%"),
    minHeight: hp("64.8224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.833333333333336%"),
    top: hp("257.24043715846994%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_363_7: {
    width: wp("59.201388888888886%"),
    minWidth: wp("59.201388888888886%"),
    height: hp("64.8224043715847%"),
    minHeight: hp("64.8224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_363_8: {
    width: wp("53.68055555555556%"),
    minWidth: wp("53.68055555555556%"),
    height: hp("63.52459016393443%"),
    minHeight: hp("63.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_363_9: {
    width: wp("35.729166666666664%"),
    minWidth: wp("35.729166666666664%"),
    height: hp("51.87841530054644%"),
    minHeight: hp("51.87841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777777%"),
    top: hp("3.142076502732209%"),
    resizeMode: "cover"
  },
  View_345_4: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("45.90163934426229%"),
    minHeight: hp("45.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.94444444444444%"),
    top: hp("163.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_345_5: {
    width: wp("30.138888888888886%"),
    minWidth: wp("30.138888888888886%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_345_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_345_6: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.852459016393425%")
  },
  Text_345_6: {
    color: "rgba(247, 239, 229, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_345_7: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.726775956284143%")
  },
  Text_345_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_345_8: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.03278688524588%")
  },
  Text_345_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_14: {
    width: wp("27.361111111111114%"),
    minWidth: wp("27.361111111111114%"),
    height: hp("35.51912568306011%"),
    minHeight: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222221%"),
    top: hp("398.77049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_348_15: {
    width: wp("27.361111111111114%"),
    minWidth: wp("27.361111111111114%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_348_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_16: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191214%")
  },
  Text_348_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_17: {
    width: wp("27.361111111111114%"),
    minWidth: wp("27.361111111111114%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.344262295081933%")
  },
  Text_348_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_18: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.6502732240437%")
  },
  Text_348_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_340_53: {
    width: wp("5.789347754584418%"),
    minWidth: wp("5.789347754584418%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.94444444444444%"),
    top: hp("155.19125683060108%")
  },
  ImageBackground_340_54: {
    width: wp("1.63771563106113%"),
    minWidth: wp("1.63771563106113%"),
    height: hp("3.4021072700375417%"),
    minHeight: hp("3.4021072700375417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6153971354166643%"),
    top: hp("0.9459865549223139%")
  },
  ImageBackground_340_57: {
    width: wp("1.5652006202273898%"),
    minWidth: wp("1.5652006202273898%"),
    height: hp("3.436165168637135%"),
    minHeight: hp("3.436165168637135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9307277658598139%")
  },
  ImageBackground_340_58: {
    width: wp("0.8242589897579616%"),
    minWidth: wp("0.8242589897579616%"),
    height: hp("4.338687365172339%"),
    minHeight: hp("4.338687365172339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.431693183051209%"),
    top: hp("0%")
  },
  ImageBackground_340_59: {
    width: wp("1.4306485652923584%"),
    minWidth: wp("1.4306485652923584%"),
    height: hp("3.5228257622223738%"),
    minHeight: hp("3.5228257622223738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.358698527018234%"),
    top: hp("0.8487555498633981%")
  },
  View_348_13: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222221%"),
    top: hp("384.42622950819674%")
  },
  View_348_3: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_348_4: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("1.7759562841529828%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_348_5: {
    width: wp("3.3324649598863387%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_348_6: {
    width: wp("3.3324649598863387%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_379_0: {
    width: wp("27.361111111111114%"),
    minWidth: wp("27.361111111111114%"),
    height: hp("47.13114754098361%"),
    minHeight: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.88888888888889%"),
    top: hp("266.8032786885246%")
  },
  View_363_14: {
    width: wp("27.361111111111114%"),
    minWidth: wp("27.361111111111114%"),
    height: hp("32.78688524590164%"),
    minHeight: hp("32.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.34426229508199%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_363_15: {
    width: wp("27.361111111111114%"),
    minWidth: wp("27.361111111111114%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_363_15: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_363_17: {
    width: wp("27.361111111111114%"),
    minWidth: wp("27.361111111111114%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%")
  },
  Text_363_17: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_364_1: {
    width: wp("25.48611111111111%"),
    minWidth: wp("25.48611111111111%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.61748633879779%")
  },
  Text_364_1: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_363_18: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.91803278688525%")
  },
  Text_363_18: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_363_19: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_363_20: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_364_4: {
    width: wp("2.0141769780053034%"),
    height: hp("4.098360655737705%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555536%")
  },
  ImageBackground_349_29: {
    width: wp("38.68055555555556%"),
    minWidth: wp("38.68055555555556%"),
    height: hp("78.96174863387978%"),
    minHeight: hp("78.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.01388888888889%"),
    top: hp("378.14207650273227%"),
    resizeMode: "cover"
  },
  View_381_11: {
    width: wp("46.18055555555556%"),
    minWidth: wp("46.18055555555556%"),
    height: hp("27.732240437158467%"),
    minHeight: hp("27.732240437158467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%"),
    top: hp("495.4918032786885%")
  },
  View_381_13: {
    width: wp("46.18055555555556%"),
    minWidth: wp("46.18055555555556%"),
    height: hp("27.732240437158467%"),
    minHeight: hp("27.732240437158467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_381_9: {
    width: wp("46.18055555555556%"),
    minWidth: wp("46.18055555555556%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_381_9: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_381_10: {
    width: wp("46.111111111111114%"),
    minWidth: wp("46.111111111111114%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191214%")
  },
  Text_381_10: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_381_15: {
    width: wp("46.111111111111114%"),
    minWidth: wp("46.111111111111114%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.8633879781421%")
  },
  Text_381_15: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_387_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126.63934426229508%"),
    minHeight: hp("126.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("607.103825136612%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_387_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126.91256830601093%"),
    minHeight: hp("126.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("606.8306010928961%")
  },
  View_383_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126.91256830601093%"),
    minHeight: hp("126.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_383_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126.91256830601093%"),
    minHeight: hp("126.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_386_10: {
    width: wp("46.18055555555556%"),
    minWidth: wp("46.18055555555556%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%"),
    top: hp("623.9071038251367%")
  },
  View_386_11: {
    width: wp("46.18055555555556%"),
    minWidth: wp("46.18055555555556%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_386_12: {
    width: wp("46.18055555555556%"),
    minWidth: wp("46.18055555555556%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_386_12: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_386_13: {
    width: wp("46.111111111111114%"),
    minWidth: wp("46.111111111111114%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191157%")
  },
  Text_386_13: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_386_14: {
    width: wp("46.111111111111114%"),
    minWidth: wp("46.111111111111114%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.306010928961655%")
  },
  Text_386_14: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_393_1: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.833333333333336%"),
    top: hp("750.1366120218579%")
  },
  View_393_2: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_393_3: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_393_3: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_393_7: {
    width: wp("28.333333333333332%"),
    minWidth: wp("28.333333333333332%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_393_5: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_393_5: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_393_6: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%"),
    top: hp("0%")
  },
  Text_393_6: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_393_8: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.999999999999993%"),
    top: hp("0%")
  },
  Text_393_8: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_393_9: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%"),
    top: hp("0%")
  },
  Text_393_9: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_415_13: {
    width: wp("93.75%"),
    minWidth: wp("93.75%"),
    height: hp("108.19672131147541%"),
    minHeight: hp("108.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: hp("769.672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_414_7: {
    width: wp("93.75%"),
    minWidth: wp("93.75%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_6: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_409_4: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_408_7: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_409_3: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.448087431694034%")
  },
  Text_409_3: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_414_3: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444443%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_414_4: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_414_5: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_414_6: {
    width: wp("7.708333333333334%"),
    minWidth: wp("7.708333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.448087431694034%")
  },
  Text_414_6: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_414_8: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.888888888888886%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_414_9: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_474_10: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_474_11: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(212, 238, 223, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_474_12: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("40.02732240437158%"),
    minHeight: hp("40.02732240437158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.688524590163979%")
  },
  View_474_13: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("40.02732240437158%"),
    minHeight: hp("40.02732240437158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_474_20: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    minHeight: hp("40.02732240437158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_474_20: {
    color: "rgba(94, 181, 130, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_474_21: {
    width: wp("3.332457807328966%"),
    height: hp("5.191270901205761%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.2638888888889%")
  },
  ImageBackground_474_14: {
    width: wp("13.680555555555557%"),
    minWidth: wp("13.680555555555557%"),
    height: hp("70.62841530054644%"),
    minHeight: hp("70.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.125%"),
    top: hp("17.07650273224033%"),
    resizeMode: "cover",
    borderColor: "rgba(94, 181, 130, 1)",
    borderWidth: 7,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_414_11: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.448087431694034%")
  },
  Text_414_11: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_415_0: {
    width: wp("93.75%"),
    minWidth: wp("93.75%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.19672131147536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_415_1: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_415_2: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_415_3: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_415_4: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.44808743169415%")
  },
  Text_415_4: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_415_5: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444443%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_415_6: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_415_7: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_415_8: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.44808743169415%")
  },
  Text_415_8: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_415_9: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.888888888888886%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_415_10: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_415_11: {
    width: wp("29.86111111111111%"),
    minWidth: wp("29.86111111111111%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_415_12: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.44808743169415%")
  },
  Text_415_12: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_439_5: {
    width: wp("66.31944444444444%"),
    minWidth: wp("66.31944444444444%"),
    height: hp("130.46448087431693%"),
    minHeight: hp("130.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.791666666666664%"),
    top: hp("4.508196721311475%"),
    resizeMode: "cover"
  },
  View_387_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_387_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 239, 229, 1)"
  },
  View_322_5: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("3.278688524590164%")
  },
  Text_322_5: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_8: {
    width: wp("19.375%"),
    minWidth: wp("19.375%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.125%"),
    top: hp("3.278688524590164%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_12: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_14: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_14: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_15: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7222222222222285%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_17: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_17: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_18: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.736111111111114%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_20: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_20: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_322_21: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.180555555555557%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_322_23: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_322_23: {
    color: "rgba(47, 47, 48, 1)",
    fontSize: 11,
    fontWeight: "600",
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
