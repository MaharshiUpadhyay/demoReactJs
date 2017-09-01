import React ,{PropTypes} from 'react';
import {Link} from 'react-router';

const divStyle = {
  cursor: 'pointer'
};

const CourseListRow = ({course,onDelete}) => {
return(
  <tr>
    <td><a href={course.watchHref} target="_blank">Watch</a> </td>
    <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
    <td><Link to={'/course/' + course.id}>Edit</Link></td>
    {/*<td><input type="submit" name={course.id} value="Delete" className="btn btn-primary" onClick={onDelete}/></td>*/}
    <td><a name={course.id} style={divStyle} onClick={onDelete}>Delete</a></td>
  </tr>
);
};

CourseListRow.prototype ={
course: PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default CourseListRow;


