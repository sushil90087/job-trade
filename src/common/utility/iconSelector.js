import React from "react";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import DraftsRoundedIcon from "@material-ui/icons/DraftsRounded";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import WcIcon from "@material-ui/icons/Wc";
import AlarmOnIcon from '@material-ui/icons/AlarmOn';

const GetIcons = iconName => {

  switch (iconName) {
    case "password":
      return <VpnKeyIcon />;
    case "email":
      return <DraftsRoundedIcon />;
    case "user":
      return <AccountBoxRoundedIcon />;
    case "phone":
      return <PhoneIphoneRoundedIcon />;
    case "profile":
      return <AssignmentIndRoundedIcon />;
    case "logout":
      return <ExitToAppRoundedIcon />;
    case "location":
      return <LocationOnRoundedIcon />;
    case "star":
      return <StarsRoundedIcon />;
    case "company":
      return <EmojiTransportationIcon />;
    case "skill":
      return <LocalActivityIcon />;
    case "gender":
      return <WcIcon />;
    case "salary":
      return <MonetizationOnIcon />;
    case "alarm":
      return <AlarmOnIcon />
    default:
      return null;
  }
};

export default GetIcons;
