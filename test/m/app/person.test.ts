/// <reference path="../typings/index.d.ts" />

import * as assert from 'power-assert'

import * as Person from '../../../src/m/app/person'

describe('person', () => {
  it('init person', () => {
    const name: string = 'name'
    const p: Person = new Person(name)
    assert(p.getName() === name)
  })
})
