// pages/index.js
import Layout from './layout'
import styles from '../styles/Home.module.css'

export default function Page() {
  return (
    <section className="industry-leading pt-5 pb-5">
          <div className="container">
              <div className="row indus-lead">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="contents banner_area">
                        <h1 className="head-title">Industry Leading<br />Solutions To<br />Ensure Your Peace<br />Of Mind</h1>
                        <p>Aiding organizations to enter a decentralized ecosystem while creating long-lasting impacts.</p>
                        <div className="header-button">
                        <a href="#contact" className="btn btn-common">Explore More</a>
                        </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="contents banner_area">
                        <ul class="Management-list">
                          <li class="suffesv3-sub-para">
                            Assisting businesses to enter the realms of the metaverse with AR/VR technologies for creating an overall immersive experience. 
                          </li>
                          <li class="suffesv3-sub-para">Guiding you to the pathways of decentralization in the world of web3 through our top-notch web3 technology services and solutions. </li>
                          
                          
                          <li class="suffesv3-sub-para">Developing Blockchain-powered games that help the gaming community to combine skill with income simultaneously. </li>
                          <li class="suffesv3-sub-para">
                            Offering On-demand Mobile App delivery to boost client's morale and redirect their thought processes towards sustainability.  
                          </li>
                        </ul>
                    </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
