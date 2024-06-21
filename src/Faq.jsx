import { useState } from 'react';
import arrow from './arrow.png'

const Faq = () => {
  const faq_content = [
    {
      id: 0,
      title: " What is CloudOps?",
      text: " CloudOps is a college club dedicated to promoting DevOps and cloud computing among students. We organize events, workshops, and seminars to help students learn about these technologies and their applications in the real world.",
    },
    {
      id: 1,
      title: "Who can join CloudOps?",
      text: "CloudOps is open to all students interested in learning about DevOps, cloud computing, and related technologies. Whether you're a beginner or have some experience, you're welcome to join.",
    },
    {
      id: 2,
      title: "How can I join CloudOps?",
      text: "We conduct a recruitment drive every year. You can get updates about our recruitment process and other activities through our Instagram handle.",
    },
    {
      id: 3,
      title: "What types of events does CloudOps organize?",
      text: "CloudOps organizes a variety of events, including workshops, hackathons, guest lectures, and hands-on labs. These events cover topics like cloud platforms (AWS, Azure, GCP), DevOps practices, containerization, and CI/CD pipelines.",
    },
    {
      id: 4,
      title: "What resources does CloudOps provide for learning?",
      text: "CloudOps provides a range of learning resources, including online tutorials, study groups. We also offer mentorship from experienced members.",
    },
    {
      id: 5,
      title: "How can I contribute to CloudOps?",
      text: "You can contribute to CloudOps by volunteering to help organize events, sharing your knowledge with other members, or leading a workshop or study group. We're always looking for enthusiastic members to get involved.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setIsOpen(!isOpen);
    setCurrentIndex(index);
  };

  const accordionContent = faq_content.map((item, index) => (
    <div key={index} className='border-b-2 p-8 text-left'>
        <div className='flex justify-between'
       onClick={() => toggleAccordion(index)}>
        <h2 className='mb-4'> {item.title}
      </h2>
      <img src={arrow} 
      height={40}
      width={40}    
      className='rounded-full'/>
      </div>
      <p className={`${currentIndex === index ? "block" : "hidden"} text-xl text-blue-400 `}>{item.text}</p>
    </div>
  ));

  return (
    <div className="text-white mt-10 pt-8">
      <div>
        <h1 className='text-6xl text-yellow-500'>FAQ</h1>
        <div className='text-white text-3xl cursor-pointer ;
'>
        {accordionContent}
        </div>
      </div>
    </div>
  );
};

export default Faq;