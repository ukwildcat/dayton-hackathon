import LogoDark from "../../assets/images/logos/henny-penny-2-logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image style={{display: "flex", maxWidth:"40%", marginLeft: "auto",
        marginRight: "auto" }}src={LogoDark} alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
