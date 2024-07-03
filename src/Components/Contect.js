
export default function Contect(){
      const config={
        email:' akash19m08y2001@gmail.com ',
        phone:' +91 7339432259'
      }
    
    return <section className='flex flex-col bg-secondary px-5 py-32' id="contect">
        <div className='flex flex-col items-center text-white'>
            <h1 className='text-4xl text-white border-b-2 mb-2 w-[140px] font-bold'>Contect</h1>
            <p className="pb-4 pt-4">If you want to discuss more in detail, please Contect me!</p>
            <p className="py-2"><span className="font-bold">Email :</span>{config.email}</p>
            <p className="py-2"><span className="font-bold">Phone :</span>{config.phone}</p>
        </div>
    </section>
}