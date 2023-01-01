import { Nav, ContainerSearchInput, SearchInput } from 'themes/navbar'


export const Navbar = () => {
  return (
    <Nav>
      {/* Logo */}
      <div className='flex items-center '>
        <button className='p-2'>
          <img src="/rayitas.svg" alt="xd" height={24} width={24} />
        </button>
        <button className='py-[18px] pr-[14px] pl-[16px]'>
          <img src="/youtube-logo.svg" alt="xd" height={56} width={90} />
        </button>
      </div>

      {/* Input */}
      <div className='flex items-center'>

        <div className='absolute w-12 pl-3 pr-4'>
          <img src='/search-icon.svg' className='' width='100%' />
        </div>
        <ContainerSearchInput>
          <SearchInput placeholder='Buscar' type="text" />
        </ContainerSearchInput>
      </div>

      <div className='w-56 h-10'>
        <div className='bg-gray-300 h-6 w-6 rounded-3xl'>

        </div>
      </div>
    </Nav>
  )
}