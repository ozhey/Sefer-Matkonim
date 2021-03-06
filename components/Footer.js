import styles from '../styles/Footer.module.css'
import { useAppContext } from '../context/state';
import Link from 'next/link'

const Footer = () => {
    const { theme, setTheme } = useAppContext();
    let button;

    if (theme === 'dark') {
        button =
            <button
                onClick={() => setTheme('light')}
                className={styles['theme-button']}
                style={{ backgroundColor: '#f5f3bf', color: 'black' }}>
                <span style={{ marginLeft: '4px' }} className="material-icons">light_mode</span>תצוגת יום
            </button>
    } else {
        button =
            <button
                onClick={() => setTheme('dark')}
                className={styles['theme-button']}
                style={{ backgroundColor: '#212121', color: 'white' }}>
                <span style={{ marginLeft: '4px' }} className="material-icons">dark_mode</span>תצוגת לילה
            </button>
    }

    return (
        <footer className={styles['container']}>
            {button}
            <Link href='https://www.linkedin.com/in/oz-heymann'>
                <div className={styles['credit']}>Developed by Oz Heymann</div>
            </Link>
        </footer>
    )
}

export default Footer;