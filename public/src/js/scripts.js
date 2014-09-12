$icon-font-path: "../bower_components/bootstrap-sass-official/assets/fonts/bootstrap/";
// bower:scss
@import "bootstrap-sass-official/assets/stylesheets/bootstrap.scss";
// endbower

.browsehappy {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

/* Space out content a bit */
body {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
  padding-left: 15px;
  padding-right: 15px;
}

/* Custom page header */
.header {
  border-bottom: 1px solid #e5e5e5;

  /* Make the masthead heading the same height as the navigation */
  h3 {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 40px;
    padding-bottom: 19px;
  }
}

/* Custom page footer */
.footer {
  padding-top: 19px;
  color: #777;
  border-top: 1px solid #e5e5e5;
}

.container-narrow > hr {
  margin: 30px 0;
}

/* Main marketing message and sign up button */
.jumbotron {
  text-align: center;
  border-bottom: 1px solid #e5e5e5;

  .btn {
    font-size: 21px;
    padding: 14px 24px;
  }
}

/* Supporting marketing content */
.marketing {
  margin: 40px 0;

  p + h4 {
    margin-top: 28px;
  }
}

/* Responsive: Portrait tablets and up */
@media screen and (min-width: 768px) {
  .container {
    max-width: 730px;
  }

  /* Remove the padding we set earlier */
  .header,
  .marketing,
  .footer {
    padding-left: 0;
    padding-right: 0;
  }
  /* Space out the masthead */
  .header {
    margin-bottom: 30px;
  }
  /* Remove the bottom border on the jumbotron for visual effect */
  .jumbotron {
    border-bottom: 0;
  }
}

/* Visuals for facebook theme */
/* custom template */
html, body {
   height: 100%;
   font-family:verdana,arial,sans-serif;
   color:#555555;
}

.nav {
   font-family:Arial,sans-serif;
   font-size:13px;
}

a {
  color:#222222;
}

a:hover {
  text-decoration:none;
}

hr {
  border-color:#dedede;
}

.wrapper, .row {
   height: 100%;
   margin-left:0;
   margin-right:0;
}

.wrapper:before, .wrapper:after,
.column:before, .column:after {
    content: "";
    display: table;
}

.wrapper:after,
.column:after {
    clear: both;
}

.column {
    height: 100%;
    overflow: auto;
    *zoom:1;
}

.column .padding {
    padding: 20px;
}

.full{
  padding-top:70px;
}

.box {
    bottom: 0; /* increase for footer use */
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background-color:#444444;
  /*
    background-image:url('/assets/example/bg_suburb.jpg');
    background-size:cover;
    background-attachment:fixed;
  */
}

.divider {
  margin-top:32px;
}

.navbar-blue {
    border-width:0;
  background-color:#3B5999;
    color:#ffffff;
    font-family:arial,sans-serif;
    top:0;
    position:fixed;
    width:inherit;
}

.navbar-blue li > a,.navbar-toggle  {
   color:#efefef;
}

.navbar-blue .dropdown-menu li a {color:#2A4888;}
.navbar-blue .dropdown-menu li > a {padding-left:30px;}

.navbar-blue li>a:hover, .navbar-blue li>a:focus, .navbar-blue .open, .navbar-blue .open>a, .navbar-blue .open>a:hover, .navbar-blue .open>a:focus {
   background-color:#2A4888;
   color:#fff;
}

#main {
   background-color:#e9eaed;
   padding-left:0;
   padding-right:0;
}
#main .img-circle {
   margin-top:18px;
   height:70px;
   width:70px;
}

#sidebar {
    padding:0px;
  padding-top:15px;
}

#sidebar, #sidebar a, #sidebar-footer a {
    color:#ffffff;
    background-color:transparent;
  text-shadow:0 0 2px #000000;
    padding-left:5px;
}
#sidebar .nav li>a:hover {
    background-color:#393939;
}

.logo {
  display:block;
  padding:3px;
  background-color:#fff;
  color:#3B5999;
  height:28px;
  width:28px;
  margin:9px;
  margin-right:2px;
  margin-left:15px;
  font-size:20px;
  font-weight:700;
  text-align:center;
  text-decoration:none;
  text-shadow:0 0 1px;
  border-radius:2px;
}
#sidebar-footer {
  background-color:#444;
  position:absolute;
  bottom:5px;
  padding:5px;
}
#footer {
  margin-bottom:20px;
}

/* bootstrap overrides */

h1,h2,h3 {
   font-weight:800;
}

.navbar-toggle, .close {
  outline:0;
}

.navbar-toggle .icon-bar {
  background-color: #fff;
}

.btn-primary,.label-primary,.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus  {
  background-color:#3B5999;
    color:#fffffe;
}
.btn-default {
    color:#666666;
    text-shadow:0 0 1px rgba(0,0,0,.3);
}
.form-control {

}

.panel textarea, .well textarea, textarea.form-control
{
   resize: none;
}

.badge{
   color:#3B5999;
   background-color:#fff;
}
.badge:hover, .badge-inverse{
   background-color:#3B5999;
   color:#fff;
}

.jumbotron {
  background-color:transparent;
}
.label-default {
  background-color:#dddddd;
}
.page-header {
  margin-top: 55px;
  padding-top: 9px;
  border-top:1px solid #eeeeee;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:2px;
}

.panel-default .panel-heading {
  background-color:#f9fafb;
  color:#555555;
}

.col-sm-9.full {
    width: 100%;
}

.modal-header, .modal-footer {
  background-color:#f2f2f2;
    font-weight:800;
    font-size:12px;
}

.modal-footer i, .well i {
    font-size:20px;
    color:#c0c0c0;
}

.modal-body {
  padding:0px;
}

.modal-body textarea.form-control
{
   resize: none;
   border:0;
   box-shadow:0 0 0;
}

small.text-muted {
  font-family:courier,courier-new,monospace;
}

/* adjust the contents on smaller devices */
@media (max-width: 768px) {

  .column .padding {
    padding: 7px;
  }

  .full{
  padding-top:20px;
  }

  .navbar-blue {
  background-color:#3B5999;
    top:0;
    width:100%;
    position:relative;
  }

}


/*
 * off canvas sidebar
 * --------------------------------------------------
 */
@media screen and (max-width: 768px) {
  .row-offcanvas {
    position: relative;
    -webkit-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
  }

  .row-offcanvas-left.active {
    left: 33%;
  }

  .row-offcanvas-left.active .sidebar-offcanvas {
    left: -33%;
    position: absolute;
    top: 0;
    width: 33%;
    margin-left: 5px;
  }

  #sidebar, #sidebar a, #sidebar-footer a {
    padding-left:3px;
  }
}
/* End visuals for facebook theme */

/* Custom styles */
.well#post-form{
  margin-top: 50px;
}

#main-right-col{
  padding-top: 100px;
}

#main-left-col{
  padding-top:20px;
}

#account-icon{
  padding-right:15px;
}
/*End custome styles */
