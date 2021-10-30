import React, { Component, form } from "react";
import '../assets/css/main.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/summernote.css'


export default class FormPage extends Component {



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
                                        <a class="nav-link" href="/skills">
                                            Skills
                                        </a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        {/* <!-- <a class="nav-link dropdown-toggle active" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Pages
</a> --> */}
                                        {/* <!-- <ul class="dropdown-menu">
<li><a class="dropdown-item" href="about.html">About Us</a></li>
<li><a class="dropdown-item" href="pricing.html">Pricing Table</a></li>
<li><a class="dropdown-item" href="ads-details.html">Ads Details</a></li>
<li><a class="dropdown-item active" href="post-ads.html">Ads Post</a></li>
<li><a class="dropdown-item" href="404.html">404</a></li>
 <li><a class="dropdown-item" href="faq.html">Faq</a></li>
</ul>
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Blog
</a>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="blog.html">Blog - Right Sidebar</a></li>
<li><a class="dropdown-item" href="blog-left-sideba.html">Blog - Left Sidebar</a></li>
<li><a class="dropdown-item" href="blog-full-width.html"> Blog full width </a></li>
<li><a class="dropdown-item" href="blog-details.html">Blog Details</a></li>
</ul> --> */}
                                    </li>
                                    <li class="nav-item">
                                        {/* <!-- <a class="nav-link" href="contact.html">
Contact
</a> --> */}
                                    </li>
                                    <li class="nav-item dropdown">
                                        {/* <!-- <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="lnr lnr-user"></i> My Account
</a> --> */}
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
                                    </li>
                                    <li class="postadd">
                                        {/* <!-- <a class="btn btn-danger btn-post" href="post-ads.html"><span class="fas fa-plus-circle"></span> Post an Ad</a> --> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>
                </nav>

            </div>


            <div class="page-header" style={{ backgroundI: 'url(assets/img/banner1.jpg)' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="page-title">Details</h1>
                        </div>
                    </div>
                </div>
            </div>


            <section id="content">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="row page-content">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                    <div class="inner-box">
                                        <h2 class="title-2">Ad Detail</h2>
                                        <div class="dashboard-wrapper">
                                            <div class="form-group mb-3">
                                                <label class="control-label">Project Title</label>
                                                <input class="form-control input-md" name="Title" placeholder="Title" type="text" />
                                            </div>
                                            <div class="form-group mb-3 tg-inputwithicon">
                                                <label class="control-label">Categories</label>
                                                <div class="tg-select form-control">
                                                    <select>
                                                        <option value="none">Select Categories</option>
                                                        <option value="none">Mobiles</option>
                                                        <option value="none">Electronics</option>
                                                        <option value="none">Training</option>
                                                        <option value="none">Real Estate</option>
                                                        <option value="none">Services</option>
                                                        <option value="none">Training</option>
                                                        <option value="none">Vehicles</option>
                                                    </select>
                                                    <i class="fas fa-angle-down"></i>
                                                </div>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label class="control-label">Price Title</label>
                                                <input class="form-control input-md" name="price" placeholder="Ad your Price" type="text" />
                                                <div class="tg-checkbox mt-3">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="tg-priceoncall" />
                                                        <label class="custom-control-label" for="tg-priceoncall">Price On Call</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group md-3">
                                                <section id="editor">
                                                    <div id="summernote">
                                                    </div>
                                                </section>
                                            </div>
                                            <label class="tg-fileuploadlabel" for="tg-photogallery">
                                                <span>Drop files anywhere to upload</span>
                                                <span>Or</span>
                                                <span class="btn btn-common">Select Files</span>
                                                <span>Maximum upload file size: 500 KB</span>
                                                <input id="tg-photogallery" class="tg-fileinput" type="file" name="file" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                    <div class="inner-box">
                                        <div class="tg-contactdetail">
                                            <h2 class="title-2">Contact Detail</h2>
                                            <div class="dashboard-wrapper">
                                                <div class="form-group mb-3">
                                                    <strong>I’m a:</strong>
                                                    <div class="tg-selectgroup">
                                                        <span class="tg-radio">
                                                            <input id="tg-sameuser" type="radio" name="usertype" value="same user" checked="" />
                                                            <label for="tg-sameuser">Fresher</label>
                                                        </span>
                                                        <span class="tg-radio">
                                                            <input id="tg-someoneelse" type="radio" name="usertype" value="someone else" />
                                                            <label for="tg-someoneelse">Experiance</label>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">First Name*</label>
                                                    <input class="form-control input-md" name="name" type="text" />
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">Last Name*</label>
                                                    <input class="form-control input-md" name="name" type="text" />
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">Phone*</label>
                                                    <input class="form-control input-md" name="phone" type="text" />
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">Enter Address</label>
                                                    <input class="form-control input-md" name="address" type="text" />
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">Enter Address</label>
                                                    <input class="form-control input-md" name="address" type="text" />
                                                </div>
                                                <div class="form-group mb-3 tg-inputwithicon">
                                                    <label class="control-label">Country</label>
                                                    <div class="tg-select form-control">
                                                        <select>
                                                            <option value="none">Select Country</option>
                                                            <option value="none">India</option>
                                                            <option value="none">US</option>
                                                            <option value="none">UAE</option>
                                                            <option value="none">Japan</option>
                                                            <option value="none">Chaina</option>
                                                            <option value="none">England</option>
                                                        </select>
                                                        <i class="fas fa-angle-down"></i>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3 tg-inputwithicon">
                                                    <label class="control-label">State</label>
                                                    <div class="tg-select form-control">
                                                        <select>
                                                            <option value="none">Select State</option>
                                                            <option value="none">Select State</option>
                                                            <option value="none">Select State</option>
                                                        </select>
                                                        <i class="fas fa-angle-down"></i>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3 tg-inputwithicon">
                                                    <label class="control-label">City</label>
                                                    <div class="tg-select form-control">
                                                        <select>
                                                            <option value="none">Select City</option>
                                                            <option value="none">Select City</option>
                                                            <option value="none">Select City</option>
                                                        </select>
                                                        <i class="fas fa-angle-down"></i>
                                                    </div>
                                                </div>
                                                <div class="tg-checkbox mb-2">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="tg-agreetermsandrules" />
                                                        <label class="custom-control-label" for="tg-agreetermsandrules">I agree to all <a href="javascript:void(0);">Terms of Use &amp; Posting Rules</a></label>
                                                    </div>
                                                </div>
                                                <button class="btn btn-common" type="button">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        );
    }

}