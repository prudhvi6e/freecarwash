import { Helmet } from 'react-helmet-async';
import ContentSections from '../components/ContentSections';

function Home() {
    return (
        <>
            <Helmet>
                <title>Free Car Wash India | AI-Powered 2-Minute Touchless Car Wash | Hyderabad</title>
                <meta name="description" content="India's first AI-powered touchless car wash. Get your car washed in 2 minutes for FREE. Zero labour, automated, air-dried. Available in Hyderabad." />
                <link rel="canonical" href="https://freecarwash.in/" />
            </Helmet>

            <article className="post_item_single post_type_page">
                <div className="post_content entry-content">
                    <ContentSections />
                </div>
            </article>
        </>
    );
}

export default Home;
