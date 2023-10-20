
const Banner = () => {
  

  return (
 <>
 
 <div className='grid md:grid-cols-3 mt-12 gap-6'>

<div className='ml-10'>
<h1 className='text-4xl font-bold'>Take Your <span className="text-green-500">Dreams</span> To The Next Level!</h1>
<p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet
   culpa debitis ipsum quae eius eum eligendi ad repellendus provident?</p>
   <div><div className="form-control">
  <div className="input-group mt-4">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square bg-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>


</div>
</div>
</div>

<div className="w-96">
<img src="https://i.ibb.co/tJdtbfk/home.png" alt="" />

</div>

<div className='ml-8'>

<div className="ml-16 mt-8">
<h1 className="mt-4"> <span className="text-green-500 text-4xl"> 100</span>  <br /> Subjects to <br /> choose form</h1>
<h1 className="mt-4"><span className="text-green-500 text-4xl"> 120+</span> <br /> Aowesome <br /> Courses</h1>
<h1 className="mt-4"><span className="text-green-500 text-4xl"> 120</span> <br /> Professional <br /> Teacher</h1>
</div>
</div>

 </div>
 </>
  );
};

export default Banner;
