import styles from './style.module.scss';

export function Header(){
    return(
    <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <img src="file:///C:/Users/mpetr/AppData/Local/Temp/Temp1_1616392336220-attachment.zip/images/logo.svg" alt="" />
            <nav>
                <a>Home</a>
                <a>Posts</a>
            </nav>
        </div>
    </header>
    )
}