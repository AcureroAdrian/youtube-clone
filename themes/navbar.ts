import tw, { styled } from "twin.macro";

export const Nav = tw.nav`
    flex
    items-center
    justify-between
    h-14
    px-4
    bg-[#0f0f0f]
`;

export const ContainerSVG = tw.button`
    grid
    place-content-center
    w-10
    h-10
    rounded-full
    transition-all
    duration-300
    hover:(bg-[#FFFFFF1A] duration-200) 
    cursor-pointer
`;

export const ContainerSearchInput = styled.div`
  ${tw`flex
    items-center
    w-[540px]
    h-10
    bg-[#121212]
    pr-1
    pl-4
    ml-8 
    rounded-l-full
    border
    border-[#303030]
    transition-all
    duration-300
    `}

  &:focus-within {
    ${tw`w-[572px] ml-[1px] pl-12 border-blue-500 border`}
  }

  &:focus-within .xdd {
    ${tw`opacity-100 delay-100 duration-200`}
  }
`;

export const SearchInput = styled.input`
  ${tw`
    font-roboto
    w-full 
    bg-transparent
    border-none
    outline-none
    py-[1px]
    text-base
    placeholder:font-roboto
    `}
`;

export const SearchButton = tw.button`
    w-16
    h-10
    bg-[#ffffff14]
    border
    border-l-0
    border-[#303030]
    rounded-r-full
`;
