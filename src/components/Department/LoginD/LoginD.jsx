import { useState } from "react";
import { supabase } from "../../../client";
import { useNavigate } from "react-router-dom";


const Sigform=({setToken})=>{

	let navigate = useNavigate()



	const [formData,setFormData] = useState({
		logid:"",pswd:""
	})

	console.log(formData)

	function handleChange(event){
		setFormData((prevFormData)=>{
			return{
				...prevFormData,
				[event.target.name]:event.target.value
			}
		})
	}

	
	async function handleSubmit(e){
		e.preventDefault()

	try {
        const { data, error } = await supabase.auth.signInWithPassword({
	    email: formData.logid,
	    password: formData.pswd,
  })
   
  if (error) throw error
  
    console.log
	setToken(data)
	navigate('/department')

		
	} catch (error) {
		alert('invalid Credentials')
	}

	}

	const fogert=[
		{path:"/fogpsw"}
	]
	
    return(
        
	
		<section class="h-screen">
		<div class="h-full">
	
		  <div
			class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
			<div
			  class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
			  <img
				src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
				class="w-full"
				alt="Sample image" />
			</div>
	  
			
			<div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">


			  <form onSubmit={handleSubmit}>
				
	  
				<div class="relative mb-6" data-te-input-wrapper-init>
				  <input
					type="text"
					class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-700 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
					id="exampleFormControlInput2"
					name="logid"
					placeholder="Email address" required
					onChange={handleChange}
					 />
				  <label
					for="exampleFormControlInput2"
					class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-800 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-800 dark:peer-focus:text-primary"
					>Email address
				  </label>
				</div>

				<div class="relative mb-6" data-te-input-wrapper-init>
				  <input
					type="password"
					class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-700 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
					id="exampleFormControlInput22"
				    name="pswd"	
					placeholder="Password" required 
					onChange={handleChange}
					/>
				  <label
					for="exampleFormControlInput22"
					class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-800 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-800 dark:peer-focus:text-primary"
					>Password
				  </label>
				</div>
	  
				<div class="mb-6 flex items-center justify-between">
		
				  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
					<input
					  class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
					  type="checkbox"
					  value=""
					  id="exampleCheck2" />
					<label
					  class="inline-block pl-[0.15rem] hover:cursor-pointer"
					  for="exampleCheck2">
					  Remember me
					</label>
				  </div>
	  
				  
				  <a className=" mr-8" href="/fogpsw">Forgot password?</a>
				</div>
	  
				<div class="text-center lg:text-left">
				  <div className=" box-border ">
               <button className='bg-blue-600 py-2 px-8 transition-all duration-300 rounded-2xl right-8
                 hover:text-gray-200 hover:bg-blue-900 '
			 > Login 
			   </button>
            
               </div>
	  
				
				
				</div>
			  </form>
			</div>
		  </div>
		</div>
	  </section>
    )
}

export default Sigform;