import home from "./components/home"
import contacts from "./components/contacts"
import myProject from "./components/myProject"


export const routes = [
    {
        path: '', component: home

    },
    {
        path: '/contacts', component: contacts

},

{
    path: '/myProject', component: myProject

}
]