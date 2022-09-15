import FrynetLogo from "../../assets/images/logos/frynet.png";
import Image from "next/image";
import Link from "next/link";

const FryerLogo = () => {
    return (
        <Link href="/">
    
        <a style={{display: "flex", maxWidth:"40%", marginLeft: "auto",
        marginRight: "auto", marginTop: "auto" }}>
          <Image 
           src={FrynetLogo} alt="frylogo" />
            </a>
            </Link>
    
  );
};

export default FryerLogo;
