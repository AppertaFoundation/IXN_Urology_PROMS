import React from "react";
import { IonChip, IonIcon, IonLabel, IonSlides } from "@ionic/react";
import { handLeft } from "ionicons/icons";

interface TabProps {
  label: string;
  icon: string;
  color: string;
  tab: string;
  setTab(name: any): void;
}

const Tab: React.FC<TabProps> = ({ label, icon, color, tab, setTab }) => {
  return (
    <IonChip color={color} outline={!(tab === label)} onClick={() => setTab(label)}>
      <IonLabel>{label}</IonLabel>
      <IonIcon icon={icon} />
    </IonChip>
  );
};

export default Tab;