import Image from 'next/image'

export const TopNavBar = () => {
  return (
    <div className='max-w-[1120px] sm:px-[22px] py-2.5 sm:py-[11px] md:py-[18px] mx-auto'>
      <div className='flex justify-between items-center border-b border-b-[#242424] md:border-b-transparent px-[22px] sm:px-0 pb-[11px] md:pb-0'>
        <div className='flex items-center sm:hidden mobile-logo'>
          <Image src='/profile-logo.svg' alt='logo' width={43} height={43} />
        </div>
        <div className='hidden sm:flex items-center gap-2 py-3 px-4 rounded-full sm:border sm:border-[#9898982e] bg-dual-gradient'>
          <div className=' desktop-logo'>
            <Image src='/profile-logo.svg' alt='logo' width={24} height={24} />
          </div>
          <p className='font-bold text-[16px]'>Cynthia Osi</p>
        </div>
        <div className='flex items-center gap-2 py-3 px-4 rounded-full border border-[#9898982e] bg-dual-gradient'>
          <p className='font-bold text-[16px] uppercase'>09:23 AM | GMT +1</p>
        </div>
      </div>
    </div>
  )
}

export const BottomNavBar = () => {
  return (
    <div>
      <h1>Bottom Nav Bar</h1>
    </div>
  )
}
