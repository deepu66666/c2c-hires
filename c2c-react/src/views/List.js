import React, { Component, form } from "react";
import '../assets/css/main.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/summernote.css'


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],

    };
  }
  LIST_URL = "https://c2c-hires-sapi.us-e2.cloudhub.io/api/jobposts";
  componentDidMount() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params);

    let query = "";
    if (params.skill && params.sector) {
      query = "?skills=" + params.skill + "&sector=" + params.sector;
    } else if (params.skill) {
      query = "?skills=" + params.skill;
    }
    else if (params.sector) {
      query = "?sector=" + params.sector;
    }
    else {
      query = "?pageNumber=1";
    }
    fetch(this.LIST_URL + query, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          debugger
          this.setState({
            isLoaded: true,
            data: result
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

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      //   return(
      //     <ul>
      //     {data && data.map(item => (
      //      <li key={item.NAME}>
      //         {item.SKILLS} {item.CONTACT}
      //         {/* {`${item.SKILLS} ${item.CONTACT}`} */}
      //       </li>
      //     ))}
      //   </ul>
      //   );



      return (<>
        {/* <div class="col-lg-9 col-md-12 col-xs-12 page-content"> */}

        <div class="adds-wrapper">
          <div class="item-list">
            {data && data.map(item => (
              <div class="row" style={{margin: "10px"}}>
                <div class="col-sm-2 no-padding photobox">
                  <div class="add-image">
                    <a href="#"><img src="assets/img/item/img-1.jpg" alt="" /></a>
                    {/* <span class="photo-count"><i class="fas fa-camera"></i></span> */}
                  </div>
                </div>
                <div class="col-sm-7 add-desc-box">
                  <div class="add-details">
                    <h5 class="add-title"><a href="/list?skill=mulesoft">{item.NAME}</a></h5>
                    <div class="info">
                      {/* <span class="add-type"></span> */}
                      <span class="date">
                        <i class="fas fa-clock">VACANCIES  :  </i>
                        &nbsp;&nbsp;{item.VACANCIES}
                      </span>
                      <br />MIN_EXPERIENCE  :
                      <span class="category">&nbsp;&nbsp;{item.MINEXP}</span>
                      <br />Email-Id  :
                      <span class="item-location"><i class="fas fa-map-marker"></i>&nbsp;&nbsp; {item.CONTACT} </span>
                    </div>
                    <div class="item_desc">
                      <a href="#">{item.SKILLS}</a>
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
            ))}
          </div>
        </div>

      </>
      );
    }
  }


}