import React from 'react';
import { Header } from '../components/Header';
import { Fragment } from 'react/cjs/react.production.min';

export function Home() {
    return (
        <Fragment>
            <Header />

            <div className="container-fluid pl-5 pt-5" >
                <main role="main" className="inner cover text-dark">
                    <h1 className="cover-heading font-weight-bold">Transporte marítimo.</h1>
                    <p className="lead">Como mayor empresa de transporte de contenedores del mundo,
                    tranportamos 12 millones de contenedores.</p>
                    <p className="lead">al año y los entregamos en todos los rincones del mundo</p>
                    
                </main>
            </div>

            {/* <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1;"}}>
                <!-- Grid container -->
                <div className="container pt-4">
                    <!-- Section: Social media -->
                    <section className="mb-4">
                    <!-- Facebook -->
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i
                    ></a>

                    <!-- Twitter --> 
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                    ></a>

                    <!-- Google -->
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i
                    ></a>

                    <!-- Instagram -->
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                    ></a>

                    <!-- Linkedin -->
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                    ></a>
                    <!-- Github --> 
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                    ></a>
                    </section>
                    <!-- Section: Social media --> 
                </div>
                <!-- Grid container -->

                <!-- Copyright -->
                <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
                <!-- Copyright -->
                </footer> */}
        </Fragment>
    );
}