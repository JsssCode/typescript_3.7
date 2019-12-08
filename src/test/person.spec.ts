import { } from '../person';
import { Post, User } from '../person';
import { Helper } from '../helper';

describe('person', function () {


  it('fullName() returns string of firstName plus secondName', function () {
    let em = new User({
      firstName: 'Nick', secondName: 'Grey',
      bio: 'great guy from New York', dateBirth: new Date(1919, 7, 7), memberSince: new Date(2019, 7, 2), nickname: 'hot weel'
    });
    const userFullname = em.getUserFullName();
    expect(userFullname).toBe('Nick Grey');
  });


  it('getAge() with  dateBirth: new Date(19960707) should return 23', function () {

    Helper.nowDate = 1575806378488;

    let us = new User({
      firstName: 'Nick', secondName: 'Grey',
      bio: 'great guy from New York', dateBirth: new Date(1990, 7, 7), memberSince: new Date(2019, 7, 1), nickname: 'hot weel'
    });
    const curentAge = us.getAge();
    expect(curentAge).toBe(29);
  });

  it('getAge() with  dateBirth: new Date(19960707) should return 23', function () {

    Helper.nowDate = 1575806378488;

    let us = new User({
      firstName: 'Nick', secondName: 'Grey',
      bio: 'great guy from New York', dateBirth: new Date(1997, 7, 7), memberSince: new Date(2019, 7, 7), nickname: 'hot weel'
    });
    const curentAge = us.getAge();
    expect(curentAge).toBe(22);
  });

});