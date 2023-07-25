export const particlesOptions = {
    fullScreen: {
        enable: true,
        zIndex: 0
    },
    particles: {
        number: {
            value: 30,
            limit: 200,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "images/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 3,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onHover: {
                enable: false,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10
                }
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                lineLinked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 100,
                duration: 2,
                opacity: 1,
                speed: 2
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    backgroundMask: {
        enable: true,
        cover: {
            color: {
                value: {
                    r: 14,
                    g: 14,
                    b: 30
                }
            }
        }
    },
    retina_detect: true,
    fps_limit: 60,
    background: {
        image: "url('https://particles.js.org/images/background3.jpg')"
    }
}