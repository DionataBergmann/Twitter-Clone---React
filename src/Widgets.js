import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Buscar no Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>O que está acontecendo</h2>

        {/* <TwitterTweetEmbed tweetId={"858551177860055040"} /> */}

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="senacrs"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/senacrs"}
          options={{ text: "SENAC RS", via: "senacrs" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
