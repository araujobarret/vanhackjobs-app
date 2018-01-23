import {lightPrimaryColor,
          secondaryBackgroundColor,
          primaryFontColor,
          secondaryFontColor,
          alertColor} from './variables';

export let jobsCarouselStyle = {
  itemBody: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 100,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#d3d3d3",
    padding: 8
  },
  itemTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 32,
    color: lightPrimaryColor
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 16
  },
  locationText: {
    marginLeft: 8,
    fontSize: 18,
    color: primaryFontColor,
    textAlignVertical: "bottom"
  },
  description: {
    color: primaryFontColor,
    marginBottom: 8,
    textAlign: "justify",
    fontSize: 16
  },
  newTag: {
    fontWeight: "bold",
    color: alertColor,
    fontSize: 22,
    textAlignVertical: "bottom",
    marginRight: 8
  },
  skillsContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  skillsTitle: {
    fontSize: 20,
    color: lightPrimaryColor,
    fontWeight: "bold",
    fontFamily: "open-sans",
    marginLeft: 8
  },
  skillText: {
    color: lightPrimaryColor,
    fontWeight: "bold",
    marginHorizontal: 8,
    fontSize: 16
  },
  skillsItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
  }
}
