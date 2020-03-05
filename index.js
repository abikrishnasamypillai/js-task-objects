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
obj.setName('Amri');
name= obj.getName()
console.log('Name :',name);
let id=obj.getId();
console.log('Id :',id);
obj.setId(2);
id= obj.getId()
console.log('Id:',id);
let age=obj.getAge();
console.log('Age :',age);
obj.setAge(20);
age= obj.getAge()
console.log('Age:',age);
let college=obj.getCollege();
console.log('College :',college);
obj.setCollege('SECE');
college= obj.getCollege()
console.log('College:',college);
let city=obj.getCity();
console.log('City :',city);
obj.setCity('Trichy');
city= obj.getCity()
console.log('City:',city);
let gender=obj.getGender();
console.log('Gender :',gender);
obj.setGender('F');
gender= obj.getGender()
console.log('Gender:',gender);

//------------------------------------------------------------------------