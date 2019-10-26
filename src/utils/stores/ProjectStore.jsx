import { decorate, observable, action } from 'mobx';

class ProjectStore {

    sortArrayProjects(){
        this.arrayProjects = this.arrayProjects.slice().sort(sortByOrder);
    }

    arrayProjects = [
        {
            order: 1,
            id: 0,
            name: 'Project 1',
            type: 'default',
            goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }
            ],
            behance: "https://www.behance.net/gallery/73144851/Raven",
            git: null,
            test: null,
            build: [8, 10, 11, 18]
        }, {
            order: 0,
            id: 1,
            name: 'Project 2',
            type: 'default',
            goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }
            ],
            behance: "",
            git: "",
            test: "",
            build: [1, 2, 3, 4]
        }, {
            order: 2,
            id: 2,
            name: 'Project 3',
            type: 'default',
            goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                }
            ],
            behance: "",
            git: "",
            test: "",
            build: [1, 2, 3, 4]
    }];

    getProjectById(index) {
        let project = this.arrayProjects.find(elem => elem.id === index);
        //console.log(project);
        return project;
    }
}

function sortByOrder(a, b){
    return b.order - a.order;
}

decorate(ProjectStore, {
    arrayProjects: observable,
    getProjectById: action,
    sortArrayProjects: action
});

export default ProjectStore;