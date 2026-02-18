import styles from "./dashboard.module.css";
import { ImExit } from "react-icons/im";
import { Button } from './signOutButton';
import { signOut } from '@/auth';

export default async function LogoutForm() {
    return (
        <form
          className={styles.logoutForm}
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
        <Button>
          Log out <ImExit />
        </Button>
        </form>
    );
}