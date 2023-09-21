import Logo from "../../assets/images/logo.svg";
import styles from "./TopNav.module.css";
import shareIcon from "../../assets/images/ic_share.svg";

const TopNav = () => {
    const APP_DOWNLOAD_LINK = "https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";
    const onClickShareButton = async (text) => {
        const currentURL = window.location.href;
        try{
            await navigator.clipboard.writeText(currentURL);
            alert("클립보드에 링크가 복사되었어요.");
        } catch(err){
            console.log(err);
        }
    };

    return (
    <div className={styles.body}>
        {/*로고*/}
        <div className={styles.container}>
            <img src={Logo} alt="logo" />
            {/*앱 다운로드 버튼*/}
            <div className={styles.rightButtonContainer}>
            <a href={APP_DOWNLOAD_LINK} target="_blank">
                <div className={styles.roundButton}>앱 다운로드</div>
            </a>
            {/*공유 버튼*/}
            <div className={styles.circleButton} onClick={onClickShareButton}>
                <img src={shareIcon} alt="shareIcon"/>
            </div>
        </div>
        </div>
    </div>
    );
};

export default TopNav;