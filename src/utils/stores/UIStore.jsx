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

    setDisplayMenu(value){
        this.displayMenu = value;
    }

    /** About **/

    idActualInfo = 0;
    typeSkill = 'skill';
    typeTalent = 'talent';

    arrayInfo = [{
        name: 'Prototyping',
        id: 0,
        type: 'skill',
        data: '[insert info]'
    }, {
        name: 'UX Design',
        id: 1,
        type: 'skill',
        data: '[insert info]'
    }, {
        name: 'UI Design',
        id: 2,
        type: 'skill',
        data: '[insert info]'
    }, {
        name: 'Web Development',
        id: 3,
        type: 'skill',
        data: '[insert info]'
    }, {
        name: 'App Development',
        id: 4,
        type: 'skill',
        data: '[insert info]'
    }, {
        name: 'Game Development',
        id: 5,
        type: 'skill',
        data: '[insert info]'
    }, {
        name: '3D Modeling',
        id: 6,
        type: 'skill',
        data: '[insert info]'
    }, {
        name: 'Creativity',
        id: 7,
        type: 'talent',
        data: '[insert info]'
    }, {
        name: 'Problem Solving',
        id: 8,
        type: 'talent',
        data: '[insert info]'
    }, {
        name: 'Results Orientation',
        id: 9,
        type: 'talent',
        data: '[insert info]'
    }, {
        name: 'Team Work',
        id: 10,
        type: 'talent',
        data: '[insert info]'
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