import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Exam.css';
import { Link } from 'react-scroll';
import pic from './newemail.svg';
import Footer from '../../Footer/footer';

const ExamsD = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phby018', 'template_9t4bp1o', form.current, 'za5o3Ut1J3nLd3gOM')

      .then((result) => {
        console.log(result.text);
        console.log("Scheduled Sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  const frm = [
    { link: "Click", path: "frm" },
  ];

  return (
    <>
      <h1 className='text-center ml-32 text-8xl font-extrabold text-blue-900'>EXAM</h1>
      <img id='emailsimg' src={pic} alt="" className="mt-32 mb-36 ml-28 lg:h-[386px]" />

      <div>
      <form className='emailform -mt-96' ref={form} onSubmit={sendEmail} id='frm'>
          <p><input className='emailp' placeholder='Name' type="text" name="to_name" /></p>
          <p><input className='emailp' placeholder='Email' type="email" name="user_email" /></p>
          <p><textarea className='emailp1' placeholder='Message' name="message" /></p>
          <button className='emaibtn' type="submit">Send</button>
        </form>
      </div>

      <div className="containers d-flex bg-white mt-96 w-16">
        <div className="md:w-3/4 absolute mb-8 mt-96 ml-32" data-aos="flip-left">
          <h2 className="md:text-5x1 text-5xl font-bold text-blue-800 mb-5 leading-normal" data-aos="zoom-in">
            To update? <span className="text-blue-400">.</span>
          </h2>
          <p className="text-blue-300 text-xl mb-7 ml-40 float-right">
            In here you can update written and trial examination results of all candidates.
          </p>
          <p><input className='emailp mt-16 ml-96' placeholder='Name' type="text" /></p>
          <p><input className='emailp mt-12 ml-96' placeholder='Status' type="email" /></p>
          <button className='emaibtn ml-96 mt-5' type="submit">Update</button>

          <br></br>
          <br></br>
          <br></br>

          <h2 className="md:text-5x1 text-5xl font-bold text-blue-800 mb-5 leading-normal ml float-right -mr-24 mt-12" data-aos="flip-right">
            To Send? <span className="text-blue-400" data-aos="zoom-in"> (E-mails).</span>
          </h2>
          <br></br>
          <br></br>
          <p className="text-blue-300 text-xl mb-7 -mr-96" data-aos="zoom-in">
            You can send emails with including (Exam schedules, virtual-license and other notifications via E-mail)
          </p>
          <ul className='md:flex space-x-12 hidden'>
            {frm.map(({ link, path }) => <Link spy={true} smooth={true} offset={-100} key={link} to={path} className='btn btn-primary2'>{link}</Link>)}
          </ul>
          <p></p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ExamsD;
