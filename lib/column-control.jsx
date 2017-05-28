var _ = { without: require('lodash/without') }
var React = require('react')

export default class ColumnControl extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    hiddenColumns: [],
    onChange: function () { }
  }

  render() {
    return (
      <div className='reactPivot-columnControl'>
        {!this.props.hiddenColumns.length ? '' :
          <select value={''} onChange={this.showColumn}>
            <option value={''}>隐藏的列</option>
            {this.props.hiddenColumns.map(function (column) {
              return <option key={column}>{column}</option>
            })}
          </select>
        }
      </div>
    )
  }

  showColumn = (evt) => {
    var col = evt.target.value
    var hidden = _.without(this.props.hiddenColumns, col)
    this.props.onChange(hidden)
  }
}
