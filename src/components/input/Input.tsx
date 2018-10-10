import * as React from 'react'

interface PropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixCls?: string
}

class Input extends React.Component<PropTypes> {
  private static defaultProps: PropTypes = {
    prefixCls: 'dr',
    type: 'text',
  }

  constructor(props: PropTypes) {
    super(props)
  }

  public render() {
    const { props } = this

    return (
      <input
        className={`${props.prefixCls}-input`}
        type={props.type}
      />
    )
  }
}

export default Input
