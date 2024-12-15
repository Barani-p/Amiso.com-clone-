import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import img1 from'../assests/im1.png'
import img2 from'../assests/im2.png'
import img3 from'../assests/im3.png'
import img4 from'../assests/ss.png'
import fin1 from'../assests/fin1.png'
import fin2 from'../assests/fin2.png'
import fin3 from'../assests/fin3.png'
import fin4 from'../assests/fin4.png'
import clean from'../assests/clean.jpg'
import clean2 from'../assests/clean2.jpg'
import clean3 from'../assests/clean3.jpg'
import per1 from "../assests/per1.png"
import per2 from "../assests/per2.png"
import per3 from "../assests/per3.png"
import image from "../assests/logo.jpg"
import play from "../assests/play.png"
const Footer=()=>{
    return(
        <>
         <div class='condain'>
         <h6 ><strong>MEET OUR</strong></h6> 
            <h2><strong>Our Team</strong></h2>
      <p>The member of our highly experienced team is dedicated to providing you with only the best service we can possibly provide.</p>
            <div class='con1'>
                <div class='im1'>
                  <img src={img1} alt=''/>
                  <div class='txt'>
                    <h4>Monica Gordon</h4>
                    <p>Housekeeping</p>
                  </div>
                </div>
                <div class='im1'>
                <img src={img2} alt=''/>
                <div  class='txt'>
                    <h4>Laura Jones</h4>
                    <p>Cleaner</p>
                </div>
                </div>
                <div class='im1'>
                <img src={img3} alt=''/>
                <div  class='txt'>
                    <h4>Sara Ryan</h4>
                    <p>HouseCleaner</p>v
                </div>
                </div>
               
            </div>
            <img  class='imm'src={img4} alt=''/>
         </div>
         <div class='mid'>
         <img src={play}/>
            <div class='mid1'>
            <p>Cleaning your Worries Away</p>
             <h3>Need Help With Cleaning?</h3>
         <button>Request Call Back</button>

            </div>
         </div>

         <div class='fin'>
            <div class='f1'>
            <img src={fin1}/>
                <h1>385</h1>
                <p>Happy customers</p>
                
            </div>
            <div class='f1'>
            <img src={fin2}/>
            <h1>842</h1>
            <p>Houses cleaned</p>
            </div>
            <div class='f1'>
            <img src={fin3}/>
            <h1>489</h1>
            <p>Awrds Received</p>
            </div>
            <div class='f1'>
            <img src={fin4}/>
            <h1>1344</h1>
            <p>Glass cleaned</p>
            </div>
         </div>
         <div class='bot'>
            <h6>WHY CHOOSE US
            </h6>
            <h2><strong>Recent News</strong></h2>
            <p>We specialise in intelligent & effective Search and believes in the power of partnerships to grow business.</p>
            <div class='b1'>
            <div class='bot1'>
                <img src={clean}/>
                </div> 
            <div class='bot1'>
            <img src={clean2}/>
            </div>
            <div class='bot1'>
            <img src={clean3}/>
            </div>
            </div>
            
         </div>
         <div class='abso'>
            <div class='ab_1'>
              <h6>CLEANING</h6>
              <h3><strong>Temporary Ruling Issued</strong></h3>
              <p>Washla has met the demands of a<br></br> growing world cleaning tremendous.</p>
              <div class=' ab_img'>
                <img src={per1}/>
                <div class='cl'>
                <h4>Martha Smith</h4>
                <p>Washla CEO</p>
                </div>
                
              </div>
            </div>
            <div class='ab_1'>
            <h6>CLEANING</h6>
              <h3><strong>The Expands California</strong></h3>
              <p>welcomed and every sed ut<br></br> perspiciatis unde omnis iste natus.</p>
              <div class=' ab_img'>
                <img src={per2}/>
                <div class='cl'>
                <h4>Laura Jones</h4>
                  <p>Accounting
                  </p>
                </div>
                
              </div>
            </div>
            <div class='ab_1'>
            <h6>CLEANING</h6>
              <h3><strong>Temporary Ruling Issued</strong>
              </h3>
              <p>Washla has met the demands of a<br></br> growing world. The Cleaning.
              </p>
              <div class=' ab_img'>
                <img src={per3}/>
                <div class='cl'>
                <h4>Matt Ryan
                </h4>
                  <p>Lawyer</p>
                  </div>
              </div>
            </div>
         </div>
         <div class='about'>
           <div class='about_1'>
            <div class='abou_img'>
            <img src={image}/>
            <h1 class='text'>amiso</h1>
            </div> 
            <p>Washla customers has a<br></br> tremendous opportunity to answer
            <br></br>the call of logistic</p>

           </div>
            <div class='about_1'>
                <h4>Get In Touch
                </h4>
              <p>
              8273 NW 56th ST Miami, Florida<br></br>
              33195 United States<br></br>
              <div class='phone'>
              info@amiso.com<br></br>
              052 5401 3322
              </div>
              

              </p>

            </div>
            <div class='about_1'>
            <h4>Quick Links
                </h4>
              <div class='about2'>
                <ul>
                    <li> Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Team</li>
                </ul>
                <ul>
                    <li> FAQ
                    </li>
                    <li>Contact Us</li>
                    <li>Gallery</li>
                    <li>Blogs</li>
                </ul>
              </div>
            </div>
            <div class='about_1'>
            <h4>Our Newsletter</h4>
              <p>
              Subscribe to our newsletter to<br></br> receive the latest news about our<br></br> services

              </p>
              <input type='text' placeholder='Your Email Address'/><button>SIGNUP</button>
              
            </div>
         </div>
        
         <div class='about_2'>
        
            <div>
               <p>@2023 amiso all rights reserved.</p>
            </div>
             <div class='ico'>
                  <span class='emaii'><FontAwesomeIcon icon={ faFacebookF} /></span>
                  <span class='emaii'><FontAwesomeIcon icon={ faTwitter} /></span>
                  <span class='emaii'><FontAwesomeIcon icon={ faInstagram} /></span>
                  <span class='emaii'><FontAwesomeIcon icon={ faLinkedinIn} /></span>
                  </div>
         </div>
        </>
    )
};
export default Footer;