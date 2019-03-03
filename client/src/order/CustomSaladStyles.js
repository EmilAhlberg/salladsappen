import { Dimensions, StyleSheet } from "react-native";

export const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 14,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 10,
  currentStepLabelColor: "#fe7013"
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  buttonContainer: {
    marginTop: Dimensions.get("window").height * 0.02,
    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").width * 0.65,
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center" //etc
  },
  stepIndicator: {
    width: "100%",
    backgroundColor: "white"
  },
  wrapper: {
    width: "100%",
    height: "90%"
  },
  slide1: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  labelContainer: {
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row"
  },

  content: {
    display: "flex",
    height: "90%",
    width: "90%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    //backgroundColor: "black",
    flexDirection: "row"
  },
  reviewContent: {
    display: "flex",
    height: "90%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
