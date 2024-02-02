import FollowBtn from "../../buttons/follow/FollowBtn";
import styles from "./Profile.module.css";
import Info from "./info/Info";

function Profile({ userProfile }) {
  function onClickFollow() {
    alert("Ich möchte dem Nutzer folgen.");
  }
  return (
    <div className={styles.mainContainer}>
      <label> Techstarter</label>
      {/* <Picture></Picture> */}
      <FollowBtn onClick={onClickFollow}>folgen</FollowBtn>
      <Info profile={userProfile}></Info>
    </div>
  );
}

export default Profile;
