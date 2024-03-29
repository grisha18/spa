import React,{useState} from 'react';
import Menu from './Components/Menu';
import Search from './Components/Search';
import Premium from './Components/Premium';
import WatchList from './Components/WatchList';
import SignIn from './Components/SignIn';
import LanguageSwitcher from './Components/LanguageSwitcher';
import './Home.css';

const Home = ({number, setNumber}) => {
 


    return(
        <>
            <div className='header-container'>
                <div className='header-logo'>
                    IMDB
                </div>
                <Menu/>
                <Search/>
                <Premium/>
                <WatchList/>
                <SignIn/>
                <LanguageSwitcher/>
            </div>
        </>
    )
}

export default Home;