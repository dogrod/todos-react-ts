import { mount } from 'enzyme'
import * as React from 'react'

import Input from '..'

describe('Input', () => {
  it('should support prefix of class name', () => {
    const PREFIX_CLASS = 'test'

    const input = mount(<Input prefixCls={PREFIX_CLASS} />)

    expect(input.find('input').hasClass(`${PREFIX_CLASS}-input`)).toBe(true)
  })
})