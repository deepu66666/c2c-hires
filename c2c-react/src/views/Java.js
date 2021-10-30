import React, { Component, form } from "react";
import '../assets/css/main.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/summernote.css'


export default class Java extends Component {



    render() {
        return (<>
            {/* <div class="col-lg-9 col-md-12 col-xs-12 page-content"> */}

            <div class="product-filter">
                <div class="grid-list-count">
                    <a class="list switchToGrid" href="#"><i class="fas fa-list"></i></a>
                    <a class="grid switchToList" href="#"><i class="fas fa-th-large"></i></a>
                </div>
                <div class="short-name">
                    <span>Short By</span>
                    <form class="name-ordering" method="post">
                        <label>
                            <select name="order" class="orderby">
                                <option selected="selected" value="menu-order">Short by</option>
                                <option value="popularity">Fresher</option>
                                <option value="popularity">Expreince</option>
                            </select>
                        </label>
                    </form>
                </div>
                <div class="Show-item">
                    <span>Show Jobs</span>
                    <form class="woocommerce-ordering" method="post">
                        <label>
                            <select name="order" class="orderby">
                                <option selected="selected" value="menu-order">50 jobs</option>
                                <option value="popularity">Freshness</option>
                                <option value="popularity">Relevance</option>
                                <option value="popularity">Walk-in</option>
                                {/* <!-- <option value="popularity">price</option> --> */}
                            </select>
                        </label>
                    </form>
                </div>
            </div>


            <div class="adds-wrapper">
                <div class="item-list">
                    <div class="row">
                        <div class="col-sm-2 no-padding photobox">
                            <div class="add-image">
                                <a href="#"><img src="assets/img/item/img-1.jpg" alt="" /></a>
                                <span class="photo-count"><i class="fas fa-camera"></i>2</span>
                            </div>
                        </div>
                        <div class="col-sm-7 add-desc-box">
                            <div class="add-details">
                                <h5 class="add-title"><a href="ads-details.html">Full Stack Developer</a></h5>
                                <div class="info">
                                    <span class="add-type">B</span>
                                    <span class="date">
                                        <i class="fas fa-clock"></i>
                                        16:22:13 2020-02-29
                                    </span> -
                                    <span class="category">IT</span> -
                                    <span class="item-location"><i class="fas fa-map-marker"></i> Pune </span>
                                </div>
                                <div class="item_desc">
                                    <a href="#">BE , B.Tech Fresher</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 float-right  price-box">
                            {/* <!-- <h2 class="item-price"> $ 215</h2> --> */}
                            <a class="btn btn-danger btn-sm"><i class="fas fa-certificate"></i>
                                <span>Apply</span></a>
                            {/* <!-- <a class="btn btn-common btn-sm"> <i class="fas fa-eye"></i> <span>215</span> </a> --> */}
                        </div>
                    </div>
                </div>
                <div class="item-list">
                    <div class="row">
                        <div class="col-sm-2 no-padding photobox">
                            <div class="add-image">
                                <a href="#"><img src="assets/img/item/img-2.jpg" alt="" /></a>
                                <span class="photo-count"><i class="fas fa-camera"></i>2</span>
                            </div>
                        </div>
                        <div class="col-sm-7 add-desc-box">
                            <div class="add-details">
                                <h5 class="add-title"><a href="ads-details.html">Java Developer</a></h5>
                                <div class="info">
                                    <span class="add-type">B</span>
                                    <span class="date">
                                        <i class="fas fa-clock"></i>
                                        16:22:13 2020-02-29
                                    </span> -
                                    <span class="category">IT</span> -
                                    <span class="item-location"><i class="fas fa-map-marker"></i> Pune </span>
                                </div>
                                <div class="item_desc">
                                    <a href="#">Silly Con vhaly</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 float-right price-box">
                            {/* <!-- <h2 class="item-price"> $ 199 </h2> --> */}
                            <a class="btn btn-danger btn-sm"><i class="fas fa-certificate"></i>
                                <span>Apply</span></a>
                            {/* <!-- <a class="btn btn-common btn-sm"> <i class="fas fa-eye"></i> <span>215</span> </a> --> */}
                        </div>
                    </div>
                </div>
                <div class="item-list">
                    <div class="row">
                        <div class="col-sm-2 no-padding photobox">
                            <div class="add-image">
                                <a href="#"><img src="assets/img/item/img-3.jpg" alt="" /></a>
                                <span class="photo-count"><i class="fas fa-camera"></i>2</span>
                            </div>
                        </div>
                        <div class="col-sm-7 add-desc-box">
                            <div class="add-details">
                                <h5 class="add-title"><a href="ads-details.html">Manule Testing(Java)</a></h5>
                                <div class="info">
                                    <span class="add-type">B</span>
                                    <span class="date">
                                        <i class="fas fa-clock"></i>
                                        16:22:13 2020-02-29
                                    </span> -
                                    <span class="category">IT</span> -
                                    <span class="item-location"><i class="fas fa-map-marker"></i> Delhi </span>
                                </div>
                                <div class="item_desc">
                                    <a href="#">Fresher 2021 passout</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 float-right price-box">
                            {/* <!-- <h2 class="item-price"> $ 250 </h2> --> */}
                            <a class="btn btn-danger btn-sm"><i class="fas fa-certificate"></i>
                                <span>Apply</span></a>
                            {/* <!-- <a class="btn btn-common btn-sm"> <i class="fas fa-eye"></i> <span>215</span> </a> --> */}
                        </div>
                    </div>
                </div>
                <div class="item-list">
                    <div class="row">
                        <div class="col-sm-2 no-padding photobox">
                            <div class="add-image">
                                <a href="#"><img src="assets/img/item/img-4.jpg" alt="" /></a>
                                <span class="photo-count"><i class="fas fa-camera"></i></span>
                            </div>
                        </div>
                        <div class="col-sm-7 add-desc-box">
                            <div class="add-details">
                                <h5 class="add-title"><a href="ads-details.html">Core Java Developer </a></h5>
                                <div class="info">
                                    <span class="add-type">B</span>
                                    <span class="date">
                                        <i class="fas fa-clock"></i>
                                        16:22:13 2020-02-29
                                    </span> -
                                    <span class="category">IT</span> -
                                    <span class="item-location"><i class="fas fa-map-marker"></i> Pune </span>
                                </div>
                                <div class="item_desc">
                                    <a href="#">Fresher 2021 passout</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 float-right price-box">
                            {/* <!-- <h2 class="item-price"> $ 150 </h2> --> */}
                            <a class="btn btn-danger btn-sm"><i class="fas fa-certificate"></i>
                                <span>Apply</span></a>
                            {/* <!-- <a class="btn btn-common btn-sm"> <i class="fas fa-eye"></i> <span>215</span> </a> --> */}
                        </div>
                    </div>
                </div>
                <div class="item-list">
                    <div class="row">
                        <div class="col-sm-2 no-padding photobox">
                            <div class="add-image">
                                <a href="#"><img src="assets/img/item/img-5.jpg" alt="" /></a>
                                <span class="photo-count"><i class="fas fa-camera"></i>2</span>
                            </div>
                        </div>
                        <div class="col-sm-7 add-desc-box">
                            <div class="add-details">
                                <h5 class="add-title"><a href="ads-details.html">Hibernate,Springboot</a></h5>
                                <div class="info">
                                    <span class="add-type">B</span>
                                    <span class="date">
                                        <i class="fas fa-clock"></i>
                                        16:22:13 2020-02-29
                                    </span> -
                                    <span class="category">IT</span> -
                                    <span class="item-location"><i class="fas fa-map-marker"></i> Surat </span>
                                </div>
                                <div class="item_desc">
                                    <a href="#">Fresher 2021 passout</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 float-right price-box">
                            {/* <!-- <h2 class="item-price"> $ 120</h2> --> */}
                            <a class="btn btn-danger btn-sm"><i class="fas fa-certificate"></i>
                                <span>Apply</span></a>
                            {/* <!-- <a class="btn btn-common btn-sm"> <i class="fas fa-eye"></i> <span>215</span> </a> --> */}
                        </div>
                    </div>
                </div>
                <div class="item-list">
                    <div class="row">
                        <div class="col-sm-2 no-padding photobox">
                            <div class="add-image">
                                <a href="#"><img src="assets/img/item/img-6.jpg" alt="" /></a>
                                <span class="photo-count"><i class="fas fa-camera"></i>2</span>
                            </div>
                        </div>
                        <div class="col-sm-7 add-desc-box">
                            <div class="add-details">
                                <h5 class="add-title"><a href="ads-details.html">Java Developer</a></h5>
                                <div class="info">
                                    <span class="add-type">B</span>
                                    <span class="date">
                                        <i class="fas fa-clock"></i>
                                        16:22:13 2020-02-29
                                    </span> -
                                    <span class="category">IT</span> -
                                    <span class="item-location"><i class="fas fa-map-marker"></i> London </span>
                                </div>
                                <div class="item_desc">
                                    <a href="#">Fresher 2021 passout</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 float-right price-box">
                            {/* <!-- <h2 class="item-price"> $ 150 </h2> --> */}
                            <a class="btn btn-danger btn-sm"><i class="fas fa-certificate"></i>
                                <span>Apply</span></a>
                            {/* <!-- <a class="btn btn-common btn-sm"> <i class="fas fa-eye"></i> <span>215</span> </a> --> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
        );
    }

}