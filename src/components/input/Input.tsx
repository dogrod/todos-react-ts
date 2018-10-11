import * as React from 'react'

import omit from 'omit.js'

interface PropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixCls?: string
}

class Input extends React.Component<PropTypes> {
  static defaultProps: PropTypes = {
    prefixCls: 'dr-input',
    type: 'text',
  }

  constructor(props: PropTypes) {
    super(props)
  }

  getAttributes() {
    const { props } = this

    return {
      ...omit(this.props, ['prefixCls']),
      className: props.prefixCls,
    }
  }

  render() {
    return (
      <input {...this.getAttributes()} />
    )
  }
}

export default Input
