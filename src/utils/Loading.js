import React from 'react'
import './loading.css'

const renderLoader = () => (
    <div className="loading">
        <div className="spinner-container">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    </div>
);

export default renderLoader
