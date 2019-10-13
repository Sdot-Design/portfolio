import { decorate, observable, action } from 'mobx';

class UIStore {

    /** Home */

    arrayWhat = [{
        id: 0,
        icon: 0,
        data: 'Research through Design',
        selected: true
    }, {
        id: 1,
        icon: 1,
        data: 'Web, App & Game Development',
        selected: false
    }, {
        id: 2,
        icon: 2,
        data: 'User Experience & User Interface',
        selected: false
    }, {
        id: 3,
        icon: 3,
        data: 'Prototyping',
        selected: false
    }];

    selectWhat(i) {
        this.arrayWhat.forEach(what => {
            what.selected = false;
        });
        this.arrayWhat[i].selected = true;
    }

    actualLink = 0;

    arrayLink = [{
        link: "/",
        name: "home",
        id: 0
    }, {
        link: "/about",
        name: "about",
        id: 1
    }, {
        link: "/projects",
        name: "projects",
        id: 2
    }, {
        link: "/contact",
        name: "contact",
        id: 3
    }];

    /* Menu */

    displayMenu = false;

    setDisplayMenu(value) {
        this.displayMenu = value;
    }

    /** About **/

    idActualInfo = 0;
    typeSkill = 'skill';
    typeTalent = 'talent';

    arrayInfo = [{
        name: 'UX Design - Prototyping',
        id: 0,
        icon: 1,
        type: 'skill',
        data: [12, 13]
    }, {
        name: 'UI Design',
        id: 1,
        icon: 2,
        type: 'skill',
        data: [12, 16, 17, 18]
    }, {
        name: 'Web Development',
        id: 2,
        icon: 3,
        type: 'skill',
        data: [4, 5, 6, 7, 20]
    }, {
        name: 'App Development',
        id: 3,
        icon: 4,
        type: 'skill',
        data: [6, 7, 10]
    }, {
        name: 'Game Development',
        id: 4,
        icon: 5,
        type: 'skill',
        data: [8, 9, 11]
    }, {
        name: '3D Modeling',
        id: 5,
        icon: 6,
        type: 'skill',
        data: [14, 15]
    }, {
        name: 'Creativity',
        id: 6,
        icon: 7,
        type: 'talent',
        data: "Constantly observing what surrounds me holistically, allows me to strengthen my work generating new ideas."
    }, {
        name: 'Problem Solving',
        id: 7,
        icon: 8,
        type: 'talent',
        data: "Using research through design to find solutions for people's challenges, complexities & needs."
    }, {
        name: 'Results Orientation',
        id: 8,
        icon: 9,
        type: 'talent',
        data: "Constantly remembering the objective and goals, allows my work to satisfy the required guidelines."
    }, {
        name: 'Team Work',
        id: 9,
        icon: 10,
        type: 'talent',
        data: "Working with my colleagues to achieve the objectives. I find my place to strengthen the work of my workmates."
    }]

    actualInfo = this.arrayInfo[this.idActualInfo];

    changeInfoHandler(i) {
        this.idActualInfo = i;
        this.actualInfo = this.arrayInfo[this.idActualInfo];
    }

    /** Projects **/

    arrayProjects = [{
        id: 0,
        name: 'Project 1',
        type: 'x'
    }, {
        id: 1,
        name: 'Project 2',
        type: 'x'
    }, {
        id: 2,
        name: 'Project 3',
        type: 'x'
    }];

    /** EndFunction **/
}

decorate(UIStore, {
    arrayWhat: observable,
    selectWhat: action,
    actualLink: observable,
    arrayLink: observable,
    displayMenu: observable,
    setDisplayMenu: action,
    idActualInfo: observable,
    typeSkill: observable,
    typeTalent: observable,
    arrayInfo: observable,
    actualInfo: observable,
    changeInfoHandler: action,
    arrayProjects: observable
});

export default UIStore;