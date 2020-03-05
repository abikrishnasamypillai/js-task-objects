//object creation for braces

const obj={
  id : 1,
  name :'Abi' ,
  age : 21,
  college :'SECE' ,
  city : 'Cbe',
  gender : 'F',
setId: function(id)
{
  this.id=id;
},
getId : function()
{
  return this.id;
},
setName: function(name)
{
  this.name=name;
},
getName : function()
{
  return this.name;
},
setAge: function(age)
{
  this.age=age;
},
getAge : function()
{
  return this.age;
},
setCollege: function(college)
{
  this.college=college;
},
getCollege : function()
{
  return this.college;
},
setCity: function(city)
{
  this.city=city;
},
getCity : function()
{
  return this.city;
},
setGender: function(gender)
{
  this.gender=gender;
},
getGender : function()
{
  return this.gender;
},
}
let name=obj.getName();
console.log('Name :',name);
let id=obj.getId();
console.log('Id :',id);
let age=obj.getAge();
console.log('Age :',age);
let age=obj.getAge();
console.log('Age :',age);
let college=obj.getCollege();
console.log('College :',college);
let city=obj.getCity();
console.log('City :',city);
let gender=obj.getGender();
console.log('Gender :',gender);

obj.setName('Amri');
name= obj.getName()
console.log('Name :',name);
obj.setId(2);
id= obj.getId()
console.log('Id:',id);
obj.setAge(20);
age= obj.getAge()
console.log('Age:',age);
obj.setCollege('SECE');
college= obj.getCollege()
console.log('College:',college);
obj.setCity('Trichy');
city= obj.getCity()
console.log('City:',city);
obj.setGender('F');
gender= obj.getGender()
console.log('Gender:',gender);

//------------------------------------------------------------------------

//o9bjects creation with function

function Person(id)
{
  this.name='abi';
  this.setId=function(id)
  {
    _id=id;
  }
  this.getId=function()
  {
    return _id;
  }
}
const person=new Person('10');
person.setId(2)
console.log(person.getId());