import { Footer } from "flowbite-react";
import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        {/* The icon section has been removed */}
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
