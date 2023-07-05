import {
  CourseIcon,
  HomeIcon,
  LogoutIcon,
  PaymentIcon,
  ReportIcon,
  SettingsIcon,
  StudentsIcon,
} from "@/assets/icon";
import { CustomLink, Sidebar } from "@/assets/styled";
import Image from "next/image";
import Link from "next/link";
import ProfilPhoto from "../public/pp.jpeg";

const menuItems = [
  { href: "/home", label: "Home", icon: <HomeIcon /> },
  { href: "", label: "Course", icon: <CourseIcon /> },
  { href: "/students", label: "Students", icon: <StudentsIcon /> },
  { href: "", label: "Payment", icon: <PaymentIcon /> },
  { href: "", label: "Report", icon: <ReportIcon /> },
  { href: "", label: "Settings", icon: <SettingsIcon /> },
];

const SideBar = () => {
  return (
    <Sidebar>
      <h4>MANAGE COURSES</h4>
      <div className="avatarWrap">
        <Image src={ProfilPhoto} width={128} height={128} alt="Picture of the author" priority />
        <p>Ömer Sarısoy</p>
        <span>Admin</span>
      </div>
      <div className="menuItems">
        {menuItems.map(({ href, label, icon }) => (
          <CustomLink key={label} href={href}>
            {icon} {label}
          </CustomLink>
        ))}
      </div>
      <Link className="logout" href="/">
        Logout <LogoutIcon />
      </Link>
    </Sidebar>
  );
};

export default SideBar;