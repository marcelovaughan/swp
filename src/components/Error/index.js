import React from 'react';
import Header from '../Header';

import './styles.css';

export default function Error() {
    return (
        <div className="error-wrapper">
            <Header/>
            <div className="error">
                <div className="error-img"></div>
                    <div className="error-msg">
                    <h2>ESTA PÁGINA NÃO ESTÁ ARMADA E OPERACIONAL.</h2>
                    <p>Perdemos o contato com nossa fonte de dados.</p>
                </div>        
            </div>
        </div>
    );
}