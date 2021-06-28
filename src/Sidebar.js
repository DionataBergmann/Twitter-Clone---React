import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import Logo from "../src/imagens/logo maior.png"


function Sidebar() {
  return (
    <div className="sidebar">
      <img className="logo" alt='Logo' src={Logo}/>
      <SidebarOption active Icon={HomeIcon} text="Página Inicial" />
      <SidebarOption Icon={SearchIcon} text="Explorar" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notificações" />
      <SidebarOption Icon={MailOutlineIcon} text="Mensagens" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Itens Salvos" />
      <SidebarOption Icon={ListAltIcon} text="Listas" />
      <SidebarOption Icon={PermIdentityIcon} text="Perfil" />
      <SidebarOption Icon={MoreHorizIcon} text="Mais" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweetar
      </Button>

      

    </div>
  );
}

export default Sidebar;
