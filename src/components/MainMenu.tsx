import React from 'react';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenu,
    IonList,
    IonItem,
    IonIcon,
    IonMenuToggle,
    IonLabel
} from '@ionic/react';
import { home, person, chatbubbles, settings } from 'ionicons/icons';

interface AppPage {
    title: string,
    url: string,
    icon: any
}

export const MainMenu = ({ disabled }: any) => {

    const appPages: AppPage[] = [
        { title: 'Home', url: '/home', icon: home },
        { title: 'Profile', url: '/home', icon: person },
        { title: 'Messages', url: '/home', icon: chatbubbles },
        { title: 'Settings', url: '/home', icon: settings },
    ];

    return (
        <React.Fragment>
            <IonMenu menuId="first" contentId="myMenuOutlet" disabled={disabled}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Main Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        {
                            appPages.map((appPage, index) => {
                                return (
                                    <IonMenuToggle key={index} auto-hide="false">
                                        <IonItem routerLink={appPage.url}>
                                            <IonIcon icon={appPage.icon} slot="start" />
                                            <IonLabel>{appPage.title}</IonLabel>
                                        </IonItem>
                                    </IonMenuToggle>
                                );
                            })
                        }
                    </IonList>
                </IonContent>
            </IonMenu>
        </React.Fragment>
    )
}
