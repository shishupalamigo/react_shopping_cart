import { connect } from 'react-redux';

function OrderBy(props) {
   function handleOrderBy (event) {
    props.dispatch({type: event.target.value})
  };
  return (
    <div className="sort">
      Order by
      <select value={props.selectedorder} onChange={(event) => handleOrderBy(event)}>
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    products : state.products,
    selectedorder : state.selectedorder,
  }
}

export default connect(mapStateToProps)(OrderBy);
