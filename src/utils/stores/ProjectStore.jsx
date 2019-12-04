import { decorate, observable, action } from 'mobx';

class ProjectStore {

    sortArrayProjects(){
        this.arrayProjects = this.arrayProjects.slice().sort(sortByOrder);
    }

    arrayProjects = [
        {
            order: 1,
            id: 0,
            name: 'Raven',
            type: 'default',
            goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }
            ],
            behance: "https://www.behance.net/gallery/73144851/Raven",
            git: null,
            test: null,
            build: [8, 10, 11, 18]
        }, {
            order: 0,
            id: 1,
            name: 'Vibo',
            type: 'default',
            goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }
            ],
            behance: "https://www.behance.net/gallery/88983583/Vibo",
            git: "",
            test: "",
            build: [1, 2, 3, 4]
        }, {
            order: 2,
            id: 2,
            name: 'Mingu',
            type: 'default',
            goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    img: ""
                }
            ],
            behance: "https://www.behance.net/gallery/88987115/Mingu",
            git: null,
            test: null,
            build: [1, 2, 3, 4]
    },{
        order: 3,
        id: 3,
        name: 'LOGON',
        type: 'default',
        goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        topics: [
            {
                name: "Topic 1",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                img: ""
            }, {
                name: "Topic 2",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                img: ""
            }, {
                name: "Topic 3",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                img: ""
            }
        ],
        behance: "",
        git: "https://github.com/SantiagoOrtiz0630/final-sti",
        test: "https://dashboard.heroku.com/apps/final-sti",
        build: [1, 2, 3, 4]
},{
    order: 4,
    id: 4,
    name: 'InnReality',
    type: 'coming',
    goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    topics: [
        {
            name: "Topic 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: ""
        }, {
            name: "Topic 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: ""
        }, {
            name: "Topic 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: ""
        }
    ],
    behance: "",
    git: "",
    test: "",
    build: []
}];

    getProjectById(index) {
        let project = this.arrayProjects.find(elem => elem.id === index);
        //console.log(project);
        return project;
    }
}

function sortByOrder(a, b){
    return a.order - b.order;
}

decorate(ProjectStore, {
    arrayProjects: observable,
    getProjectById: action,
    sortArrayProjects: action
});

export default ProjectStore;