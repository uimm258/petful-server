process.env.NODE_ENV='test'
const{expect} = require('chai')
const supertest = require('mocha')

global.expect = expect
global.supertest = supertest