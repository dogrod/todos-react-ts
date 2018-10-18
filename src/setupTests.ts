// Set up enzyme adapter
import * as enzyme from 'enzyme'

// FIXME: USE IMPORT STATEMENT
// Enzyme adapter for react 16 has some problem with Typescript when using import.
// So now use require temporarily.
// See: https://github.com/airbnb/enzyme/issues/1284
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })
