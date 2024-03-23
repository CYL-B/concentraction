import { Button } from "../button";
import IconifyIcon from "../icon";

//Button to sign out
//reduced : property that changes depending on the state of the menu (reduced or not). 
export function SignOutButton({reduced=false}) {
  return (
    <li>
      <Button variant="primary" isIcon={reduced}>
        {reduced ?<IconifyIcon iconName="material-symbols-light:logout-sharp"/>:"Sign-Out"}
      </Button>
    </li>
  );
}
