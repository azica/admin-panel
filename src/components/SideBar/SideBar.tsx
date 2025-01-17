import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FullLogo } from 'assets/icons'
import { SideMenu } from 'components/SideMenu'
import { Referral } from 'components/Referral';

import { sideMenu } from 'assets/data/mockdata';
import { LogoWrapper, Wrapper } from './style'

export const SideBar = () => {
    const [commonPath, setCommonPath] = useState("");
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        const splitedPath = pathname.split("/");
        setCommonPath(`/${splitedPath[0]}`);
    }, [pathname]);

    return (
        <Wrapper>
            <LogoWrapper to="/">
                <FullLogo />
            </LogoWrapper>
            <SideMenu
                list={sideMenu}
                commonPath={commonPath}
            />
            <Referral />
        </Wrapper>
    )
}

export default SideBar