var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema = OPTION_6

// because the relationship here its (many to many)
// each Publisher has many Authors 
// and each authers has many publisher  
// so we used the inner join tables


var sqlPublisherGenreSchema = OPTION_4
// because the relationship here its (one to many)


var sqlAuthorGenreSchema = OPTION_6
// because the relationship here its (many to many)
// each Authors has many Genre 
// and each Genre has many Authors
// so we used the inner join tables
