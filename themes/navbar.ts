import tw, { styled } from "twin.macro";

export const Nav = tw.nav`
    flex
    items-center
    justify-between
    h-14
    px-4
    bg-[#212121fa]
`;

export const ContainerSearchInput = tw.div`
    flex
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
`;

export const SearchInput = tw.input`
    w-full 
    bg-transparent
    border-none
    outline-none
    py-[1px]
    text-base
    placeholder:font-roboto
`