import React from 'react'
import Autocomplete from 'react-autocomplete'

import { getStates, matchStateToTerm, sortStates } from './util'


export default class MyAutoCompletes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Ma',
      orginalItems: [],
      items: []
    }


    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    let index = 0;
    let items = []
    for (index = 0; index < 160; index++) {
      items.push(
        { label: 'a' + index, value: index, desc: 'test' + index },
        { label: 'b' + index, value: index, desc: 'test' + index },
        { label: 'c' + index, value: index, desc: 'test' + index },
        { label: 'd' + index, value: index, desc: 'test' + index },
        { label: 'e' + index, value: index, desc: 'test' + index },
        { label: 'f' + index, value: index, desc: 'test' + index },
        { label: 'g' + index, value: index, desc: 'test' + index },
        { label: 'h' + index, value: index, desc: 'test' + index },
        { label: 'i' + index, value: index, desc: 'test' + index },
        { label: 'aa' + index, value: index, desc: 'test' + index },
        { label: 'ab' + index, value: index, desc: 'test' + index },
        { label: 'ac' + index, value: index, desc: 'test' + index },
        { label: 'ad' + index, value: index, desc: 'test' + index },
        { label: 'bb' + index, value: index, desc: 'test' + index },
        { label: 'bc' + index, value: index, desc: 'test' + index },
        { label: 'bd' + index, value: index, desc: 'test' + index },
        { label: 'be' + index, value: index, desc: 'test' + index },
        { label: 'bf' + index, value: index, desc: 'test' + index },
        { label: 'cc' + index, value: index, desc: 'test' + index },
        { label: 'cd' + index, value: index, desc: 'test' + index },
        { label: 'ca' + index, value: index, desc: 'test' + index },
        { label: 'ce' + index, value: index, desc: 'test' + index },
        { label: 'fe' + index, value: index, desc: 'test' + index },
        { label: 'fg' + index, value: index, desc: 'test' + index },
        { label: 'fw' + index, value: index, desc: 'test' + index },
        { label: 'se' + index, value: index, desc: 'test' + index },
        { label: 'aw' + index, value: index, desc: 'test' + index },
        { label: 'sd' + index })
    }

    this.setState({ orginalItems: items })
    this.setState({ items })
  }
  onChange(e) {
    let value = e.target.value
    this.setState({ value })
    if (value) {
      let items = this.state.orginalItems.filter(item => item.label.includes(e.target.value))
      this.setState({ items })
    } else {
      this.setState({ items: this.state.orginalItems })
    }
  }

  render() {


    return (

      <div>
        <h1>Basic Example with Static Data</h1>
        <Autocomplete
          getItemValue={(item) => item.label}
          items={this.state.items}
          onChange={(item) => this.onChange(item)}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          value={this.state.value}
          // onChange={(e) => this.setState({value : e.target.value})}
          onSelect={(val) => this.setState({ value: val })}
        />

      </div>
    )
  }
}