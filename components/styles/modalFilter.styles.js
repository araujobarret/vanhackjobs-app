import {  lightPrimaryColor,
          secondaryBackgroundColor,
          primaryFontColor,
          secondaryFontColor,
          alertColor} from './variables';

export let modalFilter = {
  modalContainer: {
    borderColor: "#cecece",
    borderWidth: 1,
    backgroundColor: "#f2f6f9",
    flex: 1,
    alignSelf: "stretch",
    marginVertical: 80,
    marginHorizontal: 20,
    borderRadius: 6,
    padding: 16
  },
  pickerContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: lightPrimaryColor
  },
  pickerText: {
    flex: 1,
    textAlignVertical: "center",
    fontWeight: "bold"
  },
  skillsContainer: {
    marginTop: 8
  },
  skillsTitle: {
    textAlignVertical: "center",
    fontWeight: "bold"
  },
  skillsArray: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  skillNormal: {
    borderWidth: 1,
    fontWeight: "bold",
    margin: 4,
    padding: 4,
    borderColor: lightPrimaryColor,
    backgroundColor: "white",
    color: "#51abe4",
  },
  skillSelected: {
    borderWidth: 1,
    fontWeight: "bold",
    margin: 4,
    padding: 4,
    borderColor: "white",
    backgroundColor: lightPrimaryColor,
    color: "white",
  },
  buttonsContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: 16,
    marginBottom: 8,
    flexDirection: "row"
  },
  buttonClear: {
    marginRight: 8,
    height: 40,
    justifyContent: "center"
  },
  buttonFilter: {
    height: 40,
    justifyContent: "center"
  }
};
