import React from 'react'

const Highlight = () => {
  return (
    <div className=' border rounded-lg m-10 mb-16 bg-slate-800 '>
    <div className='text-yellow-500 p-10 text-6xl '>Spotlight</div>
    <div class="flex flex-col lg:flex-row justify-between items-center p-8">
  <div class="lg:w-1/2 text-center lg:text-left">
    <p class="text-3xl mb-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
  </div>
  <div class="lg:w-1/2 text-right">
    <img src="" alt="Image" class="w-full h-full object-cover rounded-lg"/>
  </div>
</div>
    </div>
  )
}

export default Highlight