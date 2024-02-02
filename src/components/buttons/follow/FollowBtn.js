import { useState } from "react";
import styles from "./FollowBtn.module.css";
import ClassicBtn from "../classic/ClassicBtn";

function FollowBtn() {
  const [isFollowing, setIsFollowing] = useState(false);

  function onClickFollow() {
    setIsFollowing(true);
  }

  function onClickUnfollow() {
    setIsFollowing(false);
  }

  if (isFollowing) {
    return <ClassicBtn text="Gefolgt" onClick={onClickUnfollow} />;
  }

  return <ClassicBtn text="Folgen" onClick={onClickFollow} />;
}

export default FollowBtn;
