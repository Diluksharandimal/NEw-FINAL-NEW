import campaignsImg from "../../assets/campaigns.svg"
import campaignsImg1 from "../../assets/campaigns1.svg"

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';


const Campaigns = () => {

  
  const Sin=[
    {path:"/Sinup"}
  ]
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-12" >
    
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
        
        variants={fadeIn("right", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}

        className="md:w-1/2">
            <img src={campaignsImg} alt=""/>
        </motion.div>

        {/*Campaigns content */}
        <motion.div 
        
        variants={fadeIn("left", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
        
        className="md:w-2/5">
            <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal">You can launch a campaign that teaching 
             <span className="text-secondary"> about traffic rules.</span></h2>
            <p className="text-tartiary text-lg mb-7">You can teach the students about the traffic rules and give them various online practice papers to train them for the exam.</p>
            <a href='/Sinup'><button className="btnPrimary">Get Started</button></a>
        </motion.div>
      </div>
     
    

      {/*second campaign */}

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div 
        
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        className="md:w-1/3">
            <img src={campaignsImg1} alt=""/>
        </motion.div>

        {/*Campaigns content */}
        <motion.div 
        
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        className="md:w-2/5">
            <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal">You can teach about the 
             <span className="text-secondary"> license renewal process.</span></h2>
            <p className="text-tartiary text-lg mb-7">You can teach how to renew a license and what to do when a license is lost.It's convenient for the newcomers.</p>
            <a href='/Sinup'><button className="btnPrimary">Get Started</button></a>
        </motion.div>
      </div>
      

    </div>
  );
};

export default Campaigns;
