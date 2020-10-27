const {format_date} = require('../utils/helpers');

// creating test to format_date() that takes Date() objects & returns dates in MM/DD/YYYY format
test('format_date() returns a date string', () => {
    const date = new Date('2020-10-20 16:12:03');
  
    expect(format_date(date)).toBe('10/20/2020');
  });
