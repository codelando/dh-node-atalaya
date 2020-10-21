import React, { Component } from 'react';
import KeyMetric from './components/KeyMetric';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metrics: []
    };
  }

  componentDidMount() {

      fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(products => {
          this.setState({
            metrics: [
              {
                color: "primary",
                title: "Products in Data Base",
                value: products.meta.totalProducts,
                iconClass: "fa-clipboard-list",
              },
              {
                color: "success",
                title: "Amount in products",
                value: products.meta.totalAmount,
                iconClass: "fa-dollar-sign",
              },
            ]
          })
        })
        .catch(error => console.log(error));

      // this.setState({
      // metrics: [
      //     {
      //       color: "primary",
      //       title: "Products in Data Base",
      //       value: 135,
      //       iconClass: "fa-clipboard-list",
      //     },
      //     {
      //       color: "success",
      //       title: "Amount in products",
      //       value: 546456,
      //       iconClass: "fa-dollar-sign",
      //     },
      //     {
      //       color: "warning",
      //       title: "Total users",
      //       value: 38,
      //       iconClass: "fa-user-check",
      //     },
      //   ]
      // });
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div id="wrapper">
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
              <i className="fas fa-chart-line" />
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span></a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Actions</div>
          {/* Nav Item - Pages */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="/">
              <i className="fas fa-fw fa-folder" />
              <span>Pages</span>
            </a>
          </li>
          {/* Nav Item - Charts */}
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-chart-area" />
              <span>Charts</span></a>
          </li>
          {/* Nav Item - Tables */}
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-table" />
              <span>Tables</span></a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* Sidebar Toggle (Topbar) */}
              <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars" />
              </button>
              {/* Topbar Navbar */}
              <ul className="navbar-nav ml-auto">
                {/* Nav Item - Alerts */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                    <i className="fas fa-bell fa-fw" />
                    {/* Counter - Alerts */}
                    <span className="badge badge-danger badge-counter">3+</span>
                  </a>
                </li>
                {/* Nav Item - Messages */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                    <i className="fas fa-envelope fa-fw" />
                    {/* Counter - Messages */}
                    <span className="badge badge-danger badge-counter">7</span>
                  </a>
                </li>
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                    <img className="img-profile rounded-circle" src="/images/dummy-avatar.jpg" width={60} alt="user profile" />
                  </a>
                </li>
              </ul>
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>
              {/* Content Row */}
              <div className="row">
                { 
                  this.state.metrics.length ? 
                    this.state.metrics.map((metric, index) =>
                      <KeyMetric 
                        color= { metric.color }
                        title= { metric.title }
                        value= { metric.value }
                        iconClass= { metric.iconClass }
                        key= { `metric-${index}`}
                      />
                    )  
                  :
                    <p>Cargando métricas...</p>
                }
              </div>
              {/* Content Row */}
              <div className="row">
                {/* Last Product in DB */}
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="/images/product_dummy.svg" alt="bla bla bla" />
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                      <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                  </div>
                </div>
                {/* Categories in DB */}
                <div className="col-lg-6 mb-4">						
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 01
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 02
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 03
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 04
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 05
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 06
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Dashboard 2020</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
        {/* End of Page Wrapper */}
      </div>
    );
  }
}

export default App;
