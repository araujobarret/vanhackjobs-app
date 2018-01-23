import {lightPrimaryColor,
          secondaryBackgroundColor,
          primaryFontColor,
          secondaryFontColor,
          alertColor} from './variables';

export let modalJob = {
  modalContainer: {
     flex: 1,
     backgroundColor: 'white',
     padding: 8
  },
  modalTitle: {
    color: lightPrimaryColor,
    fontSize: 30,
    borderColor: lightPrimaryColor,
    borderBottomWidth: 2
  },
  modalIcon: {
   marginTop: 12,
   borderColor: lightPrimaryColor,
   borderBottomWidth: 2,
   paddingBottom: 12
 },
 modalLocation: {
   paddingLeft: 16,
 },
 modalLocationSubText: {
   color: primaryFontColor,
   fontFamily: "open-sans",
   color: secondaryFontColor,
   fontSize: 14
 },
 modalLocationText: {
   color: primaryFontColor,
   fontFamily: "open-sans",
   color: primaryFontColor,
   fontSize: 20
 },
 modalDescription: {
   color: primaryFontColor,
   fontFamily: "open-sans",
   textAlign: "justify",
   color: primaryFontColor,
   fontSize: 16,
   marginVertical: 16
 },
 modalSkills: {
   marginTop: 8,
   flexDirection: "row",
   flexWrap: "wrap"
 },
 modalSkillsTitle: {
   color: primaryFontColor,
   fontFamily: "open-sans",
   fontSize: 18,
   fontWeight: "bold"
 },
 modalSkill: {
   marginRight: 8,
   fontSize: 16,
 },
 modalButtons: {
   flexDirection: "row",
   justifyContent: "flex-end",
   marginVertical: 16
 },
 modalButton: {
   borderRadius: 2,
   marginLeft: 4,
   padding: 8,
   width: 72,
 },
 modalCloseButton: {
   borderRadius: 2,
   marginLeft: 4,
   padding: 8,
   width: 72,
   borderColor: lightPrimaryColor,
   borderWidth: 2
 },
 modalSaveButton: {
   borderRadius: 2,
   marginLeft: 4,
   padding: 8,
   width: 72,
   backgroundColor: lightPrimaryColor,
   borderColor: lightPrimaryColor,
   borderWidth: 2
 },
 modalButtonText: {
   color: primaryFontColor,
   fontFamily: "open-sans",
   fontSize: 16,
   fontWeight: "bold",
   textAlign: "center",
 },
 modalCancelText: {
   color: primaryFontColor,
   fontFamily: "open-sans",
   fontSize: 16,
   fontWeight: "bold",
   textAlign: "center",
   color: lightPrimaryColor
 },
 modalSaveText: {
   color: primaryFontColor,
   fontFamily: "open-sans",
   fontSize: 16,
   fontWeight: "bold",
   textAlign: "center",
   color: "white"
 }
};
