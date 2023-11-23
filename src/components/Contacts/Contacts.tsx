import { ContactsInfo } from "../../widgets/ContactsInfo/ContactsInfo";
import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <img src="/contacts.png" alt="" width={200} height={44} />
      <div className={styles.contactsinfo}>
        <img src="/map.png" alt="" width={400} height={400} />
        <ContactsInfo />
      </div>
    </div>
  );
};
