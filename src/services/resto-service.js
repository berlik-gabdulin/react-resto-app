export default class RestoService {
    getMenuItems() {
        const menu = async () => {
            const menuArr = await fetch('http://localhost:3001/menu/')
                .then(res => res.json());
            return menuArr;
        }
        return menu();
    }
}