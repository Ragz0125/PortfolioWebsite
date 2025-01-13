"use client"
import { useRouter } from "next/navigation"
import styles from "./Navbar.module.scss"

const NavBar = () => {
    const router = useRouter();
    return(
        <div className={styles.wrapper}>
            <div className={styles.logo} onClick={()=> router.push("/")}>RAGHAV RAJARAMAN</div>

            <div className={styles.options}>
                <div className={styles.tab}>Work</div>
                <div className={styles.tab} onClick={()=> router.push("/about")}>About</div>
                <div className={styles.tab}>Contact</div>
            </div>
        </div>
    )
}

export default NavBar