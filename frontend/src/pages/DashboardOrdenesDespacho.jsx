import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavbarLeft } from '../components/NavbarLeft';
import axios from 'axios';

export default function DashboardOrdenesDespacho() {
    const [ ordenes, setOrdenes ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8082/api/ordenes')
            .then(res => {
                setOrdenes(res.data)
            })
            .catch(error => console.log(error))
    },[])


    return (
        <div id="wrapper">
            {/*< !--Page Wrapper-- >*/}

            {/*  <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/*  <!-- Main Content --> */}
                <div id="content">

                    <header>
                        <img src="/img/image 1.png" alt="" />
                    </header>

                    {/*  <!-- Topbar --> */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        {/*  <!-- Sidebar Toggle (Topbar) --> */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>

                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-text mx-3">Serviport</div>
                        </a>

                        {/*  <!-- Topbar Navbar --> */}
                        <ul className="navbar-nav ml-auto">

                            {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"></i>
                                </a>
                                {/*  <!-- Dropdown - Messages --> */}
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            {/*  <!-- Nav Item - Alerts --> */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell fa-fw"></i>
                                    {/*  <!-- Counter - Alerts --> */}
                                    <span className="badge badge-danger badge-counter">3+</span>
                                </a>
                                {/*  <!-- Dropdown - Alerts --> */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">
                                        Alerts Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-file-alt text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success">
                                                <i className="fas fa-donate text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                            $290.29 has been deposited into your account!
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            Spending Alert: We've noticed unusually high spending for your account.
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                </div>
                            </li>

                            {/*  <!-- Nav Item - Messages --> */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-envelope fa-fw"></i>
                                    {/*  <!-- Counter - Messages --> */}
                                    <span className="badge badge-danger badge-counter">7</span>
                                </a>
                                {/*  <!-- Dropdown - Messages --> */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">
                                        Message Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                alt="..." />
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                problem I've been having.</div>
                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                alt="..." />
                                            <div className="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">I have the photos that you ordered last month, how
                                                would you like them sent to you?</div>
                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                alt="..." />
                                            <div className="status-indicator bg-warning"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                                the progress so far, keep up the good work!</div>
                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                alt="..." />
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                told me that people say this to all dogs, even if they aren't good...</div>
                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                </div>
                            </li>

                            <div className="topbar-divider d-none d-sm-block"></div>

                            {/*  <!-- Nav Item - User Information --> */}
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                                    <img className="img-profile rounded-circle"
                                        src="img/undraw_profile.svg" />
                                </a>
                                {/*  <!-- Dropdown - User Information --> */}
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Perfil
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Configuración
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Activity Log
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>

                        </ul>

                    </nav>
                    {/*  <!-- End of Topbar --> */}

                    {/*  <!-- Begin Page Content --> */}
                    <div className="container-fluid">
                        {/*  <!-- row --> */}
                        <div className="row">

                            {/*  <!-- <div className="col-2 shadow p-3 bg-body rounded"> --> */}
                            {/*  <!-- Sidebar --> */}
                            <NavbarLeft />
                            {/*  <!--End of Sidebar--> */}
                            {/*  <!-- </div> --> */}

                            {/*  <!--DataTales Example--> */}
                            <div className="col-9 card shadow mb-4">
                                {/*  <!-- <div class ="card-header py-3">
                                <h6 class ="m-0 font-weight-bold text-primary">DataTables Example</h6>
                                </div> --> */}
                                <div className="card-body">
                                    <div className="table-responsive table-hover">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>No.orden</th>
                                                    <th>Fecha</th>
                                                    <th>Puerto origen</th>
                                                    <th>Puerto destino</th>
                                                    <th>Estado</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            {/*  <!-- <tfoot>
                                <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                </tr>
                                </tfoot> --> */}
                                            <tbody>
                                                {ordenes.map((orden, _id) => {
                                                    return (
                                                        <tr key={_id}>
                                                            <td>{_id}</td>
                                                            <td>2011/04/25</td>
                                                            <td>{orden.origen}</td>
                                                            <td>{orden.destino}</td>
                                                            <td>Pendiente</td>
                                                            <td>Editar</td>
                                                        </tr>
                                                    )
                                                })}
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>                                                                                                                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  <!--end-row--> */}
                    </div>
                    {/*  <!-- /.container-fluid--> */}

                </div>
                {/*  <!--End of Main Content--> */}

                {/*  <!--Footer--> */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
                {/*  <!--End of Footer--> */}

            </div>
            {/*  <!-- End of Content Wrapper --> */}

            {/*  <!-- End of Page Wrapper --> */}
        </div>
    );
}
