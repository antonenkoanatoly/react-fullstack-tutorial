import React from 'react';
import {Component} from 'react';
import Core from './api/core.json';
import Electives from './api/electives.json'
import loadingIcon from './img/loading.gif'

const Courses = {
    core: Core,
    electives: Electives,
};

export default class CourseSelect extends Component {

    state = {
        department: null,
        course: null,
        courses: null,
        _loading: false,
    };

    componentWillReceiveProps(update) {
        this.setState({
            department: update.department,
            course: update.course
        })
    }

    render() {
        return (
            <div>
                {this.renderDepartmentSelect()}
                <br/>
                {this.renderCourseSelect()}
            </div>
        )
    }

    renderDepartmentSelect() {
        return (
            <select
                onChange={this.onSelectDepartment}
                value={this.state.department || ''}
            >
                <option value=''>Which department?</option>
                <option value='core'>NodeSchool: Core</option>
                <option value='electives'>NodeSchool: Electives</option>
            </select>
        )
    }

    renderCourseSelect(){
        if (this.state._loading) {
            return <img alt='loading' src={loadingIcon}/>
        }
        if (!this.state.department || !this.state.courses.length) return <span/>;

        return (
            <select
                onChange={this.onSelectCourse}
                value={this.state.course || ''}
            >
                {[
                    <option value='' key='course-nono'>Which course?</option>,
                        ...this.state.courses.map((course, i) => (
                            <option value={course} key={i}>
                                {course}
                            </option>
                        ))
                ]}
            </select>
        )
    }

    onSelectDepartment = (evt) => {
        const department = evt.target.value;
        const course = null;
        this.setState({department, course});
        //this.props.onChange({name: 'department', value: department});
        //this.props.onChange({name: 'course', value: course});

        if (department) this.fetch(department);
    };

    fetch = (department) => {
        this.setState({_loading: true, courses: []});
        apiClient(department).then((courses) => {
            this.setState({_loading: false, courses: courses});
        })
    };

    onSelectCourse = (evt) => {
        const course = evt.target.value;
        this.setState({course});
        //this.props.onChange({name: 'course', value: course});
    };
}

function apiClient(department) {
    return {
        then: function(callback) {
            setTimeout(() => {callback(Courses[department]);}, 1000);
        }
    }
}