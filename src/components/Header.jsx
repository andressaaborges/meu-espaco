import styles from './Header.module.css';
import logo from './../assets/logo-meu-espaco.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo do Meu Espaço" />
                <h1 className={styles.title}>Meu Espaço</h1>
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href="#">Escritório</a></li>
                    <li>Consultório</li>
                    <li>Auditório</li>
                </ul>
                <a href="#">Adicionar espaço</a>
            </nav>
        </header>
    );
}