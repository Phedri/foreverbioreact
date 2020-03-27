import React, { Component } from 'react'


const Home = () => {


    return (
        <>
        <div class="header--sidebar"></div>
    <header class="header">
      <div class="header__top">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
              <p>
                Avenue Ibn Sina, Rabat, Maroc Téléphone : +212 5377-71905
              </p>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
              <div class="header__actions">
                <a href="#">Se connecter & S'inscrire</a>
                <div class="btn-group ps-dropdown">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >MAD<i class="fa fa-angle-down"></i
                  ></a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#"
                        ><img src="images/flag/maroc.svg" alt="" /> MAD</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img src="images/flag/usa.svg" alt="" /> USD</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img src="images/flag/singapore.svg" alt="" /> SGD</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img src="images/flag/japan.svg" alt="" /> JPN</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="btn-group ps-dropdown">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Langue<i class="fa fa-angle-down"></i
                  ></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Français</a></li>
                    <li><a href="#">Anglais</a></li>
                    <li><a href="#">Espagnol</a></li>
                    <li><a href="#">Allemand</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navigation">
        <div class="container-fluid">
          <div class="navigation__column left">
            <div class="header__logo">
              <a class="ps-logo" href="index.html"
                ><img src="images/logo.png" alt=""
              /></a>
            </div>
          </div>
          <div class="navigation__column center">
            <ul class="main-menu menu">
              <li class="menu-item menu-item-has-children dropdown">
                <a href="index.html">Accueil</a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="index.html">Accueil #1</a>
                  </li>
                  <li class="menu-item"><a href="#">Accueil #2</a></li>
                  <li class="menu-item"><a href="#">Accueil #3</a></li>
                </ul>
              </li>
              <li class="menu-item"><a href="#">Nourriture</a></li>
              <li class="menu-item"><a href="#">Habit</a></li>
              <li class="menu-item menu-item-has-children dropdown">
                <a href="#">Forum</a>
                <ul class="sub-menu">
                  <li class="menu-item menu-item-has-children dropdown">
                    <a href="blog-grid.html">Blog-grid</a>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <a href="blog-grid.html">Blog Grid 1</a>
                      </li>
                      <li class="menu-item">
                        <a href="blog-grid-2.html">Blog Grid 2</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a href="blog-list.html">Blog List</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children dropdown">
                <a href="#">Contact</a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="contact-us.html">Contact Us #1</a>
                  </li>
                  <li class="menu-item">
                    <a href="contact-us.html">Contact Us #2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="navigation__column right">
            <form class="ps-search--header" action="do_action" method="post">
              <input
                class="form-control"
                type="text"
                placeholder="Chercher Produit..."
              />
              <button><i class="ps-icon-search"></i></button>
            </form>
            <div class="ps-cart">
              <a class="ps-cart__toggle" href="#"
                ><span><i>20</i></span
                ><i class="ps-icon-shopping-cart"></i
              ></a>
              <div class="ps-cart__listing">
                <div class="ps-cart__content">
                  <div class="ps-cart-item">
                    <a class="ps-cart-item__close" href="#"></a>
                    <div class="ps-cart-item__thumbnail">
                      <a href="product-detail.html"></a
                      ><img src="images/cart-preview/1.jpg" alt="" />
                    </div>
                    <div class="ps-cart-item__content">
                      <a class="ps-cart-item__title" href="product-detail.html"
                        >Lorem Ipsum’</a
                      >
                      <p>
                        <span>Quantité:<i>12</i></span
                        ><span>Total:<i>176MAD</i></span>
                      </p>
                    </div>
                  </div>
                  <div class="ps-cart-item">
                    <a class="ps-cart-item__close" href="#"></a>
                    <div class="ps-cart-item__thumbnail">
                      <a href="product-detail.html"></a
                      ><img src="images/cart-preview/2.jpg" alt="" />
                    </div>
                    <div class="ps-cart-item__content">
                      <a class="ps-cart-item__title" href="product-detail.html"
                        >Lorem Ipsum</a
                      >
                      <p>
                        <span>Quantité:<i>12</i></span
                        ><span>Total:<i>176MAD</i></span>
                      </p>
                    </div>
                  </div>
                  <div class="ps-cart-item">
                    <a class="ps-cart-item__close" href="#"></a>
                    <div class="ps-cart-item__thumbnail">
                      <a href="product-detail.html"></a
                      ><img src="images/cart-preview/3.jpg" alt="" />
                    </div>
                    <div class="ps-cart-item__content">
                      <a class="ps-cart-item__title" href="product-detail.html"
                        >Lorem Ipsum</a
                      >
                      <p>
                        <span>Quantité:<i>12</i></span
                        ><span>Total:<i>176MAD</i></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="ps-cart__total">
                  <p>Nombre d'Items:<span>36</span></p>
                  <p>Item Total:<span>528.00MAD</span></p>
                </div>
                <div class="ps-cart__footer">
                  <a class="ps-btn" href="cart.html"
                    >Acheter<i class="ps-icon-arrow-left"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="menu-toggle"><span></span></div>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="ps-main">
      <div class="ps-banner">
        <div class="rev_slider fullscreenbanner" id="home-banner">
          <ul>
            <li
              class="ps-banner"
              data-index="rs-2972"
              data-transition="random"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-rotate="0"
            >
              <img
                class="rev-slidebg"
                src="images/slider/3.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="5"
                data-no-retina
              />
              <div
                class="tp-caption ps-banner__header"
                id="layer-1"
                data-x="left"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-150','-120','-150','-170']"
                data-width="['none','none','none','400']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
              >
                <p>
                  Lorem ipsum <br />
                  Lorem 
                </p>
              </div>
              <div
                class="tp-caption ps-banner__title"
                id="layer21"
                data-x="['left','left','left','left']"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-60','-40','-50','-70']"
                data-type="text"
                data-responsive_offset="on"
                data-textAlign="['center','center','center','center']"
                data-frames='[{"delay":1200,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
              >
                <p class="text-uppercase">Lorem ipsum</p>
              </div>
              <div
                class="tp-caption ps-banner__description"
                id="layer211"
                data-x="['left','left','left','left']"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['30','50','50','50']"
                data-type="text"
                data-responsive_offset="on"
                data-textAlign="['center','center','center','center']"
                data-frames='[{"delay":1200,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. <br />
                  Eleifend quam adipiscing vitae proin sagittis nisl.
                </p>
              </div>
              <a
                class="tp-caption ps-btn"
                id="layer31"
                href="#"
                data-x="['left','left','left','left']"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['120','140','200','200']"
                data-type="text"
                data-responsive_offset="on"
                data-textAlign="['center','center','center','center']"
                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
                >Acheter maintenant!<i class="ps-icon-next"></i
              ></a>
            </li>
            <li
              class="ps-banner ps-banner--white"
              data-index="rs-100"
              data-transition="random"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-rotate="0"
            >
              <img
                class="rev-slidebg"
                src="images/slider/2.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="5"
                data-no-retina
              />
              <div
                class="tp-caption ps-banner__header"
                id="layer20"
                data-x="left"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-150','-120','-150','-170']"
                data-width="['none','none','none','400']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
              >
                <p>
                  Lorem Ipsum<br />
                  Lorem 
                </p>
              </div>
              <div
                class="tp-caption ps-banner__title"
                id="layer339"
                data-x="['left','left','left','left']"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-60','-40','-50','-70']"
                data-type="text"
                data-responsive_offset="on"
                data-textAlign="['center','center','center','center']"
                data-frames='[{"delay":1200,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
              >
                <p class="text-uppercase">Lorem Ipsum</p>
              </div>
              <div
                class="tp-caption ps-banner__description"
                id="layer2-14"
                data-x="['left','left','left','left']"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['30','50','50','50']"
                data-type="text"
                data-responsive_offset="on"
                data-textAlign="['center','center','center','center']"
                data-frames='[{"delay":1200,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
              >
                <p>
                  Amet cursus sit amet dictum sit amet justo donec enim
                  <br />
                  Nec feugiat in fermentum posuere urna. Aliquet lectus <br />
                  proin nibh nisl condimentum. Hendrerit dolor magna eget est.
                </p>
              </div>
              <a
                class="tp-caption ps-btn"
                id="layer364"
                href="#"
                data-x="['left','left','left','left']"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['120','140','200','200']"
                data-type="text"
                data-responsive_offset="on"
                data-textAlign="['center','center','center','center']"
                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
                >Acheter maintenant!<i class="ps-icon-next"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="ps-section--features-product ps-section masonry-root pt-100 pb-100"
      >
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h3 class="ps-section__title" data-mask="features">
              - Découvrez nos meilleurs produits
            </h3>
            <ul class="ps-masonry__filter">
              <li class="current">
                <a href="#" data-filter="*">Tout <sup>8</sup></a>
              </li>
              <li>
                <a href="#" data-filter=".nike">Nourriture<sup>1</sup></a>
              </li>
              <li>
                <a href="#" data-filter=".adidas">Boisson <sup>1</sup></a>
              </li>
              <li>
                <a href="#" data-filter=".men">Textile<sup>1</sup></a>
              </li>
              <li>
                <a href="#" data-filter=".women">Agriculture <sup>1</sup></a>
              </li>
            </ul>
          </div>
          <div class="ps-section__content pb-50">
            <div
              class="masonry-wrapper"
              data-col-md="4"
              data-col-sm="2"
              data-col-xs="1"
              data-gap="30"
              data-radio="100%"
            >
              <div class="ps-masonry">
                <div class="grid-sizer"></div>
                <div class="grid-item kids">
                  <div class="grid-item__content-wrapper">
                    <div class="ps-shoe mb-30">
                      <div class="ps-shoe__thumbnail">
                        <div class="ps-badge"><span>Nouveau</span></div>
                        <div class="ps-badge ps-badge--sale ps-badge--2nd">
                          <span>-35%</span>
                        </div>
                        <a class="ps-shoe__favorite" href="#"
                          ><i class="ps-icon-heart"></i></a
                        ><img src="images/bio-product/1.jpg" alt="" /><a
                          class="ps-shoe__overlay"
                          href="product-detail.html"
                        ></a>
                      </div>
                      <div class="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <div class="ps-shoe__variant normal">
                            <img src="images/bio-product/2.jpg" alt="" /><img
                              src="images/bio-product/3.jpg"
                              alt=""
                            /><img src="images/bio-product/4.jpg" alt="" /><img
                              src="images/bio-product/5.jpg"
                              alt=""
                            />
                          </div>
                          <select class="ps-rating ps-shoe__rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                        </div>
                        <div class="ps-shoe__detail">
                          <a class="ps-shoe__name" href="#"
                            >Lorem Ipsum</a
                          >
                          <p class="ps-shoe__categories">
                            <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                              href="#"
                            >
                              Textile</a
                            >
                          </p>
                          <span class="ps-shoe__price">
                            <del>220MAD</del> 120MAD</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid-item nike">
                  <div class="grid-item__content-wrapper">
                    <div class="ps-shoe mb-30">
                      <div class="ps-shoe__thumbnail">
                        <a class="ps-shoe__favorite" href="#"
                          ><i class="ps-icon-heart"></i></a
                        ><img src="images/bio-product/2.jpg" alt="" /><a
                          class="ps-shoe__overlay"
                          href="product-detail.html"
                        ></a>
                      </div>
                      <div class="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <div class="ps-shoe__variant normal">
                            <img src="images/bio-product/2.jpg" alt="" /><img
                              src="images/bio-product/3.jpg"
                              alt=""
                            /><img src="images/bio-product/4.jpg" alt="" /><img
                              src="images/bio-product/5.jpg"
                              alt=""
                            />
                          </div>
                          <select class="ps-rating ps-shoe__rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                        </div>
                        <div class="ps-shoe__detail">
                          <a class="ps-shoe__name" href="#"
                            >Lorem Ipsum</a
                          >
                          <p class="ps-shoe__categories">
                            <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                              href="#"
                            >
                              Textile</a
                            >
                          </p>
                          <span class="ps-shoe__price"> 120MAD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid-item adidas">
                  <div class="grid-item__content-wrapper">
                    <div class="ps-shoe mb-30">
                      <div class="ps-shoe__thumbnail">
                        <a class="ps-shoe__favorite" href="#"
                          ><i class="ps-icon-heart"></i></a
                        ><img src="images/bio-product/3.jpg" alt="" /><a
                          class="ps-shoe__overlay"
                          href="product-detail.html"
                        ></a>
                      </div>
                      <div class="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <div class="ps-shoe__variant normal">
                            <img src="images/bio-product/2.jpg" alt="" /><img
                              src="images/bio-product/3.jpg"
                              alt=""
                            /><img src="images/bio-product/4.jpg" alt="" /><img
                              src="images/bio-product/5.jpg"
                              alt=""
                            />
                          </div>
                          <select class="ps-rating ps-shoe__rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                        </div>
                        <div class="ps-shoe__detail">
                          <a class="ps-shoe__name" href="#"
                            >Lorem Ipsum</a
                          >
                          <p class="ps-shoe__categories">
                            <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                              href="#"
                            >
                              Textile</a
                            >
                          </p>
                          <span class="ps-shoe__price">  120MAD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid-item kids">
                  <div class="grid-item__content-wrapper">
                    <div class="ps-shoe mb-30">
                      <div class="ps-shoe__thumbnail">
                        <div class="ps-badge ps-badge--sale">
                          <span>-35%</span>
                        </div>
                        <a class="ps-shoe__favorite" href="#"
                          ><i class="ps-icon-heart"></i></a
                        ><img src="images/bio-product/4.jpg" alt="" /><a
                          class="ps-shoe__overlay"
                          href="product-detail.html"
                        ></a>
                      </div>
                      <div class="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <div class="ps-shoe__variant normal">
                            <img src="images/bio-product/2.jpg" alt="" /><img
                              src="images/bio-product/3.jpg"
                              alt=""
                            /><img src="images/bio-product/4.jpg" alt="" /><img
                              src="images/bio-product/5.jpg"
                              alt=""
                            />
                          </div>
                          <select class="ps-rating ps-shoe__rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                        </div>
                        <div class="ps-shoe__detail">
                          <a class="ps-shoe__name" href="#"
                            >Lorem Ipsum</a
                          >
                          <p class="ps-shoe__categories">
                            <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                              href="#"
                            >
                              Textile</a
                            >
                          </p>
                          <span class="ps-shoe__price">
                            <del>220MAD</del>  120MAD</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid-item men">
                  <div class="grid-item__content-wrapper">
                    <div class="ps-shoe mb-30">
                      <div class="ps-shoe__thumbnail">
                        <a class="ps-shoe__favorite" href="#"
                          ><i class="ps-icon-heart"></i></a
                        ><img src="images/bio-product/5.jpg" alt="" /><a
                          class="ps-shoe__overlay"
                          href="product-detail.html"
                        ></a>
                      </div>
                      <div class="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <div class="ps-shoe__variant normal">
                            <img src="images/bio-product/2.jpg" alt="" /><img
                              src="images/bio-product/3.jpg"
                              alt=""
                            /><img src="images/bio-product/4.jpg" alt="" /><img
                              src="images/bio-product/5.jpg"
                              alt=""
                            />
                          </div>
                          <select class="ps-rating ps-shoe__rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                        </div>
                        <div class="ps-shoe__detail">
                          <a class="ps-shoe__name" href="#"
                            >Lorem Ipsum</a
                          >
                          <p class="ps-shoe__categories">
                            <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                              href="#"
                            >
                              Textile</a
                            >
                          </p>
                          <span class="ps-shoe__price">  120MAD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid-item women">
                  <div class="grid-item__content-wrapper">
                    <div class="ps-shoe mb-30">
                      <div class="ps-shoe__thumbnail">
                        <a class="ps-shoe__favorite" href="#"
                          ><i class="ps-icon-heart"></i></a
                        ><img src="images/bio-product/6.jpg" alt="" /><a
                          class="ps-shoe__overlay"
                          href="product-detail.html"
                        ></a>
                      </div>
                      <div class="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <div class="ps-shoe__variant normal">
                            <img src="images/bio-product/2.jpg" alt="" /><img
                              src="images/bio-product/3.jpg"
                              alt=""
                            /><img src="images/bio-product/4.jpg" alt="" /><img
                              src="images/bio-product/5.jpg"
                              alt=""
                            />
                          </div>
                          <select class="ps-rating ps-shoe__rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                        </div>
                        <div class="ps-shoe__detail">
                          <a class="ps-shoe__name" href="#"
                            >Lorem Ipsum</a
                          >
                          <p class="ps-shoe__categories">
                            <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                              href="#"
                            >
                              Textile</a
                            >
                          </p>
                          <span class="ps-shoe__price">  120MAD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid-item kids">
                  <div class="grid-item__content-wrapper">
                    <div class="ps-shoe mb-30">
                      <div class="ps-shoe__thumbnail">
                        <a class="ps-shoe__favorite" href="#"
                          ><i class="ps-icon-heart"></i></a
                        ><img src="images/bio-product/7.jpg" alt="" /><a
                          class="ps-shoe__overlay"
                          href="product-detail.html"
                        ></a>
                      </div>
                      <div class="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <div class="ps-shoe__variant normal">
                            <img src="images/bio-product/2.jpg" alt="" /><img
                              src="images/bio-product/3.jpg"
                              alt=""
                            /><img src="images/bio-product/4.jpg" alt="" /><img
                              src="images/bio-product/5.jpg"
                              alt=""
                            />
                          </div>
                          <select class="ps-rating ps-shoe__rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                        </div>
                        <div class="ps-shoe__detail">
                          <a class="ps-shoe__name" href="#"
                            >Lorem Ipsum</a
                          >
                          <p class="ps-shoe__categories">
                            <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                              href="#"
                            >
                              Textile</a
                            >
                          </p>
                          <span class="ps-shoe__price"> 120MAD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid-item kids">
                  <div class="grid-item__content-wrapper">
                    <div class="ps-shoe mb-30">
                      <div class="ps-shoe__thumbnail">
                        <a class="ps-shoe__favorite" href="#"
                          ><i class="ps-icon-heart"></i></a
                        ><img src="images/bio-product/8.jpg" alt="" /><a
                          class="ps-shoe__overlay"
                          href="product-detail.html"
                        ></a>
                      </div>
                      <div class="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <div class="ps-shoe__variant normal">
                            <img src="images/bio-product/2.jpg" alt="" /><img
                              src="images/bio-product/3.jpg"
                              alt=""
                            /><img src="images/bio-product/4.jpg" alt="" /><img
                              src="images/bio-product/5.jpg"
                              alt=""
                            />
                          </div>
                          <select class="ps-rating ps-shoe__rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                        </div>
                        <div class="ps-shoe__detail">
                          <a class="ps-shoe__name" href="#"
                            >Lorem Ipsum</a
                          >
                          <p class="ps-shoe__categories">
                            <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                              href="#"
                            >
                              Textile</a
                            >
                          </p>
                          <span class="ps-shoe__price"> 120MAD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ps-section--offer">
        <div class="ps-column">
          <a class="ps-offer" href="product-listing.html"
            ><img src="images/banner/bannerAds4.png" alt=""
          /></a>
        </div>
        <div class="ps-column">
          <a class="ps-offer" href="product-listing.html"
            ><img src="images/banner/bannerAds3.png" alt=""
          /></a>
        </div>
      </div>
      <div class="ps-section--sale-off ps-section pt-80 pb-40">
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h3 class="ps-section__title" data-mask="Sale off">
              - Hot Deal Today
            </h3>
          </div>
          <div class="ps-section__content">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                <div class="ps-hot-deal">
                  <h3>Boisson DUNK Max 95 OG</h3>
                  <p class="ps-hot-deal__price">Only: <span>£155</span></p>
                  <ul
                    class="ps-countdown"
                    data-time="December 13, 2017 15:37:25"
                  >
                    <li>
                      <span class="hours"></span>
                      <p>Hours</p>
                    </li>
                    <li class="divider">:</li>
                    <li>
                      <span class="minutes"></span>
                      <p>minutes</p>
                    </li>
                    <li class="divider">:</li>
                    <li>
                      <span class="seconds"></span>
                      <p>Seconds</p>
                    </li>
                  </ul>
                  <a class="ps-btn" href="#"
                    >Order Today<i class="ps-icon-next"></i
                  ></a>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                <div class="ps-hotspot">
                  <a class="point first active" href="javascript:;"
                    ><i class="fa fa-plus"></i>
                    <div class="ps-hotspot__content">
                      <p class="heading">JUMP TO HEADER</p>
                      <p>
                        Dynamic Fit Collar en la zona del tobillo que une la
                        parte inferior de la pierna y el pie sin reducir la
                        libertad de movimiento.
                      </p>
                    </div></a
                  ><a class="point second" href="javascript:;"
                    ><i class="fa fa-plus"></i>
                    <div class="ps-hotspot__content">
                      <p class="heading">JUMP TO HEADER</p>
                      <p>
                        Dynamic Fit Collar en la zona del tobillo que une la
                        parte inferior de la pierna y el pie sin reducir la
                        libertad de movimiento.
                      </p>
                    </div></a
                  ><a class="point third" href="javascript:;"
                    ><i class="fa fa-plus"></i>
                    <div class="ps-hotspot__content">
                      <p class="heading">JUMP TO HEADER</p>
                      <p>
                        Dynamic Fit Collar en la zona del tobillo que une la
                        parte inferior de la pierna y el pie sin reducir la
                        libertad de movimiento.
                      </p>
                    </div></a
                  ><img src="images/hot-deal.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ps-section ps-section--top-sales ps-owl-root pt-80 pb-80">
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <div class="row">
              <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                <h3 class="ps-section__title" data-mask="BEST SALE">
                  - Meilleures Ventes
                </h3>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                <div class="ps-owl-actions">
                  <a class="ps-prev" href="#"
                    ><i class="ps-icon-arrow-right"></i>Prev</a
                  ><a class="ps-next" href="#"
                    >Next<i class="ps-icon-arrow-left"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="ps-section__content">
            <div
              class="ps-owl--colection owl-slider"
              data-owl-auto="true"
              data-owl-loop="true"
              data-owl-speed="5000"
              data-owl-gap="30"
              data-owl-nav="false"
              data-owl-dots="false"
              data-owl-item="4"
              data-owl-item-xs="1"
              data-owl-item-sm="2"
              data-owl-item-md="3"
              data-owl-item-lg="4"
              data-owl-duration="1000"
              data-owl-mousedrag="on"
            >
              <div class="ps-shoes--carousel">
                <div class="ps-shoe">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge"><span>New</span></div>
                    <a class="ps-shoe__favorite" href="#"
                      ><i class="ps-icon-heart"></i></a
                    ><img src="images/bio-product/1.jpg" alt="" /><a
                      class="ps-shoe__overlay"
                      href="product-detail.html"
                    ></a>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <div class="ps-shoe__variant normal">
                        <img src="images/bio-product/2.jpg" alt="" /><img
                          src="images/bio-product/3.jpg"
                          alt=""
                        /><img src="images/bio-product/4.jpg" alt="" /><img
                          src="images/bio-product/5.jpg"
                          alt=""
                        />
                      </div>
                      <select class="ps-rating ps-shoe__rating">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                      </select>
                    </div>
                    <div class="ps-shoe__detail">
                      <a class="ps-shoe__name" href="product-detai.html"
                        >Lorem Ipsum</a
                      >
                      <p class="ps-shoe__categories">
                        <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                          href="#"
                        >
                          Textile</a
                        >
                      </p>
                      <span class="ps-shoe__price"> £ 120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ps-shoes--carousel">
                <div class="ps-shoe">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge"><span>New</span></div>
                    <div class="ps-badge ps-badge--sale ps-badge--2nd">
                      <span>-35%</span>
                    </div>
                    <a class="ps-shoe__favorite" href="#"
                      ><i class="ps-icon-heart"></i></a
                    ><img src="images/bio-product/2.jpg" alt="" /><a
                      class="ps-shoe__overlay"
                      href="product-detail.html"
                    ></a>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <div class="ps-shoe__variant normal">
                        <img src="images/bio-product/2.jpg" alt="" /><img
                          src="images/bio-product/3.jpg"
                          alt=""
                        /><img src="images/bio-product/4.jpg" alt="" /><img
                          src="images/bio-product/5.jpg"
                          alt=""
                        />
                      </div>
                      <select class="ps-rating ps-shoe__rating">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                      </select>
                    </div>
                    <div class="ps-shoe__detail">
                      <a class="ps-shoe__name" href="product-detai.html"
                        >Lorem Ipsum</a
                      >
                      <p class="ps-shoe__categories">
                        <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                          href="#"
                        >
                          Textile</a
                        >
                      </p>
                      <span class="ps-shoe__price"> <del>£220</del> £ 120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ps-shoes--carousel">
                <div class="ps-shoe">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge"><span>New</span></div>
                    <a class="ps-shoe__favorite" href="#"
                      ><i class="ps-icon-heart"></i></a
                    ><img src="images/bio-product/3.jpg" alt="" /><a
                      class="ps-shoe__overlay"
                      href="product-detail.html"
                    ></a>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <div class="ps-shoe__variant normal">
                        <img src="images/bio-product/2.jpg" alt="" /><img
                          src="images/bio-product/3.jpg"
                          alt=""
                        /><img src="images/bio-product/4.jpg" alt="" /><img
                          src="images/bio-product/5.jpg"
                          alt=""
                        />
                      </div>
                      <select class="ps-rating ps-shoe__rating">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                      </select>
                    </div>
                    <div class="ps-shoe__detail">
                      <a class="ps-shoe__name" href="product-detai.html"
                        >Lorem Ipsum</a
                      >
                      <p class="ps-shoe__categories">
                        <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                          href="#"
                        >
                          Textile</a
                        >
                      </p>
                      <span class="ps-shoe__price"> £ 120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ps-shoes--carousel">
                <div class="ps-shoe">
                  <div class="ps-shoe__thumbnail">
                    <a class="ps-shoe__favorite" href="#"
                      ><i class="ps-icon-heart"></i></a
                    ><img src="images/bio-product/4.jpg" alt="" /><a
                      class="ps-shoe__overlay"
                      href="product-detail.html"
                    ></a>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <div class="ps-shoe__variant normal">
                        <img src="images/bio-product/2.jpg" alt="" /><img
                          src="images/bio-product/3.jpg"
                          alt=""
                        /><img src="images/bio-product/4.jpg" alt="" /><img
                          src="images/bio-product/5.jpg"
                          alt=""
                        />
                      </div>
                      <select class="ps-rating ps-shoe__rating">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                      </select>
                    </div>
                    <div class="ps-shoe__detail">
                      <a class="ps-shoe__name" href="product-detai.html"
                        >Lorem Ipsum</a
                      >
                      <p class="ps-shoe__categories">
                        <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                          href="#"
                        >
                          Textile</a
                        >
                      </p>
                      <span class="ps-shoe__price"> £ 120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ps-shoes--carousel">
                <div class="ps-shoe">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge"><span>New</span></div>
                    <a class="ps-shoe__favorite" href="#"
                      ><i class="ps-icon-heart"></i></a
                    ><img src="images/bio-product/5.jpg" alt="" /><a
                      class="ps-shoe__overlay"
                      href="product-detail.html"
                    ></a>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <div class="ps-shoe__variant normal">
                        <img src="images/bio-product/2.jpg" alt="" /><img
                          src="images/bio-product/3.jpg"
                          alt=""
                        /><img src="images/bio-product/4.jpg" alt="" /><img
                          src="images/bio-product/5.jpg"
                          alt=""
                        />
                      </div>
                      <select class="ps-rating ps-shoe__rating">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                      </select>
                    </div>
                    <div class="ps-shoe__detail">
                      <a class="ps-shoe__name" href="product-detai.html"
                        >Lorem Ipsum</a
                      >
                      <p class="ps-shoe__categories">
                        <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                          href="#"
                        >
                          Textile</a
                        >
                      </p>
                      <span class="ps-shoe__price"> £ 120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ps-shoes--carousel">
                <div class="ps-shoe">
                  <div class="ps-shoe__thumbnail">
                    <a class="ps-shoe__favorite" href="#"
                      ><i class="ps-icon-heart"></i></a
                    ><img src="images/bio-product/6.jpg" alt="" /><a
                      class="ps-shoe__overlay"
                      href="product-detail.html"
                    ></a>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <div class="ps-shoe__variant normal">
                        <img src="images/bio-product/2.jpg" alt="" /><img
                          src="images/bio-product/3.jpg"
                          alt=""
                        /><img src="images/bio-product/4.jpg" alt="" /><img
                          src="images/bio-product/5.jpg"
                          alt=""
                        />
                      </div>
                      <select class="ps-rating ps-shoe__rating">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                      </select>
                    </div>
                    <div class="ps-shoe__detail">
                      <a class="ps-shoe__name" href="product-detai.html"
                        >Lorem Ipsum</a
                      >
                      <p class="ps-shoe__categories">
                        <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,<a
                          href="#"
                        >
                          Textile</a
                        >
                      </p>
                      <span class="ps-shoe__price"> £ 120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ps-home-testimonial bg--parallax pb-80"
        data-background="images/background/parallax.jpg"
      >
        <div class="container">
          <div
            class="owl-slider"
            data-owl-auto="true"
            data-owl-loop="true"
            data-owl-speed="5000"
            data-owl-gap="0"
            data-owl-nav="false"
            data-owl-dots="true"
            data-owl-item="1"
            data-owl-item-xs="1"
            data-owl-item-sm="1"
            data-owl-item-md="1"
            data-owl-item-lg="1"
            data-owl-duration="1000"
            data-owl-mousedrag="on"
            data-owl-animate-in="fadeIn"
            data-owl-animate-out="fadeOut"
          >
            <div class="ps-testimonial">
              <div class="ps-testimonial__thumbnail">
                <img src="images/testimonial/pdpAmine.jpg" alt="" /><i
                  class="fa fa-quote-left"
                ></i>
              </div>
              <header>
                <select class="ps-rating">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="5">5</option>
                </select>
                <p>Amine Elmouradi - PDG & Co-Fondateur ITWINS</p>
              </header>
              <footer>
                <p>
                  “ Ce site m'a donné une experience époustouflante. Vous savez qu'avec l'age
                   on commence à faire de plus en plus attention à sa nutrition. Ce site est la meilleur plateforme pour achter des produits
                   bio en un temps record et avec le moindre des prix. “
                </p>
              </footer>
            </div>
            <div class="ps-testimonial">
              <div class="ps-testimonial__thumbnail">
                <img src="images/testimonial/pdpImane.jpg" alt="" /><i
                  class="fa fa-quote-left"
                ></i>
              </div>
              <header>
                <select class="ps-rating">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="5">5</option>
                </select>
                <p>Imane Elmouradi - PDG et Co-Founder ITWINS</p>
              </header>
              <footer>
                <p>
                  “Les produits bio s'impose de nos jours. Heureusement pour nous ,
                  nous avons à disposition ce site de vente en ligne qui nous facilite vraiment la vie.“
                </p>
              </footer>
            </div>
            <div class="ps-testimonial">
              <div class="ps-testimonial__thumbnail">
                <img src="images/testimonial/pdpAmina.jpg" alt="" /><i
                  class="fa fa-quote-left"
                ></i>
              </div>
              <header>
                <select class="ps-rating">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="5">5</option>
                </select>
                <p>Logan May - CEO & Founder Invision</p>
              </header>
              <footer>
                <p>
                  “Dessert pudding dessert jelly beans cupcake sweet caramels
                  gingerbread. Fruitcake biscuit cheesecake. Cookie topping
                  sweet muffin pudding tart bear claw sugar plum croissant. “
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div class="ps-section ps-home-blog pt-80 pb-80">
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h2 class="ps-section__title" data-mask="News">- Health Articles</h2>
            <div class="ps-section__action">
              <a class="ps-morelink text-uppercase" href="#"
                >View all post<i class="fa fa-long-arrow-right"></i
              ></a>
            </div>
          </div>
          <div class="ps-section__content">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <div class="ps-post">
                  <div class="ps-post__thumbnail">
                    <a class="ps-post__overlay" href="blog-detail.html"></a
                    ><img src="images/blog/articleImage1.png" alt="" />
                  </div>
                  <div class="ps-post__content">
                    <a class="ps-post__title" href="blog-detail.html"
                      >Meal Frequency and Timing</a
                    >
                    <p class="ps-post__meta">
                      <span
                        >By:<a class="mr-5" href="blog.html"
                          >Alena Studio</a
                        ></span
                      >
                      -<span class="ml-5">Jun 10, 2017</span>
                    </p>
                    <p>
                      Scientific evidence for the optimal number, timing, and size of meals is lacking. The authors of this study investigated the relation between meal frequency and timing and changes in body mass index (BMI). Their results suggest that in relatively healthy adults, eating less frequently, no snacking...
                    </p>
                    <a class="ps-morelink" href="blog-detail.html"
                      >Read more<i class="fa fa-long-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <div class="ps-post">
                  <div class="ps-post__thumbnail">
                    <a class="ps-post__overlay" href="blog-detail.html"></a
                    ><img src="images/blog/articleImage2.png" alt="" />
                  </div>
                  <div class="ps-post__content">
                    <a class="ps-post__title" href="blog-detail.html"
                      >The Relative Caloric Prices of Healthy and Unhealthy Foods</a
                    >
                    <p class="ps-post__meta">
                      <span
                        >By:<a class="mr-5" href="blog.html"
                          >Alena Studio</a
                        ></span
                      >
                      -<span class="ml-5">Jun 10, 2017</span>
                    </p>
                    <p>
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further…
                    </p>
                    <a class="ps-morelink" href="blog-detail.html"
                      >Read more<i class="fa fa-long-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <div class="ps-post">
                  <div class="ps-post__thumbnail">
                    <a class="ps-post__overlay" href="blog-detail.html"></a
                    ><img src="images/blog/articleImage3.png" alt="" />
                  </div>
                  <div class="ps-post__content">
                    <a class="ps-post__title" href="blog-detail.html"
                      >Multiple Vitamin K Forms Exist in Dairy Foods</a
                    >
                    <p class="ps-post__meta">
                      <span
                        >By:<a class="mr-5" href="blog.html"
                          >Alena Studio</a
                        ></span
                      >
                      -<span class="ml-5">Jun 10, 2017</span>
                    </p>
                    <p>
                      The plant-based form of vitamin K (phylloquinone, vitamin K-1) has been well quantified in the US diet. Menaquinones (vitamin K-2) are another class of vitamin K compounds that differ from phylloquinone...
                    </p>
                    <a class="ps-morelink" href="blog-detail.html"
                      >Read more<i class="fa fa-long-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ps-home-contact">
        <div
          id="contact-map"
          data-address="New York, NY"
          data-title="BAKERY LOCATION!"
          data-zoom="17"
        ></div>
        <div class="ps-home-contact__form">
          <header>
            <h3>Contact Us</h3>
            <p>
              Learn about our company profile, communityimpact, sustainable
              motivation, and more.
            </p>
          </header>
          <footer>
            <form action="product-listing.html" method="post">
              <div class="form-group">
                <label>Name<span>*</span></label>
                <input class="form-control" type="text" />
              </div>
              <div class="form-group">
                <label>Email<span>*</span></label>
                <input class="form-control" type="email" />
              </div>
              <div class="form-group">
                <label>Your message<span>*</span></label>
                <textarea class="form-control" rows="4"></textarea>
              </div>
              <div class="form-group text-center">
                <button class="ps-btn">
                  Send Message<i class="fa fa-angle-right"></i>
                </button>
              </div>
            </form>
          </footer>
        </div>
      </div>
      <div class="ps-subscribe">
        <div class="ps-container">
          <div class="row">
            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
              <h3><i class="fa fa-envelope"></i>Sign up to Newsletter</h3>
            </div>
            <div class="col-lg-5 col-md-7 col-sm-12 col-xs-12 ">
              <form class="ps-subscribe__form" action="do_action" method="post">
                <input class="form-control" type="text" placeholder="" />
                <button>Sign up now</button>
              </form>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
              <p>...and receive <span>$20</span> coupon for first shopping.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ps-footer bg--cover"
        data-background="images/background/parallax.jpg"
      >
        <div class="ps-footer__content">
          <div class="ps-container">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                <aside class="ps-widget--footer ps-widget--info">
                  <header>
                    <a class="ps-logo" href="index.html"
                      ><img src="images/logo-white.png" alt=""
                    /></a>
                    <h3 class="ps-widget__title">Address Office 1</h3>
                  </header>
                  <footer>
                    <p>
                      <strong
                        >460 West 34th Street, 15th floor, New York</strong
                      >
                    </p>
                    <p>
                      Email:
                      <a href="mailto:support@store.com">support@store.com</a>
                    </p>
                    <p>Phone: +323 32434 5334</p>
                    <p>Fax: ++323 32434 5333</p>
                  </footer>
                </aside>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                <aside class="ps-widget--footer ps-widget--info second">
                  <header>
                    <h3 class="ps-widget__title">Address Office 2</h3>
                  </header>
                  <footer>
                    <p>
                      <strong
                        >PO Box 16122 Collins Victoria 3000 Australia</strong
                      >
                    </p>
                    <p>
                      Email:
                      <a href="mailto:support@store.com">support@store.com</a>
                    </p>
                    <p>Phone: +323 32434 5334</p>
                    <p>Fax: ++323 32434 5333</p>
                  </footer>
                </aside>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                <aside class="ps-widget--footer ps-widget--link">
                  <header>
                    <h3 class="ps-widget__title">Find Our store</h3>
                  </header>
                  <footer>
                    <ul class="ps-list--link">
                      <li><a href="#">Coupon Code</a></li>
                      <li><a href="#">SignUp For Email</a></li>
                      <li><a href="#">Site Feedback</a></li>
                      <li><a href="#">Careers</a></li>
                    </ul>
                  </footer>
                </aside>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                <aside class="ps-widget--footer ps-widget--link">
                  <header>
                    <h3 class="ps-widget__title">Get Help</h3>
                  </header>
                  <footer>
                    <ul class="ps-list--line">
                      <li><a href="#">Order Status</a></li>
                      <li><a href="#">Shipping and Delivery</a></li>
                      <li><a href="#">Returns</a></li>
                      <li><a href="#">Payment Options</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </footer>
                </aside>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                <aside class="ps-widget--footer ps-widget--link">
                  <header>
                    <h3 class="ps-widget__title">Products</h3>
                  </header>
                  <footer>
                    <ul class="ps-list--line">
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Clothing</a></li>
                      <li><a href="#">Accessries</a></li>
                      <li><a href="#">Football Boots</a></li>
                    </ul>
                  </footer>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div class="ps-footer__copyright">
          <div class="ps-container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                <p>
                  &copy; <a href="#">SKYTHEMES</a>, Inc. All rights Resevered.
                  Design by <a href="#"> Alena Studio</a>
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                <ul class="ps-social">
                  <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
    );
}

export default Home;