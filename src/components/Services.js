import React from 'react';
import './Services.css';
import img1 from '../assests/img-1.png';
import img2 from '../assests/img-2.png';
import img3 from '../assests/img-3.png';
import imgb1 from '../assests/img-box-1.png';
import imgb2 from '../assests/img-box-2.png';
import imgb3 from '../assests/img-box-3.png';
import imgmi1 from '../assests/mini1.png';
import imgmi2 from '../assests/mini2.png';
import imggirl from '../assests/girl.png'
import imglst1 from '../assests/last1.png'
import imglst2 from '../assests/last2.png'
import imglst3 from '../assests/last3.png'
const Services = () => {
  return (
    <>
    <section className="services">
      <div className="service-cards">
        <div class="cards">
        <img src={img1} alt="image"/>
          <h4><strong>Professional Cleaning</strong></h4>
          <p>Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.</p>
        </div>
        <div class="cards">
        <img src={img2} alt="image"/>
          <h4><strong>Fast and efficient</strong></h4>
          <p>Professional window cleaning for residential and commercial needs.</p>
        </div>
        <div class="cards">
        <img src={img3} alt="image"/>
          <h4><strong>Renew your Look</strong></h4>
          <p>Keep your workspace clean and productive with our office cleaning services.</p>
        </div>
      </div>
      <div class='con'>
      <div class='cont1'>
      <h3><strong>A Clean House is a</strong></h3> 
      <h3 class='ht'><strong>Happy Place!</strong></h3> 
      <p class='pt1'>Washla has met the demands of a growing world.</p>
      </div>
      <div class='cont2'> 
      <p><strong>W</strong>ashla customers has a tremendous opportunity to answer the call of logistic needs across the globe. Has 26 affiliated state soybean associations representing 30 soybean-producing state</p>
      </div>
      <div class='cont3'>
      <p>World's leading non-asset-based supply chain management companies, we design and implement industry-leading. We specialise in intelligent & effective search and believes in the power of partnerships to grow business.</p>
      </div>
      </div>
    </section>
    <div class='foot'>
      <div class='foot1'>
      <h> <strong>WHY CHOOSE US</strong></h>
      <h1>Tradition of Trust</h1>

        We specialise in intelligent & effective Search and believes in the power of<br/> partnerships to grow business.
      </div>
      <div class='sub_con'>
      <div class='icon1'>
      <img src={imgb1} alt="image"/>
      <h3>Profesional Team</h3>

         <p>Our team uses a sanitizing solution to wipe down light switches doorknobs.</p>


      </div>
      <div class='icon1'>
      <img src={imgb2} alt="image"/>
      <h3>24/7 Services</h3>

      <p>We encourage our customers to let us know in advance of an appointment</p>
      </div>
      <div class='icon1'>
      <img src={imgb3} alt="image"/>
      <h3>Service Guarantee</h3>

    <p>We are telling our team members to switch out all cleaning cloths and mopheads.</p>
      </div>
      </div>
      

    </div>
    <div class='img-con'>
      <div class='img-con1'>
        <img src={imggirl} alt='image for girl'/>
      </div>
      <div class='img-con2'>
        <div class='img-con3'>
          <h5><strong>MAID FOR YOU</strong></h5><br/>
          <h3>A Cleaner Place is a Safer Place</h3><br/>
          <p>Washla cleaning service. We are a company dedicated to giving our customers back the <br></br>time they deserve to enjoy the things they love.
          </p>
          <div class='mini1'>
            <div class='m1'>
            <img src={imgmi1} alt=''></img>
            <h4>Professional Cleaning</h4>

           <p>Housekeeping is responsible for minor <br></br>security in hotel.</p>

            </div>
            <div class='m1'>
            <img src={imgmi2} alt=''></img>
              <h4>Fast and efficient</h4>
            <p>Both of us take a lot of time in getting<br></br> cleaned Clean Home.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class='last-con'>
      <div class='last-con1'>
    <h4>WHY CHOOSE US </h4>
      <h2><strong>Our Great Service</strong></h2>
 <p>Restoring the beauty and freshness of all your upholstered fabrics and take the work out of housework for you.
 </p>
 </div>
 <div class='last-box'>
 <div class='box1'>
 <img src={imglst1} alt="image"/>
 <h4><strong>Home Cleaning</strong></h4>

<p>Homes and thoroughly launder them between usage. We give our teams the accusantium doloremque laudantium.</p>

 </div>
 <div class='box1'>
 <img src={imglst2} alt="image"/>
 <h4><strong>Windows Cleaning</strong></h4>
 

<p>We are closely monitoring national, state and local health agencies for the most recent developments.</p>


 </div>
 <div class='box1'>
 <img src={imglst3} alt="image"/>
 <h4><strong>Office Cleaning</strong></h4>
<p>Follow these tips from the CDC to help prevent the spread of the seasonal flu and respiratory diseases.</p>
 </div>
 </div>
    </div>

    </>
  )};

export default Services