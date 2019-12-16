import React, { useState, useEffect } from 'react';
import './index.scss';
import Head from '../Head';

function Content() {
    const [num, setNum] = useState(0);

    useEffect(()=> {
        const onscroll = () => {
            console.log(window.scrollY);
        };
        window.addEventListener('scroll', onscroll);
        return () => {
            window.removeEventListener('scroll', onscroll);
        }
    }, []);

    const handleAdd = (e) => {
        console.log(e);
        setNum(e);
    }

    return (
        <div className="content">
            <div className="placeholder"></div>
            <Head add={handleAdd} num={num}/>
            <div className="body">
                    一堆内容
                    {num}
                    <br/>
            </div>
        </div>
    );
}

export default Content;