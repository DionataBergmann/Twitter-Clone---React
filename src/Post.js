import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img className="Imagem" src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon className="comment" fontSize="small" />
            <span className="text-color-comment">10</span>
            <RepeatIcon className="retweet" fontSize="small" />
            <span className="text-color-retweet">15</span>
            <FavoriteBorderIcon className="like" fontSize="small" />
            <span className="text-color-like">501</span>
            <PublishIcon className="public" fontSize="small" />
           
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
