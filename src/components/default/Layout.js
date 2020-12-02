import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../../configs/Routes';
import Loader from '../common/Loader';
import SideBar from './SideBar';
import Particles from "react-particles-js";

import "./layout.scss";

const Layout = () => {
    return (
        <div className="layout">
            <div className="bg-lines">
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }}
                style={{
                    "position": "absolute",
                    "width": "95%",
                    "height": "95%",
                    "zIndex": "1"
                }}
            />
            <SideBar />
            <div className="content">
                <Suspense fallback={<Loader />}>
                    <Switch>
                        {
                            Routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />)
                        }
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}

export default Layout;