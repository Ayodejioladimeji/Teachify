import './ContactUs.css';
import BreadCumb from './../breadcumb/BreadCumb';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <BreadCumb title='Contact Us' path=' / contact' />
      <div className='callback'>
        <div className='callback-left'>
          <img
            src='https://res.cloudinary.com/mamazee/image/upload/v1637054769/Teachify/Sheretta_Butler-Barnes_works_with_Girls_Inc._Eureka_Program_which_exposes_high_school_girls_of_color_to_an_intensive_STEM-based_curriculum._Her_research_addresses_structural_racism_and_inequalities_in_education_and_jfzhw2.jpg'
            alt='callback-pic'
          />
        </div>

        <div className='callback-right' data-aos='zoom-in' data-aos-once='true'>
          <div className='callback-contact'>
            <form>
              <label htmlFor='name'>FullName</label>
              <input
                type='text'
                name='fullname'
                placeholder='Enter your full name'
                required
              />

              <label htmlFor='name'>Email</label>
              <input
                type='text'
                name='email'
                placeholder='Enter your email'
                required
              />

              <label htmlFor='name'>Mobile</label>
              <input
                type='text'
                name='mobile'
                placeholder='Enter your mobile no'
                required
              />

              <label htmlFor='name'>Message</label>
              <textarea name='message' required />

              <button className='btn'>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
