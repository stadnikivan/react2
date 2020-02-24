import React from 'react';
import './App.css';

            export default class App extends React.Component({
            render: function() {
                return (
                    <div className="main">
                        <div className="nav">
                            <button className="butt-nav">Почта</button>
                            <button className="butt-nav">Картинки</button>
                            <button className="butt-nav"><img src="application.jpg" /></button>
                            <button className="butt-nav"><img src="bell.jpg" /></button>
                            <button className="butt-nav"><img src="m.jpg" /></button>  
                        </div>
                        <div>
                            <img src="logo.jpg" />

                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="H"
                                onkeyup="var yratext=/['0-9',':']/; if(yratext.test(this.value)) this.value=''"
                             />

                        </div>
                        <div className="footer">
                            <div className="left">
                                <button className="butt">реклама</button>
                                <button className="butt">для бизнеса</button>
                                <button className="butt">все о Google</button>
                            </div>
                            <div className="right">
                                <button className="butt">конфеденциальность</button>
                                <button className="butt">Условия</button>
                                <button className="butt">Настройки</button>
                            </div>
                        </div>
                    </div>
                );
            }
        });
