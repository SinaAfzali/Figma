import Device from "@/device/device";
import HeaderDesktop from "@/components/HomePage/Desktop/header"

const HomePage = () => {
  return (
    <Device>
      {({ isMobile }) => {
        if (isMobile) {
          return (
            <div>My Mobile View</div>
          )
        }
        return (
            <HeaderDesktop />
        )
      }}
    </Device>
  );
};

export default HomePage;
