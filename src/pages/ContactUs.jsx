import { Helmet } from 'react-helmet-async';
import ContactContent from '../components/ContactContent';

function ContactUs() {
    return (
        <>
            <Helmet>
                <title>Contact Us | Free Car Wash India | Hyderabad | +91 6305274893</title>
                <meta name="description" content="Get in touch with Free Car Wash India. Located in Hyderabad, Telangana. Call +91 6305274893 or email support@freecarwash.in. Open Mon-Sun: 7 AM – 10 PM." />
                <meta name="keywords" content="contact free car wash, car wash Hyderabad contact, free car wash phone number, car wash customer support" />
                <link rel="canonical" href="https://freecarwash.in/contact-us" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Us | Free Car Wash India" />
                <meta property="og:description" content="Get in touch with Free Car Wash India. Call +91 6305274893 or visit us in Hyderabad." />
                <meta property="og:url" content="https://freecarwash.in/contact-us" />
                <meta property="og:type" content="website" />
            </Helmet>

            <article className="post_item_single post_type_page">
                <div className="post_content entry-content">
                    <ContactContent />
                </div>
            </article>
        </>
    );
}

export default ContactUs;
