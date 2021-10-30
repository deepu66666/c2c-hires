import React, { Component ,form } from "react";
import '../assets/css/main.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/summernote.css'


export default class SearchBox extends Component {

    
   
    render() {
        return (<>
            <div class="header">

<nav class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
<div class="container">
<div class="theme-header clearfix">

<div class="navbar-header">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-toggle="collapse" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
<span class="lni-menu"></span>
<span class="lni-menu"></span>
<span class="lni-menu"></span>
</button>
<a href="index.html" class="navbar-brand"><img src="assets/img/logo.png" alt="" /></a>
</div>
<div class="collapse navbar-collapse" id="main-navbar">
<ul class="navbar-nav mr-auto w-100 justify-content-end">
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Home
</a>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="/">Home </a></li>
{/* <!-- <li><a class="dropdown-item" href="index-v-2.html">Home 2</a></li>
<li><a class="dropdown-item" href="index-v-3.html">Home 3</a></li> --> */}
</ul>
</li>
<li class="nav-item">
<a class="nav-link active" href="category.html">
Skills
</a>
</li>
<li class="nav-item dropdown">
{/* <!-- <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Pages
</a> --> */}
{/* <!-- <ul class="dropdown-menu">
<li><a class="dropdown-item" href="about.html">About Us</a></li>
<li><a class="dropdown-item" href="pricing.html">Pricing Table</a></li>
<li><a class="dropdown-item" href="ads-details.html">Ads Details</a></li>
<li><a class="dropdown-item" href="post-ads.html">Ads Post</a></li>
<li><a class="dropdown-item" href="404.html">404</a></li>
<li><a class="dropdown-item" href="faq.html">Faq</a></li>
 </ul> --> */}
</li>
<li class="nav-item dropdown">
{/* <!-- <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Blog
</a>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="blog.html">Blog - Right Sidebar</a></li>
<li><a class="dropdown-item" href="blog-left-sideba.html">Blog - Left Sidebar</a></li>
<li><a class="dropdown-item" href="blog-full-width.html"> Blog full width </a></li>
<li><a class="dropdown-item" href="blog-details.html">Blog Details</a></li>
</ul> --> */}
</li>
{/* <!-- <li class="nav-item">
<a class="nav-link" href="contact.html">
Contact
</a>
</li> --> */}
{/* <!-- <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="lnr lnr-user"></i> My Account
</a>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="account-home.html"><i class="lnr lnr-home"></i> Account Home</a></li>
<li><a class="dropdown-item" href="account-myads.html"><i class="lnr lnr-cart"></i> My Ads</a></li>
<li><a class="dropdown-item" href="account-favourite-ads.html"><i class="lnr lnr-heart"></i> Favourite ads</a></li>
<li><a class="dropdown-item" href="account-archived-ads.html"><i class="lnr lnr-file-add"></i> Archived</a></li>
<li><a class="dropdown-item" href="login.html"><i class="lnr lnr-lock"></i> Log In</a></li>
<li><a class="dropdown-item" href="signup.html"><i class="lnr lnr-user"></i> Signup</a></li>
<li><a class="dropdown-item" href="forgot-password.html"><i class="lnr lnr-sync"></i> Forgot Password</a></li>
<li><a class="dropdown-item" href="account-close.html"><i class="lnr lnr-cross"></i>Account close</a></li>
</ul>
</li> --> */}
<li class="postadd">
<a class="btn btn-danger btn-post" href="/form"><span class="fas fa-plus-circle"></span> Form</a>
</li>
</ul>
</div>
</div>
</div>
<div class="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>
</nav>

</div>


<div id="search-row-wrapper">
<div class="container">
<div class="search-inner">

<div class="search-bar row">
<fieldset>
<form class="search-form">
<div class="form-group">
<i class="lni-bullhorn"></i>
<input type="text" name="customword" class="form-control" placeholder="What are you looking for" />
</div>
<div class="form-group">
<div class="tg-select">
<select>
    <option value="none">All Jobs</option>
    <option value="none">IT</option>
    <option value="none">Electrical</option>
    <option value="none">Mechanical</option>
    <option value="none">Banking</option>
    <option value="none">Production</option>
    <option value="none">Sales</option>
    <option value="none">Finance</option>
    <option value="none">Pharmaceutical</option>
</select>
<i class="fas fa-angle-down"></i>
</div>
</div>
<div class="form-group">
<div class="tg-select">
 <select>
    <option value="none">All Locations</option>
    <option value="none">Banglore</option>
    <option value="none">Chandighar</option>
    <option value="none">Mumbai</option>
    <option value="none">Jaipur</option>
    <option value="none">Nashik</option>
    <option value="none">Indore</option>
    <option value="none">Delhi</option>
<i class="lnr-chevron-down"></i>
</select>
<i class="fas fa-angle-down"></i>
</div>
</div>
<button class="btn btn-common" type="button"><i class="lni-search"></i> Search Now</button>
</form>
</fieldset>
</div>

</div>
</div>
</div>


<div class="main-container">
<div class="container">
<div class="row">
<div class="col-lg-3 col-md-12 col-xs-12 page-sidebar">
<aside>
<div class="inner-box">
<div class="categories">
<div class="widget-title">
<i class="fas fa-align-justify"></i>
<h4>All Categories</h4>
</div>
<div class="categories-list">
<ul>
<li>
<a href="#">
<i class="fas fa-desktop"></i>
IT <span class="category-counter">(9)</span>
</a>
</li>
<li>
<a href="#">
<i class="fas fa-wrench"></i>
Electrical <span class="category-counter">(8)</span>
</a>
</li>
<li>
<a href="#">
<i class="fab fa-github"></i>
Mechanical <span class="category-counter">(2)</span>
</a>
</li>
<li>
<a href="#">
<i class="fas fa-leaf"></i>
Banking <span class="category-counter">(3)</span>
</a>
</li>
<li>
<a href="#">
<i class="fas fa-home"></i>
Production <span class="category-counter">(4)</span>
</a>
</li>
<li>
<a href="#">
<i class="fab fa-black-tie"></i>
Sales <span class="category-counter">(5)</span>
</a>
</li>
<li>
<a href="#">
<i class="fas fa-utensils"></i>
Finance <span class="category-counter">(5)</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="inner-box">
{/* <!-- <div class="widget-title">
<h4>Premium Ads</h4>
</div>
<div class="advimg">
<ul class="featured-list">
<li>
<img alt="" src="assets/img/featured/img1.jpg">
<div class="hover">
<a href="#"><span>$49</span></a>
</div>
</li>
<li>
<img alt="" src="assets/img/featured/img2.jpg"> 
<div class="hover">
<a href="#"><span>$49</span></a>
</div>
</li>
<li>
<img alt="" src="assets/img/featured/img3.jpg">
<div class="hover">
<a href="#"><span>$49</span></a>
</div>
</li>
</ul>
</div> --> */}
</div>
{/* <div class="inner-box">
<!-- <div class="widget-title">
<h4>Advertisement</h4>
</div>
<img src="assets/img/img1.jpg" alt="">
</div> --> */}
</aside>
</div>
<div class="col-lg-9 col-md-12 col-xs-12 page-content">

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
<h5 class="add-title"><a href="ads-details.html">Java Developer</a></h5>
<div class="info">
<span class="add-type">B</span>
<span class="date">
<i class="fas fa-clock"></i>
16:22:13 2020-02-29
</span> -
<span class="category">IT</span> -
<span class="item-location"><i class="fas fa-map-marker"></i> Banglore </span>
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
<h5 class="add-title"><a href="ads-details.html">Mulesoft Developer</a></h5>
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
<h5 class="add-title"><a href="ads-details.html">PHP Developer</a></h5>
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
<h5 class="add-title"><a href="ads-details.html">.Net Developer</a></h5>
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
<h5 class="add-title"><a href="ads-details.html">Python Developer</a></h5>
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
<h5 class="add-title"><a href="ads-details.html">MuleSoft Engineer</a></h5>
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

<div class="col-12">

<div class="pagination-bar">
<nav>
<ul class="pagination">
<li class="page-item"><a class="page-link active" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item"><a class="page-link" href="#">4</a></li>
<li class="page-item"><a class="page-link" href="#"> ...</a></li>
<li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</nav>
</div>

{/* <!-- <div class="post-promo text-center">
<h2> Do you get anything for sell ? </h2>
<h5>Sell your products online FOR FREE. It's easier than you think !</h5>
<a href="post-ads.html" class="btn btn-post btn-danger">Post a Free Ad </a>
</div> --> */}
</div>
</div>
</div>
</div>
</div>
    </>
        );
    }

}