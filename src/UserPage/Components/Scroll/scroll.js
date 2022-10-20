import { color } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BackToTopBtn() {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopBtn(true);
            } else {
                setBackToTopBtn(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className='toTopBtn'>
            {backToTopBtn && (
                <button
                    style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "50px",
                        height: "60px",
                        width: "60px",
                        alignContent: "center",
                        fontSize: "40px",
                        backgroundColor: "#9747FF",
                        color: "#FFFFFF",
                        borderRadius: 10,
                        zIndex: 1
                    }}
                    onClick={scrollUp}
                    >

                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up" /> */}
                    <BiArrowFromBottom style={{
                        alignItems: 'center',
                    }}/>
                </button>
            )}
        </div>
    )
}

export default BackToTopBtn;