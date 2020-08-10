//object ar vetor always (this.) use kore man dekhbo.kintu object  ar baire gelei (objectname.element)diye man dekhbo. 
const normalPerson={
    firstName:'Rahim',
    lastName:'Abul',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    }
}

normalPerson.chargeBill(150);
console.log(normalPerson.salary);