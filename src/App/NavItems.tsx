import React from 'react';
import style from './LeftNav.module.scss';
import NavItem from './NavItem';

const NavItems = () => {
    return (
        <div className={style.navItemContainer}>
            <NavItem title="Home" path="/" icon="fa-solid fa-house" color="gray"/>
            <NavItem title="Tasks" path="/tasks" icon="fa-solid fa-clipboard-list"  color="gray" />
            <NavItem title="Projects" path="/projects" icon="fa-solid fa-suitcase"  color="gray" />
            <NavItem title="Client Requests" path="/client-requests" icon="fa-solid fa-comment"  color="gray" />
            <NavItem title="Clients" path="/clients" icon="fa-solid fa-users"  color="gray" />
            <NavItem title="Products" path="/products" icon="fa-solid fa-cube"  color="gray" />
            <NavItem title="My Time" path="/my-time" icon="fa-solid fa-clock"  color="gray" />
            <NavItem title="Reports" path="/reports" icon="fa-solid fa-book"  color="gray" />
            <NavItem title="Settings" path="/settings" icon="fa-solid fa-gear"  color="gray" />
            <NavItem title="About" path="/about" icon="fa-solid fa-circle-info"  color="gray" />
        </div>
    )
}

export default NavItems

