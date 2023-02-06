import React, {useState} from 'react'
import styles from './css/Nav.module.css'
import * as data from './links.json'
import SearchBox from './SearchBox';
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom";

function Nav() {
    const navigate = useNavigate();
    let [logoutModalOpen, setLogoutModalOpen] = useState(false);

    const logout = ()=>{
        localStorage.clear();
        setLogoutModalOpen(false);
        navigate('/');
    }

    const login = () => {
        navigate('/login');
    }
    return(
        <nav className={styles.navbar}>
            <Modal isOpen={logoutModalOpen} className={styles['logout-modal']} ariaHideApp={false}>
                <p>로그아웃 되었습니다.</p>
                <button className={styles['logout-ok-btn']} onClick={logout}>확인</button> 
            </Modal>
            <div className={styles['logo-container']}>
                <img src="assets/logo_txt_color.svg" alt="main-logo" onClick={()=>{navigate('/');}}></img>
            </div>
            <div className={styles['side-navbar']}>
                {/* <Links links={links}/> */}
                { localStorage.getItem('token')?
                (<div>
                    <button onClick={()=>setLogoutModalOpen(true)}>
                        로그아웃
                    </button>
                </div>)
                :(<div>
                    <button onClick={login}>
                        로그인
                    </button>
                </div>)
                }
                <SearchBox/>
            </div>
        </nav>
    )
}

export default Nav