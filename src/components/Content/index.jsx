import React, { useEffect } from 'react';
import './index.scss';
import Head from '../Head';

function Content() {

    useEffect(()=> {
        const onscroll = () => {
            console.log(window.scrollY);
        };
        window.addEventListener('scroll', onscroll);
        return () => {
            window.removeEventListener('scroll', onscroll);
        }
    }, []);

    return (
        <div className="content">
            <div className="placeholder"></div>
            <Head/>
            <div className="body">
                    一堆内容
                    <br/>
            </div>
        </div>
    );
}

export default Content;