import {
  Nav,
  ContainerSVG,
  ContainerSearchInput,
  SearchInput,
  SearchButton,
} from "themes/navbar";
import {
  SearchIconSVG,
  ShowSidebarSVG,
  YoutubeLogoSVG,
  NotificationSVG,
  UploadSVG,
} from "assets";

export const Navbar = () => {
  return (
    <Nav>
      {/* Logo */}
      <div className="flex items-center">
        <ContainerSVG>
          <ShowSidebarSVG className="h-6 fill-white " />
        </ContainerSVG>
        <button className="pl-[16px] cursor-default">
          <YoutubeLogoSVG className="w-[90px] cursor-pointer" />
        </button>
      </div>

      {/* Input */}
      <div className="flex items-center">
        <ContainerSearchInput className="relative">
          <SearchIconSVG className="absolute left-1.5 w-12 pl-3 pr-4 opacity-0 transition-all duration-200 xdd" />
          <SearchInput placeholder="Buscar" type="text" />
        </ContainerSearchInput>
        <SearchButton className="relative">
          <SearchIconSVG className="w-6 absolute left-5 top-[7px]" />
        </SearchButton>
      </div>

      {/* Profile */}
      <div className="flex items-center justify-evenly w-48 h-10">
        <ContainerSVG>
          <UploadSVG className="w-6 fill-white " />
        </ContainerSVG>
        <ContainerSVG>
          <NotificationSVG className="w-6 fill-white " />
        </ContainerSVG>
        <div className="bg-gray-300 h-8 w-8 rounded-full cursor-pointer" />
      </div>
    </Nav>
  );
};
