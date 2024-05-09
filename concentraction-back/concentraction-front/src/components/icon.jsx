import { Icon } from "@iconify-icon/react";
//iconName : le nom de l'icon
//iconClassName : classes à ajouter pour changer le style de l'icon

export default function IconifyIcon({ iconName, iconClassName, height=40, width=40  }) {

    
  return (
    <span className={`inline-flex w-fit ${iconClassName ?? ""}`}>
      <Icon
        icon={iconName} width={width} height={height}
      />
    </span>
  );}

