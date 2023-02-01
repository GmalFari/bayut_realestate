import React from 'react'
import { CCarousel } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import Image from 'next/image';
import DefualtImage from '../assets/images/carousel.webp'
import { CCarouselItem,CCarouselCaption,CImage } from '@coreui/react';
const Carousel = () => {

  return (
    <div id="carouselExampleCaptions" className="" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <picture style={{"width":"100%","min-width":"100%"}}>
                <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_lrg-f24c1c214c382225e3cc.webp" media="(min-width: 501px)" type="image/webp"/>
                <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_sml-2ef9d83b6bc8f0064d83.webp" type="image/webp"/>
                <source srcSet="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_lrg-7691ae28813f2da6f446.jpg" media="(min-width: 501px)"/>
                <img style={{"width":"100%","min-width":"100%"}} src="https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_winter_sml-53f6072c7104ff7bf5a4.jpg" alt=""/>
            </picture>
            <div className="carousel-caption">
              <h5>أبحث الأن عن بيت الأحلام</h5>
              <p> نوفر لك جميع ماتحتاجة عن العقارات في مكان واحد</p>
              <div   className="card">
                <div className="card-body">
                  <div className="rent-sale">
                    <button className="sale">للبيع</button>
                    <button className="rent">للإيجار</button>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <span className="filter-property">المنطقة</span>
                      <select className="mt-2 bg-light" name="" id="">
                        <option value="">المنطقة الوسطى </option>
                        <option value="">الضاحية</option>
                        <option value="">منطقة تجارية</option>
                        <option value="">منطقة سكنية</option>
                      </select>
                    </div>
                    <div className="col-3">
                      <span className="filter-property">المدينة</span>
                      <select className="mt-2 bg-light" name="" id="">
                        <option value="">صنعاء</option>
                        <option value="">ذمار</option>
                        <option value="">عدن</option>
                        <option value="">حضرموت</option>
                      </select>
                    </div>
                    <div className="col-3">
                      <span className="filter-property">البحث بحسب</span>
                      <select className="mt-2 bg-light" name="" id="">
                        <option value="">الكل</option>
                        <option value="">بيوت</option>
                        <option value="">شقق</option>
                        <option value="">فلل</option>
                      </select>
                    </div>
                    <div className=" col-3">
                      <button className="search-btn btn">Search</button>
                    </div>
                  </div>
                </div>
                <div className="small-sc-search ">
                  <p className="mb-2 fw-bold">أبحث عن عقارات للبيع والإيجار في اليمن</p>
                  <div className="small-sc-btns">
                    <button className="search-btn btn">عرض كل العقارات</button>
                    <button className="search-btn btn">أبحث</button>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Carousel
