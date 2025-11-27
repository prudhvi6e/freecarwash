import { Helmet } from 'react-helmet-async';
import FranchiseContent from '../components/FranchiseContent';

function Franchise() {
    return (
        <>
            <Helmet>
                <title>Franchise Opportunity | Free Car Wash India | AI-Powered Car Wash Business</title>
                <meta name="description" content="Join India's first AI-powered car wash franchise. Premium & Easy Entry options available. ₹5-20 Lakhs investment. Proven Hyderabad pilot with 1,200+ washes. Zero labour, high ROI." />
                <meta name="keywords" content="car wash franchise, franchise opportunity India, AI car wash business, automated car wash franchise, Hyderabad franchise, low investment franchise" />
                <link rel="canonical" href="https://freecarwash.in/franchise" />

                {/* Open Graph */}
                <meta property="og:title" content="Franchise Opportunity | Free Car Wash India" />
                <meta property="og:description" content="Join India's first AI-powered car wash franchise. Investment from ₹5 Lakhs. Proven business model." />
                <meta property="og:url" content="https://freecarwash.in/franchise" />
                <meta property="og:type" content="website" />
            </Helmet>

            <article className="post_item_single post_type_page">
                <div className="post_content entry-content">
                    <FranchiseContent />
                </div>
            </article>
        </>
    );
}

export default Franchise;
