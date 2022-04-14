import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import IMG from './asset/images/webpack.png';

const App = () => {
    return (
        <div className="rounded-2xl bg-gray-100 w-full mt-11 p-6 flex flex-col items-center justify-center">
            <div>TypeScript + React + Sass + TailWind + Husky</div>
            <div>
                <img src={IMG} alt="test" />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
