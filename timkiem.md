layout: page
title: "Search"
permalink: /search/
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stationary</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>    <!-- jquery -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">    
    
    <link rel="stylesheet" href="./assets/css/base.css">
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/grid.css">
    <link rel="stylesheet" href="./assets/css/responsive.css">
    
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"> <!-- google roboto fonts -->
    <link rel="stylesheet" href="./assets/font/themify-icons/themify-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"> <!-- font awesome-->
    <link rel="icon" href="./assets/img/web_icon.png" type="image/x-icon" />
  </head>
  <style>
      .bread-crumb {
          background: url('//bizweb.dktcdn.net/100/434/558/themes/831317/assets/bg-breadcrumb.jpg?1630049131390') top center / cover;
          min-height: 120px;
          margin-bottom: 30px;
          padding: 15px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bread-crumb__content {
            color: #c4c4c4;
            font-size: 1.4rem;
            font-style: italic;
            text-align: center;
        }
        .homepage-link {
            padding-right: 12px;
        }
        .homepage-link:hover {
            color: #ffb416;
        }
        .current-location {
            padding-left: 12px;
            color: var(--star-gold-color);
        }
        .search-info {
            padding-top: 16px;
            font-size: 2.5rem;
            font-weight: 700;
            color: #c4c4c4;
            text-transform: uppercase;
        }
        .search-result {
            min-height: 760px;
        }
        .search-result__heading {
            padding: 30px 16px;
            margin-bottom: 0;
            font-size: 3rem;
            font-weight: 600;
            color: #000;
            line-height: 3.5rem;
        }

        .product-item--search-page {
            margin: 20px 0;
        }
        .footer--search-page {
            margin-top: 30px;
        }
  </style>
  <body>
      <div class="app">
            <a href="#top-page" class="return-top">
            <i class="ti-angle-up"></i>
        </a>
        <script>
            var scrollToTopBtn = document.querySelector(".return-top");
            var rootElement = document.documentElement;

            function handleScroll() {
            // Do something on scroll
            var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
            if (rootElement.scrollTop / scrollTotal > 0.5) {
                // Show button
                scrollToTopBtn.classList.add("return-top-active");
            } else {
                // Hide button
                scrollToTopBtn.classList.remove("return-top-active");
            }
            }
            document.addEventListener("scroll", handleScroll);
        </script>
        <header id="top-page" class="header">
            <div class="grid wide">
                <div class="header-wrap">
                    <div class="header__logo">
                        <a href="/index.html" class="header__logo-link">
                            <img src="//bizweb.dktcdn.net/100/434/558/themes/831317/assets/logo.png?1630398243026" alt="Home" class="header__logo-img">
                            <img src="https://bizweb.dktcdn.net/100/434/558/themes/831317/assets/logo_mb.png?1630398243026" alt="" class="header__logo-img-mobile">
                        </a>
                    </div>
                    
                        <div class="header__search">
                            <div class="header__search-input-wrap">
                                <input type="text" class="header__search-input" placeholder="T??m ki???m s???n ph???m" spellcheck="false">
                            </div>
                            <button class="header__search-btn" onclick="moveToTimkiem()">
                                <i class="header__search-btn-icon ti-search"></i>
                            </button>
                            <div class="header__search-result">
                                <!-- <div class="loader-search">
                                    <div class="lds-dual-ring"></div>
                                </div> -->
                                <!-- <div class="header__search-result-found">
                                    
                                    <a href="" class="header__search-result-item" title="T??i ?????ng ????? d??ng v??n ph??ng ph???m b???ng nh???a PP trong su???t ??a n??ng ti???n l???i">
                                        <img src="//bizweb.dktcdn.net/thumb/compact/100/434/558/products/sp11.jpg?v=1629774393000" alt="" class="header__search-result-item-img">
                                        <div class="header__search-result-item-info">
                                            <div class="header__search-result-item-name">T??i ?????ng ????? d??ng v??n ph??ng ph???m b???ng nh???a PP trong su???t ??a n??ng ti???n l???i</div>
                                            <div class="header__search-result-item-price">7000??</div>
                                        </div>
                                    </a>
                                    <a href="" class="header__search-show-all-btn">Xem t???t c???</a>
                                </div>
                                <div class="header__search-result-not-found">Kh??ng c?? k???t qu??? t??m ki???m</div> -->
                            </div>
                        </div>
    
                    <div class="header__hotline">
                        <a href="tel:19006750" class="header__hotline-link" title="19006750">
                            <svg class="header__hotline-img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="19.9px" height="20px" viewBox="0 0 19.9 20" style="enable-background:new 0 0 19.9 20;" xml:space="preserve">
                                <style type="text/css">
                                    .st0 {
                                        fill: #FFFFFF;
                                    }
                                </style>
                                <defs>
                                </defs>
                                <path class="st0" d="M14.5,12c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1
                                                                                         c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7C7.4,9.1,7.6,9,7.7,8.9c0.1-0.1,0.2-0.3,0.4-0.4C8.2,8.3,8.2,8.2,8.3,8
                                                                                         c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2C8.2,7.5,7.7,6.3,7.5,5.8C7.3,5.3,7.1,5.3,7,5.3c-0.1,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.4,0.1
                                                                                         C6,5.5,5.9,5.5,5.8,5.6C5.5,5.9,5.3,6.2,5.2,6.6C5,6.9,5,7.3,5,7.7C5,8.6,5.4,9.5,6,10.3c1.1,1.6,2.5,2.9,4.2,3.7
                                                                                         c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.3-0.1,0.7-0.2,1-0.4c0.3-0.2,0.5-0.5,0.7-0.8c0.2-0.4,0.2-0.8,0.1-1.2
                                                                                         C14.9,12.2,14.8,12.1,14.5,12z M17,2.9c-1.7-1.7-4-2.7-6.4-2.9C8.2-0.1,5.9,0.6,4,2C2.1,3.5,0.7,5.6,0.3,8c-0.5,2.4-0.1,4.8,1.1,6.9
                                                                                         L0,20l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c2,0,3.9-0.6,5.5-1.7c1.6-1.1,2.9-2.6,3.6-4.4c0.8-1.8,0.9-3.8,0.6-5.7S18.4,4.3,17,2.9
                                                                                         L17,2.9z M14.4,16.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3L3,14.3c-0.9-1.4-1.3-3-1.3-4.6
                                                                                         c0-1.6,0.6-3.2,1.5-4.5c0.9-1.3,2.3-2.3,3.8-2.9s3.2-0.7,4.8-0.3s3,1.2,4.2,2.4c1.1,1.2,1.9,2.7,2.1,4.3c0.3,1.6,0.1,3.3-0.6,4.7
                                                                                         C16.8,14.8,15.8,16,14.4,16.9z"></path>
                            </svg>
                            <div class="header__hotline-number">
                                <span>Hotline: </span>
                                19006750
                            </div>
                        </a>
                    </div>
                    
                    <div class="header__user">
                        <ul class="header__user-list">
                            <li class="header__user-item">
                                <a title="S???n ph???m y??u th??ch"  href="" class="header__user-item-link">
                                    <i class="header__user-icon ti-heart"></i>
                                    <span class="header__user-count">0</span>
                                </a>
                            </li>
   
                            <li class="header__user-item" title="Gi??? h??ng">
                                <label for="cart-input-id" class="header__user-item-link change-cursor">
                                    <i class="header__user-icon ti-shopping-cart"></i>
                                    <span class="header__user-count">0</span>
                                </label>
                            </li>

                            <li class="header__user-item header__user-item--log-in">
                                <span class="header__user-item-link js-click-login">
                                    <i class="header__user-icon far fa-user"></i>
                                </span>

                                <ul class="header__user-account">
                                    <li class="header__user-account-item ">
                                        <span class="header__user-account-btn js-click-login">????ng nh???p</span>
                                    </li>
                                    <li class="header__user-account-item header__user-account-item--separate">
                                        <span class="header__user-account-btn js-click-register">????ng k??</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header__navbar-wrap">
                <div class="grid wide">
                    <div class="header__navbar">
                        <div class="category">
                            <div class="category__outside">
                                <i class="ti-align-justify category__outside-icon"></i>
                                <div class="category__outside-label">Danh m???c s???n ph???m</div>
                            </div>
                    
                            <div class="category__inside">
                                <div class="category__inside-mobile-head">
                                    <span>Danh m???c s???n ph???m</span>
                                </div>
                                <div class="category__inside-wrap">
                                    <ul class="category__inside-list">
                                        <a href="" class="category__inside-heading">VPP H???c sinh</a>
                                        <i class="fas fa-sort-down"></i>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">V???</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??t</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Balo</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B???c v???</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Nh??n v???</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">T???y</a>
                                        </li>
                                    </ul>
                                    <ul class="category__inside-list">
                                        <a href="" class="category__inside-heading">VPP V??n ph??ng</a>
                                        <i class="fas fa-sort-down"></i>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">K???p t??i li???u</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">S??? t??i li???u</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B???n ghim</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Gi???y note</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Gi???y in</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Trang tr?? v??n ph??ng</a>
                                        </li>
                                    </ul>
                                    <ul class="category__inside-list">
                                        <a href="" class="category__inside-heading">D???ng c??? v???</a>
                                        <i class="fas fa-sort-down"></i>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??t v???</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">M??u v???</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Khay - C??? v???</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">T???p v??? - Gi???y v???</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??? v??? s??ng t???o</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Gi?? v??? - Khung v???</a>
                                        </li>
                                    </ul>
                                    <ul class="category__inside-list">
                                        <a href="" class="category__inside-heading">B??t vi???t</a>
                                        <i class="fas fa-sort-down"></i>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??t ch??</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??t bi</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??t n?????c</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??t l??ng</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??t d??? quang</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">B??t m???c</a>
                                        </li>
                                    </ul>
                                    <ul class="category__inside-list">
                                        <a href="" class="category__inside-heading">S???n ph???m v??? gi???y</a>
                                        <i class="fas fa-sort-down"></i>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">S??? c??c lo???i</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">T???p - V???</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Gi???y note</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Sticker</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">C??c lo???i gi???y kh??c</a>
                                        </li>
                                        <li class="category__inside-item">
                                            <a href="" class="category__inside-item-link">Nh??n v??? - Nh??n t??n</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="header__navbar-slogan">
                            <span></span>
                        </div>
                        <div class="header__navbar-menu-wrap">
                            <div class="header__navbar-menu-item">
                                <a href="" class="header__navbar-link">
                                    <i class="fas fa-fire header__navbar-icon"></i>
                                    <span>Khuy???n m??i</span>
                                </a>
                            </div>
                            <div class="header__navbar-menu-item">
                                <a href="" class="header__navbar-link">
                                    <i class="ti-shield header__navbar-icon header__navbar-icon--padding"></i>
                                    <span>D???ch v???</span>
                                </a>
                            </div>
                            <div class="header__navbar-menu-item">
                                <a href="" class="header__navbar-link">
                                    <i class="fas fa-bullhorn header__navbar-icon"></i>
                                    <span>Tin t???c</span>
                                </a>
                            </div>
                            <div class="header__navbar-menu-item">
                                <a href="" class="header__navbar-link">
                                    <i class="ti-email header__navbar-icon header__navbar-icon--padding"></i>
                                    <span>Li??n h???</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <div class="app__container">
                <div class="bread-crumb">
                    <div class="bread-crumb__container">
                        <div class="bread-crumb__content">
                            <a href="/index.html" class="homepage-link">Trang ch???</a>/
                            <span class="current-location">T??m ki???m</span>
                        </div>
                        <div class="search-info">
                            
                        </div>
                    </div>
                </div>
                <div class="grid wide">
                    <div class="search-result">
                        <div class="row">
                            <div class="col l-12 m-12 c-12">
                                <div class="search-result__heading"></div>
                            </div>
                        </div>
                        <div class="row product-render-here">
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer footer--search-page">
            <div class="grid wide footer__content">
                <div class="row">
                    <div class="col l-5 m-12 c-12 no-gutter-default">
                        <a href="" class="footer__content-logo-link">
                            <img src="./assets/img/logo_footer.webp" alt="" class="footer__content-img">
                        </a>
                        <ul class="footer__content-list">
                            <li class="footer__content-item">
                                <i class="footer__content-item-icon fas fa-map-marker-alt"></i>
                                <p class="footer__content-item-text">
                                    <strong>Tr??? s???: </strong>
                                    T???ng 6 - T??a nh?? Ladeco - 266 ?????i C???n Ph?????ng Li???u Giai - Qu???n Ba ????nh - TP H?? N???i
                                </p>
                            </li>
                            <li class="footer__content-item">
                                <i class="footer__content-item-icon fas fa-user"></i>
                                <p class="footer__content-item-text">
                                    <strong>T???ng ????i: </strong>
                                    <a href="tel:19006750" class="footer__content-item-contact-link">19006750</a>
                                </p>
                            </li>
                            <li class="footer__content-item">
                                <i class="footer__content-item-icon fas fa-envelope"></i>
                                <p class="footer__content-item-text">
                                    <strong>Email:</strong>
                                    <a href="Email:support@sapo.vn" class="footer__content-item-contact-link">support@sapo.vn</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-2 m-4 c-12 no-gutter-default">
                        <h3 class="footer__content-heading"><i class="ti-angle-down"></i>T??M HI???U TH??M</h3>
                        <ul class="footer__content-list js-footer-list">
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">Trang ch???</a>
                            </li>
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">Gi???i thi???u</a>
                            </li>
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">S???n ph???m</a>
                            </li>
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">Tin t???c</a>
                            </li>
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">Li??n h???</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-2 m-4 c-12 no-gutter-default">
                        <h3 class="footer__content-heading"><i class="ti-angle-down"></i>H??? TR??? KH??CH H??NG</h3>
                        <ul class="footer__content-list js-footer-list">
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">Trang ch???</a>
                            </li>
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">Gi???i thi???u</a>
                            </li>
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">S???n ph???m</a>
                            </li>
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">Tin t???c</a>
                            </li>
                            <li class="footer__content-item">
                                <a href="" class="footer__content-item-link">Li??n h???</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-3  m-4 c-12 no-gutter-default">
                        <h3 class="footer__content-heading"><i class="ti-angle-down"></i>THEO D??I CH??NG T??I</h3>
                        <ul class="footer__social-list js-footer-list">
                            <li class="footer__social-item">
                                <a href="" class="footer__social-link">
                                    <i class="footer__social-icon fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="footer__social-item">
                                <a href="" class="footer__social-link">
                                    <i class="footer__social-icon fab fa-twitter-square"></i>
                                </a>
                            </li>
                            <li class="footer__social-item">
                                <a href="" class="footer__social-link">
                                    <i class="footer__social-icon fab fa-instagram-square"></i>
                                </a>
                            </li>
                            <li class="footer__social-item">
                                <a href="" class="footer__social-link">
                                    <i class="footer__social-icon fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                        <div class="footer__payment">
                            <h3 class="footer__content-heading"><i class="ti-angle-down"></i>PH????NG TH???C THANH TO??N</h3>
                            <div class="footer__payment-wrap js-footer-list">
                                <img src="./assets/img/logo_acb.svg" alt="" class="footer__payment-img">
                                <img src="./assets/img/logo_msb.svg" alt="" class="footer__payment-img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <p>@ B???n quy???n thu???c v??? Awesome Team | Cung c???p b???i 
                    <span>Sapo</span>
                </p>
            </div>
        </div>
    </div>

    <!-- slide-in-user-cart -->
    <input hidden type="checkbox" name="" class="cart-input" id="cart-input-id">
    <label for="cart-input-id" class="overlay"></label>
    <div class="slide-in-cart">
        <div class="slide-in-cart__heading">
            <h4 class="slide-in-cart__title">GI??? H??NG</h4>
            <label for="cart-input-id" class="slide-in-cart__close">
                <svg class="slide-in-cart__close-icon" viewBox="0 0 16 14">
                    <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
                </svg>
            </label>
        </div>
        <ul class="cart__list">
            <li class="cart__item">
                <div class="cart__item-wrap">
                    <a href="" class="cart__item-img-link">
                        <img src="//bizweb.dktcdn.net/thumb/compact/100/434/558/products/sp7.jpg" alt="" class="cart__item-img">
                    </a>
                    <div class="cart__item-info">
                        <a href="" class="cart__item-name">S??? tay c?? nh??n ti???n d???ng v??n ph??ng ph???m</a>
                        <div class="cart-item__numbers">
                            <div class="cart__item-quantity">
                                <span>S??? l?????ng</span>
                                <div class="cart__item-quantity-adjustment">
                                    <button type="button" class="cart-btn-reset cart__item-quantity-adjustment--minus">-</button>
                                    <input type="text" class="cart-btn-reset cart__item-quantity-adjustment-input" value="1">
                                    <button type="button" class="cart-btn-reset cart__item-quantity-adjustment--add">+</button>
                                </div>
                            </div>
                            <div class="cart__item-price">
                                <span class="cart__item-price-numbers">28.000???</span>
                                <span class="cart__item-remove">X??a</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="slide-in-cart__item">
                <div class="cart__item-wrap">
                    <a href="" class="cart__item-img-link">
                        <img src="//bizweb.dktcdn.net/thumb/compact/100/434/558/products/sp11.jpg" alt="" class="cart__item-img">
                    </a>
                    <div class="cart__item-info">
                        <a href="" class="cart__item-name">T??i ?????ng ????? d??ng v??n ph??ng ph???m b???ng nh???a PP trong su???t ??a n??ng ti???n l???i</a>
                        <div class="cart-item__numbers">
                            <div class="cart__item-quantity">
                                <span>S??? l?????ng</span>
                                <div class="cart__item-quantity-adjustment">
                                    <button type="button" class="cart-btn-reset cart__item-quantity-adjustment--minus">-</button>
                                    <input type="text" class="cart-btn-reset cart__item-quantity-adjustment-input" value="1">
                                    <button type="button" class="cart-btn-reset cart__item-quantity-adjustment--add">+</button>
                                </div>
                            </div>
                            <div class="cart__item-price">
                                <span class="cart__item-price-numbers">7.000???</span>
                                <span class="cart__item-remove">X??a</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="cart__pay">
            <div class="cart__pay-totalPrice">
                <div class="cart__pay-totalPrice-text">T???ng ti???n</div>
                <div class="cart__pay-totalPrice-number">35.000???</div>
            </div>
            <button class="cart__pay-btn">Thanh to??n</button>
        </div>
    </div>

    <!-- Modal log-in, register -->
    <div class="modal js-modal-login js-modal-close">
        <div class="modal-container js-modal-container">
            <div class="modal-header">
                <button class="modal-header__btn modal__header-active-btn">????ng nh???p</button>
                <button class="modal-header__btn js-click-register">????ng k??</button>
            </div>
            <div class="modal-body">
                <form action="">
                    <ul class="modal-body__list">
                        <li class="modal-body__item">
                            <label for="log-in-email" class="modal-label">
                                EMAIL
                                <span>*</span>
                            </label>
                            <input id="log-in-email" required type="email" class="modal-input" placeholder="Nh???p ?????a ch??? Email">
                        </li>
                        <li class="modal-body__item">
                            <label for="log-in-password" class="modal-label">
                                M???T KH???U
                                <span>*</span>
                            </label>
                            <input id="log-in-password" required type="password" class="modal-input" placeholder="Nh???p M???t kh???u">
                        </li>
                    </ul>

                    <a href="" class="modal__forget-pass">Qu??n m???t kh???u?</a>
                    <div class="modal-body__btn">
                        <button class="modal__btn js-modal-close">Tr??? l???i</button>
                        <input type="submit" class="modal__btn" value="????ng nh???p"></input>
                    </div>
                </form>

                <p class="log-in-note">Stationery cam k???t b???o m???t v?? s??? kh??ng bao gi??? ????ng
                hay chia s??? th??ng tin m?? ch??a c?? ???????c s??? ?????ng ?? c???a b???n.</p>
            </div>
            <div class="modal__footer js-login-content">
                <span>ho???c ????ng nh???p qua</span>
                <a href="" class="modal__footer-link">
                    <img src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" class="modal__footer-img">
                </a>
                <a href="" class="modal__footer-link">
                    <img src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" class="modal__footer-img">
                </a>
            </div>
        </div>
    </div>
    <div class="modal js-modal-register js-modal-close">
        <div class="modal-container js-modal-container">
            <div class="modal-header">
                <button class="modal-header__btn js-click-login">????ng nh???p</button>
                <button class="modal-header__btn modal__header-active-btn">????ng k??</button>
            </div>
            <div class="modal-body">
                <form action="">
                    <ul class="modal-body__list">
                        <li class="modal-body__item">
                            <label for="register-family-name" class="modal-label">
                                H???
                                <span>*</span>
                            </label>
                            <input id="register-family-name" type="text" class="modal-input" required placeholder="Nh???p H???">
                        </li>
                        <li class="modal-body__item">
                            <label for="register-name" class="modal-label">
                                T??N
                                <span>*</span>
                            </label>
                            <input id="register-name" type="text" class="modal-input" required placeholder="Nh???p T??n">
                        </li>
                        <li class="modal-body__item">
                            <label for="register-name" class="modal-label">
                                S??? ??I???N THO???I
                                <span>*</span>
                            </label>
                            <input id="register-phone" type="tel" class="modal-input" required placeholder="Nh???p S??? ??i???n tho???i">
                        </li>
                        <li class="modal-body__item">
                            <label for="register-email" class="modal-label">
                                EMAIL
                                <span>*</span>
                            </label>
                            <input id="register-email" type="email" class="modal-input" required placeholder="Nh???p ?????a ch??? Email">
                        </li>
                        <li class="modal-body__item">
                            <label for="register-password" class="modal-label">
                                M???T KH???U
                                <span>*</span>
                            </label>
                            <input id="register-password" type="password" class="modal-input" required placeholder="Nh???p M???t kh???u">
                        </li>
                    </ul>
                    <div class="modal-body__btn">
                        <button class="modal__btn js-modal-close">Tr??? l???i</button>
                        <input type="submit" class="modal__btn" value="T???o t??i kho???n"></input>
                    </div>
                </form>
            </div>
            <div class="modal__footer js-login-content">
                <span>ho???c ????ng nh???p qua</span>
                <a href="" class="modal__footer-link">
                    <img src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" class="modal__footer-img">
                </a>
                <a href="" class="modal__footer-link">
                    <img src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" class="modal__footer-img">
                </a>
            </div>
        </div>
    </div>
    <!-- js modal login -->
    <script>
        const modalogin = document.querySelector('.js-modal-login')
        const modalRegister = document.querySelector('.js-modal-register')
        const modalContainers = document.querySelectorAll('.js-modal-container')
        const loginLinks = document.querySelectorAll('.js-click-login')
        const registerLinks = document.querySelectorAll('.js-click-register')
        const modalCloses = document.querySelectorAll('.js-modal-close')

        function showLogin() {
            modalRegister.classList.remove('open')
            modalogin.classList.add('open')
        }
        function showRegister() {
            modalogin.classList.remove('open')
            modalRegister.classList.add('open')
        }
        function hide() {
            modalogin.classList.remove('open')
            modalRegister.classList.remove('open')
        }
        

        for (const loginLink of loginLinks)
        {
            loginLink.addEventListener('click', showLogin)
        }
        for (const registerLink of registerLinks)
        {
            registerLink.addEventListener('click', showRegister)
        }
        for (const modalClose of modalCloses)
        {
            modalClose.addEventListener('click', hide)
        }
        for (const modalContainer of modalContainers)
        {
            modalContainer.addEventListener('click', function (e) {
                e.stopPropagation();
            })
        }
    </script>
    <!-- js header text -->
    <script>
        var slogans = ["Stationary l???a ch???n s??? 1 c???a b???n - H??y ?????n v???i ch??ng t??i", "Stationary l???a ch???n s??? 1 cho b???n"]
        var textBlock = $(".header__navbar-slogan span");
        var i = 0;
            setInterval (function () {
                textBlock.fadeOut(function () {
                    textBlock.html(slogans[i]);
                    i++;
                    if (i == 2) i = 0;
                    textBlock.fadeIn();
                })  
            }, 3000)
    </script>
    <div class="overlay-cate"></div>
    </div>

    <script src="./timkiemjs.js"></script>
  </body>
</html>
