let lightPrimaryColor = "#51abe4";
let secondaryBackgroundColor = "#f2f6f9";
let primaryFontColor = "#595a5a";
let secondaryFontColor = "#777d80";
let alertColor = "#51cd17";

export const container = {
  flex: 1,
};

export const rowContainer = {
  flexDirection: "row"
};

export const list = {
  flex: 1,
  backgroundColor: secondaryBackgroundColor
};

export const listItem = {
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
};

export const listItemText = {
  color: primaryFontColor,
  fontFamily: "open-sans",
};

export const listItemTitle = {
  ...listItemText,
  flex: 6,
  fontSize: 18,
  fontWeight: "bold",
};

export const listItemNew = {
  alignSelf: "flex-end",
  color: alertColor,
  flex: 1,
  fontSize: 14,
  fontWeight: "bold",
  textAlign: "center",
}

export const listItemDescription = {
  ...listItemText,
  color: secondaryFontColor,
  paddingVertical: 4,
};

export const listItemSkill = {
  fontWeight: "bold",
  borderRadius: 4,
  color: lightPrimaryColor,
  fontSize: 14,
  marginLeft: 4,
  paddingHorizontal: 4,
};

export const listItemIcon = {
  alignItems: "flex-start",
  width: 24
};

export const listItemIconText = {
  alignSelf: "flex-end",
  fontSize: 14,
};

export const modalContainer = {
   flex: 1,
   backgroundColor: 'white',
   padding: 8
};

export const modalTitle = {
  color: lightPrimaryColor,
  fontSize: 30,
  borderColor: lightPrimaryColor,
  borderBottomWidth: 2
};

export const modalIcon = {
  marginTop: 12,
  borderColor: lightPrimaryColor,
  borderBottomWidth: 2,
  paddingBottom: 12
};

export const modalLocation = {
  paddingLeft: 16,
};

export const modalLocationSubText = {
  ...listItemText,
  color: secondaryFontColor,
  fontSize: 14
};

export const modalLocationText = {
  ...listItemText,
  color: primaryFontColor,
  fontSize: 20
};

export const modalDescription = {
  ...listItemText,
  textAlign: "justify",
  color: primaryFontColor,
  fontSize: 16,
  marginVertical: 16
};

export const modalSkills = {
  marginTop: 8,
  flexDirection: "row",
  flexWrap: "wrap"
};

export const modalSkillsTitle = {
  ...listItemText,
  fontSize: 18,
  fontWeight: "bold"
};

export const modalSkill = {
  marginRight: 8,
  fontSize: 16,
};

export const modalButtons = {
  flexDirection: "row",
  justifyContent: "flex-end",
  marginVertical: 16
};

const modalButton = {
  borderRadius: 2,
  marginLeft: 4,
  padding: 8,
  width: 72
};

export const modalCloseButton = {
  ...modalButton,
  borderColor: lightPrimaryColor,
  borderWidth: 2
};

export const modalSaveButton = {
  ...modalButton,
  backgroundColor: lightPrimaryColor,
  borderColor: lightPrimaryColor,
  borderWidth: 2
};

const modalButtonText = {
  ...listItemText,
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center"
};

export const modalCancelText = {
  ...modalButtonText,
  color: lightPrimaryColor
};

export const modalSaveText = {
  ...modalButtonText,
  color: "white"
};

export const activityIndicator = {
  justifyContent: "center"
};
