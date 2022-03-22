import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Cesar T. Putra</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="header container-fluid">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1>Test</h1>
                </div>
                <div className="col-md-6 align-items-center">
                    <h2>Hi, I'm Cesar</h2>
                    <h4>Full Stack Web Developer</h4>
                    <span>
                        <button type="button" className="btn btn-primary" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
                            My Work
                        </button>
                    </span>
                    <span>
                        <button type="button" className="btn btn-primary mx-4" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
                            Contact Me
                        </button>
                    </span>
                    {/* <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-primary" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
                                My Work
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
                                Contact Me
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

        <div class="skills container-fluid">
            <h3>My Skills</h3>
            <div class="row">
                <div class="col-md-3">
                    <p>Node JS</p>
                </div>
                <div class="col-md-3">
                    <p>PHP</p>
                </div>
                <div class="col-md-3">
                    <p>Javascript</p>
                </div>
                <div class="col-md-3">
                    <p>Laravel</p>
                </div>
                <div class="col-md-3">
                    <p>Express</p>
                </div>
                <div class="col-md-3">
                    <p>React JS</p>
                </div>
            </div>
        </div>
        </>
    )
}
