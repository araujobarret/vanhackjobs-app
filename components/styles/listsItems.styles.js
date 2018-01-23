import {lightPrimaryColor,
          secondaryBackgroundColor,
          primaryFontColor,
          secondaryFontColor,
          alertColor} from './variables';

export let listItems = {
  listItem: {
    backgroundColor: "white",
    borderLeftWidth: 4,
    borderColor: lightPrimaryColor,
    borderRadius: 2,
    justifyContent: "space-between",
    height: 112,
    marginHorizontal: 4,
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  listItemText: {
    color: primaryFontColor,
    fontFamily: "open-sans",
  },
  listItemTitle: {
    color: primaryFontColor,
    fontFamily: "open-sans",
    flex: 6,
    fontSize: 18,
    fontWeight: "bold",
  },
  listItemNew: {
    alignSelf: "flex-end",
    color: alertColor,
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  listItemDescription: {
    color: primaryFontColor,
    fontFamily: "open-sans",
    color: secondaryFontColor,
    paddingVertical: 4,
  },
  listItemSkill: {
    fontWeight: "bold",
    borderRadius: 4,
    color: lightPrimaryColor,
    fontSize: 14,
    marginLeft: 4,
    paddingHorizontal: 4
  },
  listItemIcon: {
    alignItems: "flex-start",
    width: 24
  },
  listItemIconText: {
    alignSelf: "flex-end",
    fontSize: 14,
  }
};
