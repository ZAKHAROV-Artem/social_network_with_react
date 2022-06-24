import s from './../styles/Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.header_body}>
                    <div className='logo'>
                        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" srcset="" />
                    </div>
                    <form className={s.search_form}>
                        <input type='text' className={s.search_input} placeholder='Search'/>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;
