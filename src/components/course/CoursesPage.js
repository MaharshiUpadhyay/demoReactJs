import React ,{PropTypes} from 'react';
import * as courseAction from '../../action/courseAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    // this.state = {
    //   course : {title: ""}
    // };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event){
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course : course});
  // }
  //
  // onClickSave(){
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course , index){
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push("/course");
  }

  deleteCourse(event){
    event.preventDefault();
    browserHistory.push(`/courses/${event.target.name}`)
    this.props.actions.deleteCourse(this.props.courses,event.target.name)
      .then(() => toastr.success('Course delete'))
      .catch(error => {
        toastr.error(error);
      });
  }

  render(){
    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} onDelete={this.deleteCourse}/>
        {/*{this.props.courses.map(this.courseRow)}*/}
        {/*<h2>Add Course</h2>*/}
        {/*<input type="text" onChange={this.onTitleChange} value={this.state.course.title} />*/}
        {/*<input type="submit" onClick={this.onClickSave} value="Save" />*/}
      </div>
    );
  }
}

CoursesPage.propTypes={
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};



function mapStateToProps(state,ownProps){
   const courseId = ownProps.params.id;
  //  if(courseId && state.courses.length > 0){
  //    this.getCourseById(state.courses,courseId);
  //  }
  return {courses: state.courses , courseId: courseId};
}

function mapDispatchToProps(dispatch){
  return {
    //createCourse: course => dispatch(courseAction.createCourse((course)))
    actions: bindActionCreators(courseAction,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
