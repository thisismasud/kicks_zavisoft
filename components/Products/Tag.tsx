import React from 'react'

const Tag = ({text}: {text: string}) => {
  return (
    <span className={`absolute left-2 top-2 z-10 rounded-br-[14px] rounded-tl-[12px] md:rounded-br-[24px] md:rounded-tl-[20px] bg-primary py-1 px-[8px] md:px-4 md:py-2 text-[12px] font-semibold tracking-wider ${text === "New" ? "bg-primary text-white" : "bg-yellow text-dark-gray "}`}>
            {text}
    </span>
  )
}

export default Tag