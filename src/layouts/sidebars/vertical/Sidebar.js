/* eslint-disable @next/next/link-passhref */
import { Button, Nav, NavItem, Alert } from "reactstrap";
import Logo from "../../logo/Logo";
import FryerLogo from "../../logo/FryeryLogo"
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Logs",
    href: "/logs",
    icon: "bi bi-file-text",
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: "bi bi-graph-up",
  },
  // {
  //   title: "Badges",
  //   href: "/ui/badges",
  //   icon: "bi bi-patch-check",
  // },
  // {
  //   title: "Buttons",
  //   href: "/ui/buttons",
  //   icon: "bi bi-hdd-stack",
  // },
  // {
  //   title: "Cards",
  //   href: "/ui/cards",
  //   icon: "bi bi-card-text",
  // },
  // {
  //   title: "Grid",
  //   href: "/ui/grid",
  //   icon: "bi bi-columns",
  // },
  // {
  //   title: "Table",
  //   href: "/ui/tables",
  //   icon: "bi bi-layout-split",
  // },
  // {
  //   title: "Forms",
  //   href: "/ui/forms",
  //   icon: "bi bi-textarea-resize",
  // },
  // {
  //   title: "Breadcrumbs",
  //   href: "/ui/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  // {
  //   title: "About",
  //   href: "/about",
  //   icon: "bi bi-people",
  // },
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        
        
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div style={{position:"relative"}}><FryerLogo /></div>
      <div className="pt-4 mt-2" style={{ borderBottom: "2px solid #ccc" }}>
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          {/* <Button
            color="secondary"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-next-js-free-admin-template/"
          >
            Download Free
          </Button>
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
      <div className="pt-4 mt-2">
        <h6>Current Alerts</h6>
        <Link href="/store/02173">
          <Alert color="danger">
            <b>Store: 02173 - PEF500</b>
            <br />
            Power Failure
          </Alert>
        </Link>
        <Link href="/store/01490">
          <Alert color="warning">
            <b>Store: 01490 - PEF500</b>
            <br />
            High Temperature Alert
          </Alert>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
