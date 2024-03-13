import { Icon, iconExists } from "@iconify-icon/react";
//iconName : le nom de l'icon
//iconClassName : classes à ajouter pour changer le style de l'icon

export default function IconifyIcon({ iconName, iconClassName }) {

    if(iconExists(iconName)){
  return (
    <span className={`${iconClassName}`}>
      <Icon
        icon={iconName} width={40} height={40}
      />
    </span>
  );}
}
