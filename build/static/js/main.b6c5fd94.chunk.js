(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/travenation.70187bcd.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/image1.598b5e2f.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/image2.c92a0012.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/image3.f0915bc4.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/profilePic.4dcb5ab4.png"},56:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a.n(r),c=a(2),s=a(9),i=a(40),m=a.n(i);var u=Object(s.f)((function(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(c.b,{className:"navbar-brand",to:"/"},l.a.createElement("h3",{style:{marginLeft:"30px",color:"grey"}},l.a.createElement("img",{style:{width:"30px",marginRight:"10px"},src:m.a,alt:"travenation"}),"Travenation")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),l.a.createElement("form",{className:"d-flex"},sessionStorage.getItem("login_token")?l.a.createElement(l.a.Fragment,null,l.a.createElement(c.b,{to:"/dashboard"},l.a.createElement("button",{style:{width:"100px"},className:"btn btn-outline-secondary",type:"submit"},"Dashboard")),l.a.createElement("button",{style:{width:"100px",marginLeft:"10px"},className:"btn btn-outline-danger",type:"submit",onClick:function(){sessionStorage.removeItem("login_token"),sessionStorage.removeItem("role"),sessionStorage.removeItem("email"),e.history.push("/")}},"LogOut")):l.a.createElement(l.a.Fragment,null,l.a.createElement(c.b,{to:"/login"},l.a.createElement("button",{style:{width:"150px"},className:"btn btn-outline-secondary",type:"submit"},"LogIn"))))))))})),h=a(42),d=a.n(h),p=a(41),E=a.n(p),b=a(43),g=a.n(b),f=a(44),v=a.n(f),y=a(45),k=a.n(y),N=Object(s.f)((function(e){return l.a.createElement("center",{style:{fontSize:"larger",backgroundColor:"#f1f1f1",overflow:"hidden",height:"30vh",padding:"20px"}},l.a.createElement("div",{className:"row",style:{height:"20vh",overflow:"hidden"}},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(c.b,{to:"/"},l.a.createElement("b",{style:{color:"grey"}},"Home | ",l.a.createElement(E.a,null)))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("b",{onClick:function(){sessionStorage.getItem("login_token")?e.history.push("/viewbookings"):alert("Please login first")},style:{color:"grey",cursor:"pointer"}},"Bookings | ",l.a.createElement(d.a,null))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("b",{style:{color:"grey"}},"Connect |  ",l.a.createElement(g.a,null)," ",l.a.createElement(v.a,null)," ",l.a.createElement(k.a,null)))),l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("b",null,"copyright \xa9 Travenation - All rights reserved")))})),j=a(3),S=a(4),O=a(6),C=a(5),_=a(100),x=function(e){return l.a.createElement(l.a.Fragment,null,function(e){var t=e.tripType_data;return t?t.map((function(e){return l.a.createElement("div",{className:"col-md-6",key:e.trip},l.a.createElement("div",{className:"card",style:{marginBottom:"50px",height:"60vh",padding:"10px"}},l.a.createElement("img",{src:e.image,style:{height:"250px"},alt:"triptypeimage"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},"Start your trip in ",e.name," style"," "),l.a.createElement(c.b,{to:"/list/".concat(e.trip),className:"btn btn-outline-secondary"},e.name))))})):l.a.createElement(_.a,{animation:"border",role:"status"})}(e))},w=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={tripType:""},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://developerfunnel.herokuapp.com/booking",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({tripType:t})}))}},{key:"render",value:function(){return l.a.createElement(x,{tripType_data:this.state.tripType})}}]),a}(n.Component),D=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange_city=function(e){var t=e.target.value;fetch("".concat("https://developerfunnel.herokuapp.com/hotels?city=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({hotel:e})}))},n.renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{key:e._id,value:e.city},e.city_name)}))},n.renderHotel=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name," | ",e.locality)}))},n.handleChange_hotel=function(e){n.props.history.push("/details/".concat(e.target.value))},n.state={location:"",hotel:""},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://developerfunnel.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}},{key:"render",value:function(){return l.a.createElement("div",{style:{alignItems:"center",marginTop:"50px"}},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement("select",{id:"cityname",className:"form-control",onChange:this.handleChange_city},l.a.createElement("option",null,"---Select City---"),this.renderCity(this.state.location))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("select",{id:"hotelname",className:"form-control",onChange:this.handleChange_hotel},l.a.createElement("option",null,"---Select Hotel---"),this.renderHotel(this.state.hotel)))))}}]),a}(n.Component),I=Object(s.f)(D),T=a(19),B=a(46),H=a.n(B),P=a(47),A=a.n(P),R=a(48),M=a.n(R);var G=function(){return l.a.createElement("div",{style:{marginBottom:"50px"}},l.a.createElement(T.a,{className:"carousel offset-2",style:{width:"70%"}},l.a.createElement(T.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:A.a,alt:"First slide"}),l.a.createElement(T.a.Caption,null,l.a.createElement("h3",null,"Swimming Pool"),l.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),l.a.createElement(T.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:M.a,alt:"Third slide"}),l.a.createElement(T.a.Caption,null,l.a.createElement("h3",null,"Executive Banquet"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(T.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:H.a,alt:"Third slide"}),l.a.createElement(T.a.Caption,null,l.a.createElement("h3",null,"Hotel Room"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))),l.a.createElement("div",{className:"col-md-8 offset-2",style:{marginTop:"50px"}},l.a.createElement("div",null,l.a.createElement("h3",null,"Select Destination"),l.a.createElement("hr",null),l.a.createElement(I,null)),l.a.createElement("div",{className:"row",style:{marginTop:"50px"}},l.a.createElement("h3",null,"Select Type"),l.a.createElement("hr",null),l.a.createElement(w,null))))},L=a(52),U=a.n(L),F="https://developerfunnel.herokuapp.com/hotellist/",J=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleChange=function(t){var a,n=t.target.value,l=sessionStorage.getItem("tripid");""===n?a="".concat(F).concat(l):"1"===n?a="".concat(F).concat(l,"?hcost=3000&lcost=1000"):"2"===n?a="".concat(F).concat(l,"?hcost=6000&lcost=3001"):"3"===n&&(a="".concat(F).concat(l,"?hcost=20000&lcost=6001")),U.a.get(a).then((function(t){e.props.atcostHotel(t.data)}))},e}return Object(S.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"card",onChange:this.handleChange,style:{padding:"10px"}},l.a.createElement("h5",null,"Cost Filter"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"room"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1",name:"room"}),"RS 1000-3000"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"2",name:"room"}),"RS 3001-6000"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"3",name:"room"}),"RS 6001-above")))}}]),a}(n.Component),q=function(e){return l.a.createElement("div",{className:"row"},function(e){var t=e.hotel_data;return t?t.map((function(e){return l.a.createElement("div",{className:"col-md-4",id:e._id},l.a.createElement("div",{className:"card",style:{marginBottom:"50px",height:"60vh",padding:"10px"}},l.a.createElement("img",{style:{height:"250px"},src:e.thumb,alt:"images"}),l.a.createElement("h5",null,e.name,", ",e.city_name),l.a.createElement("h6",null,"Price : ",e.cost,"/ Day"),l.a.createElement("label",null,l.a.createElement(c.b,{to:"/details/".concat(e._id)},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},"More Details")))))})):l.a.createElement(_.a,{animation:"border",role:"status"})}(e))},Y=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={tripType_result:""},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;sessionStorage.setItem("tripid",t),fetch("".concat("https://developerfunnel.herokuapp.com/hotellist/").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({tripType_result:t})}))}},{key:"filterData",value:function(e){this.setState({tripType_result:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{padding:"34px"}},l.a.createElement("div",{className:"offset-2"},l.a.createElement("h1",null,"Hotels"),l.a.createElement("hr",null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement(J,{atcostHotel:function(t){e.filterData(t)}})),l.a.createElement("div",{className:"col-md-10"},l.a.createElement(q,{hotel_data:this.state.tripType_result}))))}}]),a}(n.Component),z=sessionStorage.getItem("tripid"),V=Object(s.f)((function(e){var t=function(){sessionStorage.getItem("login_token")?e.history.push("/booking/".concat(z)):(alert("for booking user must have to login first...."),e.history.push("/login"))};return l.a.createElement("div",null,function(e){var a=e.details_data;if(a){var n=a;return l.a.createElement("div",null,l.a.createElement("img",{src:n.thumb,alt:"images"}),l.a.createElement("h3",null,n.name,", ",n.city_name),l.a.createElement("p",null,n.locality),l.a.createElement("p",null,n.address),l.a.createElement("h5",null,"Price ",n.cost,"/night"),l.a.createElement(c.b,{to:"/list/".concat(z)},l.a.createElement("button",{style:{width:"150px"},className:"btn btn-outline-secondary",type:"submit"},"Back")),l.a.createElement("button",{style:{width:"150px",marginLeft:"20px"},className:"btn btn-outline-success",type:"submit",onClick:t},"Place Booking"))}return l.a.createElement(_.a,{animation:"border",role:"status"})}(e))})),W=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={hotel_details:""},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("".concat("https://developerfunnel.herokuapp.com/hotelsdetails/").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({hotel_details:t[0]})}))}},{key:"render",value:function(){return sessionStorage.setItem("hotel_name",this.state.hotel_details.name),console.log(this.props.match.params.id),l.a.createElement("div",{className:"offset-2",style:{padding:"34px"}},l.a.createElement("h1",null,"Hotel Details"),l.a.createElement("hr",null),l.a.createElement(V,{details_data:this.state.hotel_details}))}}]),a}(n.Component),K=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChangeName=function(e){n.setState({name:e.target.value})},n.handleChangePhone=function(e){n.setState({phone:e.target.value})},n.handleChangeCheckIn=function(e){n.setState({checkIn:e.target.value})},n.handleChangeCheckOut=function(e){n.setState({checkOut:e.target.value})},n.submitData=function(){console.log(n.state),10===n.state.phone.length?(fetch("https://travenation-controller.herokuapp.com/bookings/generate_booking",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","x-access-token":sessionStorage.getItem("login_token")},body:JSON.stringify(n.state)}).then((function(e){return e.json()})).then(alert("Thanks for Choosing Us. Your booking has been placed")),n.props.history.push("/viewbookings")):alert("Please provide correct phone no.")},n.state={hotel_name:sessionStorage.getItem("hotel_name"),name:"",email:"",phone:"",checkIn:"",checkOut:"",status:"Pending"},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.setState({email:sessionStorage.getItem("email")})}},{key:"render",value:function(){var e=sessionStorage.getItem("tripid");return l.a.createElement("div",{className:"col-md-8 offset-2",style:{marginBottom:"50px"}},l.a.createElement("div",{class:"form-group"},l.a.createElement("h1",null,"Place Booking"),l.a.createElement("hr",null),l.a.createElement("div",{class:"form-group"},l.a.createElement("h5",null,"Hotel Name"),l.a.createElement("input",{className:"form-control",name:"hotel_name",type:"text",readOnly:!0,value:this.state.hotel_name}),l.a.createElement("h5",null,"Name"),l.a.createElement("input",{className:"form-control",name:"name",type:"text",onChange:this.handleChangeName}),l.a.createElement("h5",null,"Phone no."),l.a.createElement("input",{className:"form-control",name:"phone",type:"number",onChange:this.handleChangePhone}),l.a.createElement("h5",null,"Check-In Date"),l.a.createElement("input",{className:"form-control",name:"checkIn",type:"date",onChange:this.handleChangeCheckIn}),l.a.createElement("h5",null,"Check-Out Date"),l.a.createElement("input",{className:"form-control",name:"checkOut",type:"date",onChange:this.handleChangeCheckOut})),l.a.createElement("button",{style:{width:"150px",marginTop:"20px",marginBottom:"20px"},class:"btn btn-outline-success",type:"submit",onClick:this.submitData,value:"Submit"},"Submit"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(c.b,{to:"/details/".concat(e)},l.a.createElement("button",{style:{width:"150px"},className:"btn btn-outline-secondary",type:"submit"},"Back")),l.a.createElement(c.b,{to:"/list/".concat(e)},l.a.createElement("button",{style:{width:"150px",marginLeft:"20px"},className:"btn btn-outline-warning",type:"submit"},"Book Another")))))}}]),a}(n.Component),Q=a(25),X="https://travenation-controller.herokuapp.com/api/auth/login",Z=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",loader:!1,error:""},e.handler=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(Q.a)({},n,a))},e.submit_form=function(){e.state.email&&e.state.password?(e.setState({loader:!0}),fetch(X,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){!1===t.auth&&e.setState({error:t.error}),!0===t.auth&&(sessionStorage.setItem("login_token",t.token),e.props.history.push("/dashboard")),e.setState({loader:!1})}))):alert("please provide your details")},e}return Object(S.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-md-8 offset-2",style:{marginTop:"50px",marginBottom:"50px"}},l.a.createElement("div",{className:"login-input",onChange:this.handler},l.a.createElement("h2",null,"LogIn"),l.a.createElement("hr",null),l.a.createElement("p",{style:{color:"red"}},this.state.error),l.a.createElement("i",null,l.a.createElement("h5",null,"E-mail"))," ",l.a.createElement("input",{id:"input-mail",className:"form-control",name:"email",type:"email",placeholder:"e-mail"}),l.a.createElement("br",null),l.a.createElement("i",null,l.a.createElement("h5",null,"Passcode"))," ",l.a.createElement("input",{id:"input-password",className:"form-control",name:"password",type:"password",placeholder:"password"})),l.a.createElement("br",null),l.a.createElement("div",null,!this.state.loader&&l.a.createElement("button",{style:{width:"150px"},className:"btn btn-outline-secondary",type:"submit",onClick:this.submit_form}," ","Submit"),this.state.loader&&l.a.createElement("button",{style:{width:"150px"},className:"btn btn-secondary",type:"submit",onClick:this.submit_form,disabled:!0},l.a.createElement("i",{className:"fa fa-refresh fa-spin"})," Logging..."),l.a.createElement("p",null,"Not Registered? ",l.a.createElement(c.b,{to:"/signup"},"SignUp")," ")))}}]),a}(n.Component),$="https://travenation-controller.herokuapp.com/api/auth/register",ee=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",password:"",role:"",loader:!1,success:"",error:""},e.handler=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(Q.a)({},n,a))},e.submit_form=function(t){t.preventDefault(),e.setState({loader:!0});var a={name:e.state.name,email:e.state.email,password:e.state.password,role:e.state.role};e.state.email&&e.state.name&&e.state.password?fetch($,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){!0===t.auth&&(e.setState({success:t.success}),e.setState({error:""})),!1===t.auth&&(e.setState({error:t.error}),e.setState({success:""})),e.setState({loader:!1})})):(e.setState({loader:!1}),alert("please fill all input details"))},e}return Object(S.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-md-8 offset-2",style:{marginTop:"50px",marginBottom:"50px"}},l.a.createElement("div",{className:"signup-input",onChange:this.handler},l.a.createElement("h2",null,"SignUp"),l.a.createElement("hr",null),l.a.createElement("p",{style:{color:"red"}},this.state.error),l.a.createElement("p",{style:{color:"green"}},this.state.success),l.a.createElement("i",null,l.a.createElement("h5",null,"Enter your name")),l.a.createElement("input",{className:"form-control",name:"name",type:"text",placeholder:"fullname"}),l.a.createElement("br",null),l.a.createElement("i",null,l.a.createElement("h5",null,"Enter your E-mail")),l.a.createElement("input",{className:"form-control",name:"email",type:"email",placeholder:"e-mail"}),l.a.createElement("br",null),l.a.createElement("i",null,l.a.createElement("h5",null,"Enter your Password")),l.a.createElement("input",{className:"form-control",name:"password",type:"password",placeholder:"password"}),l.a.createElement("br",null)),l.a.createElement("div",null,!this.state.loader&&l.a.createElement("button",{style:{width:"150px"},className:"btn btn-outline-secondary",type:"submit",onClick:this.submit_form}," ","Submit"),this.state.loader&&l.a.createElement("button",{style:{width:"150px"},className:"btn btn-secondary",type:"submit",onClick:this.submit_form,disabled:!0},l.a.createElement("i",{className:"fa fa-refresh fa-spin"})," Registering..."),l.a.createElement("p",null,"Already a user? ",l.a.createElement(c.b,{to:"/login"},"LogIn")," ")))}}]),a}(n.Component),te=a(53),ae=a.n(te),ne=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={user:"",error:""},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://travenation-controller.herokuapp.com/api/auth/userInfo",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("login_token")}}).then((function(e){return e.json()})).then((function(t){e.setState({user:t}),sessionStorage.setItem("email",t.email)}))}},{key:"render",value:function(){return sessionStorage.setItem("role",this.state.user.role),l.a.createElement("div",{className:"row",style:{padding:"34px"}},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("img",{style:{width:"90%"},src:ae.a,alt:"profilepic"}),l.a.createElement("div",{style:{marginTop:"20px"}},l.a.createElement("h4",null,this.state.user.name),l.a.createElement("h6",null,this.state.user.role))),l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h4",null,"Information"),l.a.createElement("hr",null),l.a.createElement("h5",null,l.a.createElement("i",null,"Name")),l.a.createElement("h6",null,this.state.user.name),l.a.createElement("h5",null,l.a.createElement("i",null,"E-mail")),l.a.createElement("h6",null,this.state.user.email),l.a.createElement("br",null),l.a.createElement("h4",null,"Position"),l.a.createElement("hr",null),l.a.createElement("h5",null,l.a.createElement("i",null,"Role")),l.a.createElement("h6",null,this.state.user.role),l.a.createElement("br",null),l.a.createElement("h4",null,"Bookings"),l.a.createElement("hr",null),l.a.createElement("div",{className:"view-button"},"admin"===sessionStorage.getItem("role")?l.a.createElement(c.b,{to:"/admindashboard"},l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Admin Dashboard")):l.a.createElement(c.b,{to:"/viewbookings"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},"Your Bookings")))))}}]),a}(n.Component),le=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return null==sessionStorage.getItem("login_token")?this.props.history.push("/login"):null!==sessionStorage.getItem("login_token")&&"admin"!==sessionStorage.getItem("role")&&(alert("Sorry!! Only admin user can access user details."),this.props.history.push("/dashboard")),l.a.createElement("div",{className:"col-md-8 offset-2",style:{height:"80vh"}},l.a.createElement("div",{className:"adminDashboard"},l.a.createElement("h1",null,"Welcome to Admin Dashboard"),l.a.createElement("hr",null)),l.a.createElement("div",null,l.a.createElement(c.b,{to:"/viewusers"},l.a.createElement("button",{style:{marginTop:"10px",width:"200px"},className:"btn btn-outline-danger",type:"submit",onClick:this.registerUser},"View Registered Users")),l.a.createElement("br",null),l.a.createElement(c.b,{to:"/adminviewbookings"},l.a.createElement("button",{style:{marginTop:"10px",width:"200px"},className:"btn btn-outline-danger",type:"submit",onClick:this.registerUser},"All Bookings")),l.a.createElement("br",null),l.a.createElement(c.b,{to:"/completedbooking"},l.a.createElement("button",{style:{marginTop:"10px",width:"200px"},className:"btn btn-outline-danger",type:"submit",onClick:this.registerUser},"Completed Bookings"))))}}]),a}(n.Component),re=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={booking_data:"",hotel_name:"",booking_date:""},e.renderHotel=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{key:e._id},e.hotel_name)}))},e.hotelHandler=function(t){e.setState({hotel_name:t.target.value})},e.dateHandler=function(t){e.setState({booking_date:t.target.value})},e.hotelSearchHandler=function(){if(e.state.hotel_name){var t=e.state.booking_data.filter((function(t){return t.hotel_name===e.state.hotel_name}));e.props.atHotelName(t)}else alert("oops! Seems like no booking placed on selected hotel")},e.dateSearchHandler=function(){if(e.state.booking_date){var t=e.state.booking_data.filter((function(t){return t.checkIn>=e.state.booking_date}));e.props.atHotelName(t)}else alert("oops! Seems like no booking placed on selected date")},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://travenation-controller.herokuapp.com/bookings",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("login_token")}}).then((function(e){return e.json()})).then((function(t){e.setState({booking_data:t})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"col-md-3"},l.a.createElement("i",null,"Search Hotel")),l.a.createElement("select",{className:"col-md-5",onChange:this.hotelHandler,type:"text"},l.a.createElement("option",null,"--Select Hotel--"),this.renderHotel(this.state.booking_data)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:"btn btn-outline-success",onClick:this.hotelSearchHandler},"Hotel Search")))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"col-md-3"},l.a.createElement("i",null,"Search Date")),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("input",{onChange:this.dateHandler,type:"date"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:"btn btn-outline-success",onClick:this.dateSearchHandler},"Search")))))}}]),a}(n.Component),oe=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={bookingData:""},e.handleAccept=function(e){var t={_id:e};fetch("https://travenation-controller.herokuapp.com/bookings/accept_booking",{method:"POST",headers:{"Application-Type":"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){!0===t.auth?alert("Requested Booking ID ".concat(e," is confirmed")):alert("something went wrong! try again")}))},e.handleReject=function(e){var t={_id:e};fetch("https://travenation-controller.herokuapp.com/bookings/reject_booking",{method:"POST",headers:{"Application-Type":"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){!0===t.auth?alert("Requested Booking ID ".concat(e," is rejected")):alert("something went wrong! try again")}))},e.renderData=function(t){return t?t.map((function(t){return l.a.createElement("tr",{key:t._id},l.a.createElement("td",null,t._id),l.a.createElement("td",null,t.hotel_name),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.phone),l.a.createElement("td",null,t.checkIn),l.a.createElement("td",null,t.checkOut),l.a.createElement("td",null,t.status),"Pending"===t.status?l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-outline-success",type:"submit",onClick:function(){return e.handleAccept(t._id)}},"Accept"),l.a.createElement("button",{className:"btn btn-outline-danger",type:"submit",onClick:function(){return e.handleReject(t._id)}},"Reject")):null)})):l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(_.a,{animation:"border",role:"status"})))},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://travenation-controller.herokuapp.com/bookings",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("login_token")}}).then((function(e){return e.json()})).then((function(t){e.setState({bookingData:t})}))}},{key:"filterData",value:function(e){e?this.setState({bookingData:e}):alert("There is no booking as such")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{padding:"34px"}},l.a.createElement("h1",null,"Booking Details"),l.a.createElement("hr",null),"admin"===sessionStorage.getItem("role")?l.a.createElement(l.a.Fragment,null,l.a.createElement(c.b,{to:"/admindashboard"},l.a.createElement("button",{style:{marginBottom:"10px",width:"150px"},className:"btn btn-outline-secondary",type:"submit"},"Back")),l.a.createElement(re,{atHotelName:function(t){e.filterData(t)}})):null,l.a.createElement("hr",null),l.a.createElement("table",{id:"table",className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Booking ID"),l.a.createElement("th",{scope:"col"},"Hotel Name"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Phone No."),l.a.createElement("th",{scope:"col"},"Check-In"),l.a.createElement("th",{scope:"col"},"Check-Out"),l.a.createElement("th",{scope:"col"},"Booking Status"),l.a.createElement("th",{scope:"col"},"Approval"))),l.a.createElement("tbody",null,this.renderData(this.state.bookingData))))}}]),a}(n.Component),ce=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).renderUserDetails=function(e){return e?e.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e._id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.role))})):l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(_.a,{animation:"border",role:"status"})))},n.state={users:""},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://travenation-controller.herokuapp.com/api/auth/users",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({users:t})}))}},{key:"render",value:function(){return l.a.createElement("div",{style:{padding:"34px"}},l.a.createElement("h1",null,"List Of Users"),l.a.createElement("hr",null),l.a.createElement(c.b,{to:"/admindashboard"},l.a.createElement("button",{style:{marginBottom:"10px",width:"150px"},className:"btn btn-outline-secondary",type:"submit"},"Back")),l.a.createElement("div",null),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"User ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Role"))),l.a.createElement("tbody",null,this.renderUserDetails(this.state.users))))}}]),a}(n.Component),se=a(29),ie=a.n(se),me=a(54),ue=new Date,he=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={bookingData:"",filterData:""},e.filtering=function(e){if(e)return e.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e._id),l.a.createElement("td",null,e.hotel_name),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.checkIn),l.a.createElement("td",null,e.checkOut),l.a.createElement("td",null,"Completed"))}))},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=Object(me.a)(ie.a.mark((function e(){var t,a=this;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="".concat(ue.getFullYear(),"-").concat(ue.getMonth()+1,"-").concat(ue.getDate()),fetch("https://travenation-controller.herokuapp.com/bookings",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("login_token")}}).then((function(e){return e.json()})).then((function(e){a.setState({bookingData:e.filter((function(e){return e.checkIn<t}))})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{style:{padding:"34px"}},l.a.createElement("h1",null,"Completed Bookings"),l.a.createElement("hr",null),"admin"===sessionStorage.getItem("role")?l.a.createElement(c.b,{to:"/admindashboard"},l.a.createElement("button",{style:{marginBottom:"10px",width:"150px"},className:"btn btn-outline-secondary",type:"submit"},"Back")):null,l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Booking ID"),l.a.createElement("th",{scope:"col"},"Hotel Name"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Phone No."),l.a.createElement("th",{scope:"col"},"Check-In"),l.a.createElement("th",{scope:"col"},"Check-Out"),l.a.createElement("th",{scope:"col"},"Status"))),l.a.createElement("tbody",null,this.filtering(this.state.bookingData))))}}]),a}(l.a.Component),de=function(e){Object(O.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={bookingData:""},e.renderData=function(e){return e?e.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e._id),l.a.createElement("td",null,e.hotel_name),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.checkIn),l.a.createElement("td",null,e.checkOut),l.a.createElement("td",null,e.status))})):l.a.createElement(_.a,{animation:"border",role:"status"})},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("email");fetch("https://travenation-controller.herokuapp.com/bookings",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("login_token")}}).then((function(e){return e.json()})).then((function(a){e.setState({bookingData:a.filter((function(e){return e.email===t}))})}))}},{key:"render",value:function(){return l.a.createElement("div",{style:{padding:"34px",height:"80vh"}},l.a.createElement("h1",null,"Booking Details"),l.a.createElement("hr",null),l.a.createElement("table",{id:"table",className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Booking ID"),l.a.createElement("th",{scope:"col"},"Hotel Name"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Phone No."),l.a.createElement("th",{scope:"col"},"Check-In"),l.a.createElement("th",{scope:"col"},"Check-Out"),l.a.createElement("th",{scope:"col"},"Booking Status"))),l.a.createElement("tbody",null,this.renderData(this.state.bookingData))))}}]),a}(n.Component),pe=function(){return l.a.createElement("h2",null,"ERROR 404! page not found")},Ee=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:G}),l.a.createElement(s.a,{path:"/login",component:Z}),l.a.createElement(s.a,{path:"/signup",component:ee}),l.a.createElement(s.a,{path:"/dashboard",component:ne}),l.a.createElement(s.a,{path:"/admindashboard",component:le}),l.a.createElement(s.a,{path:"/viewusers",component:ce}),l.a.createElement(s.a,{path:"/adminviewbookings",component:oe}),l.a.createElement(s.a,{path:"/viewbookings",component:de}),l.a.createElement(s.a,{path:"/completedbooking",component:he}),l.a.createElement(s.a,{path:"/list/:id",component:Y}),l.a.createElement(s.a,{path:"/details/:id",component:W}),l.a.createElement(s.a,{path:"/booking/:id",component:K}),l.a.createElement(s.a,{component:pe})),l.a.createElement(N,null))};o.a.render(l.a.createElement(c.a,null,l.a.createElement(Ee,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.b6c5fd94.chunk.js.map