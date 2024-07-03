
import AboutMe from '../assets/aboutme.webp'
export default function About(){
    //  const config ={
    //     Paragraph:""
    //  }

    return <section className='flex flex-col md:flex-row bg-secondary' id='about'>
        <div className='md:w-1/2 flex h-[450px] pt-20 pl-10 pr-10' >
            <img src={AboutMe}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className=' flex flex-col pt-10 '>
            <h1 className='text-4xl pl-1 text-white border-b-2 mb-2 w-[180px] font-bold'>About Me</h1>
            <p className='text-white pt-5 pl-10 pr-20'>My name is Akash, and I am from Kanyakumari,I graduated with a Bachelor's Engineering in Computer Science from Anna University. During my studies, I spearheaded a project called 'Drug Supply Management,' where I led a team responsible for developing the website.<br/><br/>
after my graduation, I pursued a full-stack Python course offered by NetworkzSystems. Throughout the course, I completed numerous projects, like a django framework. after complete the course,Subsequently, I was hired as an intern at INMAKES Infotech, where I worked as a Java full-stack developer.<br/><br/>
I am a highly skilled software developer with expertise in both front-end and back-end technologies.<br/><br/>
I possess strong soft skills, including leadership, teamwork, time management, and problem-solving. I am passionate about my technical and soft skills in a dynamic IT environment.<br/><br/>
I am eagerly looking forward to joining an exceptional team where I can contribute my expertise and collaborate towards achieving common goals.<br/><br/><span className=' font-bold'>yhh! Explore My PortFolio...</span>
</p>
<br/>
<hr/>
        </div>
        </div>
    
   
    </section>
     
}