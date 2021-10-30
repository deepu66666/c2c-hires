import React, { Component, form, isLoaded } from "react";
import '../assets/css/main.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/summernote.css'
import FormPage from "./FormPage";


export default class Index extends Component {

    SECTOR_ENDPOINT = "https://proxy-c2c-hire.us-e2.cloudhub.io/sector";
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };

    }
    componentDidMount() {
        
        fetch(this.SECTOR_ENDPOINT)
        .then(res => res.json())
        .then(
            (result) => {
                debugger
            this.setState({
                isLoaded: true,
                cards: result
            });
            },
            
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
        
    }

    handleClick() {
        const skill = document.getElementById("skill-input").value;
        const sector = document.getElementById("sector-input").value;
        if (skill & sector) {
            window.location.href = "list?skill=" + skill + "&sector=" + sector;
        }else if(skill){
            window.location.href = "list?skill=" + skill;
        }
        else if (sector) {
            window.location.href = "list?sector=" + sector;
        }
        else {
            window.location.href = "/list";
        }


    }



    render() {

        return (<>
            <React.Fragment>
                <div className="header">

                    <nav className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
                        <div className="container">
                            <div className="theme-header clearfix">

                                <div className="navbar-header">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-toggle="collapse"
                                        aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                        <span className="lni-menu"></span>
                                        <span className="lni-menu"></span>
                                        <span className="lni-menu"></span>
                                    </button>
                                    <a href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></a>
                                </div>
                                <div className="collapse navbar-collapse" id="main-navbar">
                                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle active" href="#" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                Home
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item active" href="/">Home</a></li>

                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/skills">
                                                Hot Jobs
                                            </a>
                                        </li>

                                        <li className="postadd">
                                            <a onClick={this.handleClick} className="btn btn-danger btn-post" href="/form"><span
                                                className="fas fa-plus-circle"></span> Form</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>
                    </nav>

                </div>


                <section id="intro" className="section-intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="main-text">
                                <h1 className="intro-title">Welcome To <span>C2CHIRE</span></h1>
                                <p className="sub-title">company to company hire made easy</p>

                                <div className="search-bar">
                                    <fieldset>
                                        <form className="search-form">
                                            <div className="form-group">
                                                <i className="lni-bullhorn"></i>
                                                <input id="skill-input" type="text" name="customword" className="form-control"
                                                    placeholder="What are you looking for" />
                                            </div>
                                            <div className="form-group">
                                                <div className="tg-select">
                                                    <select id="sector-input">
                                                        <option value="">Sector</option>
                                                        <option value="IT">IT</option>
                                                        <option value="Electrical">Electrical</option>
                                                        <option value="Mechanical">Mechanical</option>
                                                        <option value="Banking">Banking</option>
                                                        <option value="Production">Production</option>
                                                        <option value="Sales">Sales</option>
                                                        <option value="Finance">Finance</option>
                                                        <option value="Pharmaceutical">Pharmaceutical</option>
                                                    </select>
                                                    <i className="fas fa-angle-down"></i>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="tg-select" id="minexp-input">
                                                    <select id="sector-input">
                                                        <option value="0">Min Experience</option>
                                                        <option value="1">1 Year</option>
                                                        <option value="2">2 Years</option>
                                                        <option value="3">3 Years</option>
                                                        <option value="4">4 Years</option>
                                                        <option value="5">5 Years</option>
                                                        <option value="6">6 Years</option>
                                                        <option value="7">7 Years</option>
                                                        <option value="8">8 Years</option>
                                                    </select>
                                                    <i className="fas fa-angle-down"></i>
                                                </div>
                                            </div>
                                            <button onClick={this.handleClick} className="btn btn-common" type="button"><i className="lni-search"></i>Search
                                                Now</button>
                                        </form>
                                    </fieldset>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="wrapper">

                    <section id="categories-homepage">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="section-title">Browse 8 Sectors</h3>
                                </div>

                                {this.state.cards && this.state.cards.map(card => (
                                    <div className="col-lg-3 col-md-6 col-xs-12">
                                        <div className="category-box border-1 wow fadeInUpQuick" data-wow-delay="0.3s">
                                            <div className="icon">
                                                <a href="category.html"><i className="lnr lnr-users color-1"></i></a>
                                            </div>
                                            <div className="category-header">
                                                <a href="category.html">
                                                    <h4>{card.sector}</h4>
                                                </a>
                                            </div>
                                            <div className="category-content">
                                                <ul>
                                                    {card.skills && card.skills.map(skill => (
                                                        <li>
                                                            <a href={"/list?skill=" + skill.name}>{skill.name}</a>
                                                            <sapn className="category-counter">{skill.count}</sapn>

                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        </>
        );
    }
}
