import React from 'react';
import HeroBlock from '../HeroBlock/HeroBlock';
import SideBar from '../Sidebar/Sidebar';
import ProdcuctItems from '../ProductItems/ProductItems';

const HomePage = () => {
    return (
        <div>
            <HeroBlock/>
            <SideBar/>
            <ProdcuctItems/>
        </div>
    );
};

export default HomePage;