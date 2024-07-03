import HeroImg from '../assets/Hero.webp' 
import { AiFillInstagram,AiFillTwitterSquare,AiFillGithub,AiFillLinkedin,AiFillFacebook} from "react-icons/ai";
export default function Hero(){
    const config ={
        subtitle:"I'm a Full-Stack-Developer!",
        Social: {
            twitter: '/',
            instagram: 'https://www.instagram.com/lofer_idol._/',
            github: 'https://github.com/Akash19082001',
            linkedin: 'https://www.linkedin.com/in/akashjava/',
            facebook: '/'
        }
    }

    return<div><section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center h-fit'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-8xl' >hi, <br/>I'm <span className='font-hero-font font-bold'>A</span>kash
         <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-3 justify-items-center'>
            <a href={config.Social.twitter} className='pr-1'><AiFillTwitterSquare size={35} color='white'/></a>
            <a href={config.Social.instagram} className='pr-1'><AiFillInstagram size={35} color='white'/></a>
            <a href={config.Social.github} className='pr-1'><AiFillGithub size={35} color='white'/></a>
            <a href={config.Social.linkedin} className='pr-1'><AiFillLinkedin size={35} color='white'/></a>
            <a href={config.Social.facebook} className='pr-1'><AiFillFacebook size={35} color='white'/></a>
        </div>
        </div>
        <img className='md:w-1/3 'src={HeroImg}/>
    </section>
    <hr/>
    </div>
}
