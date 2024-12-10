import React from 'react';

const footerIcons = () =>{
    const platforms = ['Instagram', 'Facebook', 'TikTok'];
    let footerIcons = [];
    for(let i = 0; i < platforms.length; i++){
      footerIcons.push(
        <li key={i}>
          <a className='footer-link'>
            <i className={`fab fa-${platforms[i].toLowerCase()}`} title={platforms[i]} alt={`${platforms[i]} logo`}></i>
          </a>
        </li>
      )
    }
    return (
      footerIcons
    )
  }

  const footerLinks = () => {
    const linkNames = ['FAQs', 'Shipping & Returns', 'Privacy Policy'];
    let footerLinks = [];
    for(let i = 0; i < linkNames.length; i++){
      footerLinks.push(
        <li key={i}><a className='footer-link'>{linkNames[i]}</a></li>
      )
    }
    return(
      footerLinks
    )
  }

const Footer = () => {
return(
    <footer>
        <div className='footer-columns'>
          <div className='footer-column'>
            <ul className='footer-list contact-information font-extra-small'>
              <li><i className='fas fa-phone'></i> (012)345-6789</li>
              <br/>
              <li>greenoasis@email.com<br/>Business inquiries only</li>
              <br/>
              <li>4335 Lorem Ipsum Dolor<br/>
                582 Sonsectetur St.<br/>
                Phoenix, AZ 85001
              </li>
            </ul>
          </div>
          <div className='footer-column footer-2'>
            <ul className='footer-list social-media-footer'>
              {footerIcons()}
            </ul>
            <p className='font-extra-small'>Hours: 9:30am-7:00pm<br/>Monday-Saturday</p>
          </div>
          <div className='footer-column'>
            <ul className='footer-list other-information font-extra-small'>
              {footerLinks()}
            </ul>
          </div>
        </div>
        <p className='copyright-statement font-extra-small'>© 2023 Green Oasis Florist. All rights reserved.</p>
      </footer>
)
}

export default Footer