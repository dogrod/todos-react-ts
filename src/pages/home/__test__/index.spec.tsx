import { shallow } from 'enzyme'
import * as React from 'react'

import Home from '../index'

describe('Home page', () => {
  // DOM testing
  it('renders right content', () => {
    const component = shallow(
      <Home />
    )

    expect(component.text()).toBe('Awesome Todos APP!')
  })
})