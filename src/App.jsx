import React from 'react';
import Header from './components/Header';
import ContentSections from './components/ContentSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body_wrap">
      <div className="page_wrap">
        <Header />
        <div className="page_content_wrap">
          <div className="content_wrap_fullscreen">
            <div className="content">
              <article className="post_item_single post_type_page page type-page status-publish hentry" id="post-37192">
                <div className="post_content entry-content">
                  <ContentSections />
                </div>
              </article>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
