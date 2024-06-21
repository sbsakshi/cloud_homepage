import cloud_logo from './cloud-logo.png'

const About = () => {
  return (
    <div className=' rounded-lg m-10 mb-16 w-full'>
    <div className='text-yellow-500 p-10 text-6xl'>About</div>
    <div class="flex flex-col lg:flex-row justify-between items-center p-8">
  <div class="lg:w-1/2 text-center lg:text-left">
    <p class="text-3xl mb-8 text-white p-8 mr-10 ">Founded in 2022, CloudOps ss the premier cloud-based community for aspiring tech professionals, we bring together students across our university to collaborate, learn, and grow their skills in cloud computing. Our community is dedicated to providing students with opportunities to engage in real-world industrial projects, network with industry leaders, and participate in exciting events and webinars that showcase the latest trends and technologies in cloud computing.</p>
  </div>
  <div class="lg:w-1/2 text-right">
    <img src={cloud_logo} alt="Image" class="w-full h-full object-cover rounded-lg"/>
  </div>
</div>
    </div>
  )
}

export default About