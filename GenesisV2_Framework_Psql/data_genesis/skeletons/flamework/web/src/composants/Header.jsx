import '../assets/vendor/fonts/boxicons.css'
import '../assets/vendor/css/core.css' 
import '../assets/vendor/css/theme-default.css'
import '../assets/css/demo.css'
import '../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'

import '../assets/vendor/libs/apex-charts/apex-charts.css'
import '../plugins/fontawesome-free/css/all.min.css'
import '../dist/css/adminlte.min.css'

import '../assets/vendor/js/helpers.js'
import '../assets/js/config.js'
import '../assets/css/nucleo-icons.css'
import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-svg.css'

import '../assets/css/soft-ui-dashboard.css'
// import '../assets/img/apple-icon.png'
// import '../assets/img/favicon.png'

import '../assets/vendor/libs/jquery/jquery.js'
import '../assets/vendor/libs/popper/popper.js'
import '../assets/vendor/js/bootstrap.js'
import '../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'

import '../assets/vendor/js/menu.js'
import '../assets/vendor/libs/apex-charts/apexcharts.js'

import '../assets/js/main.js'

// import '../assets/js/dashboards-analytics.js'

import '../plugins/jquery/jquery.min.js'
import '../plugins/bootstrap/js/bootstrap.bundle.min.js'
import '../dist/js/adminlte.min.js'
// import '../dist/js/demo.js'

import React from 'react';
const Header  = () =>  {
    

    return (
        <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container" >
          <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
              <a  className="app-brand-link">
                <span className="app-brand-logo demo">
                </span>
                <span className="app-brand-text demo menu-text fw-bolder ms-2">[Projet Framework]</span>
              </a>
  
              <a  className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                <i className="bx bx-chevron-left bx-sm align-middle"></i>
              </a>
            </div>
  
            <div className="menu-inner-shadow"></div>
  
            <ul className="menu-inner py-1">
                [li]
            </ul>
          </aside>
        </div>

      </div>

    );
}

export default Header;