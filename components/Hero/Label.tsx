const Label = () => {
  return (
    /* 1. Position the wrapper div relative to the top-left of the banner.
       2. Use 'top' instead of 'bottom' so it doesn't move when the banner height changes.
    */
    <div className='absolute left-0 top-57 md:top-72 lg:top-96 z-30'>
        <div className='bg-dark-gray text-white px-4 py-2 lg:px-6 lg:py-4 text-[12px] md:text-[16px] font-medium whitespace-nowrap origin-top-left -rotate-90 -translate-y-full rounded-b-xl'>
            Nike product of the year
        </div>
    </div>
  )
}
export default Label