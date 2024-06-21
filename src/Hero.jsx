import cloud_Hero from "./cloud_Hero.png"

const Hero = () => {
  return (
    <div class="flex flex-col lg:flex-row justify-between items-center p-4">
  <div class="lg:w-1/2 text-center lg:text-left text-white -translate-x-1/4">
    <h2 class="text-6xl font-bold mb-4 text-blue-300 pb-6">Cloudops</h2>
    <p class="text-3xl mb-8 leading-8">We are a team of enthusiastic weebs making you learn about Cloud Computing using AWS
    .</p>
  </div>
  <div class="lg:w-1/2 text-right">
    <img src={cloud_Hero} alt="Image" class="w-full h-full object-cover rounded-lg p-4 m-6 translate-x-1/4 translate-y-1/6"/>
  </div>
</div>
  )
}

export default Hero