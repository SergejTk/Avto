import Vue from "vue";
//import _ from 'lodash';

export default new Vue({
    data: {
        listAvto: [],
    },
    methods: {
        addAvto(model,number,color){
            var itemAvto = {};
            //var id = this.listAvto.length + 1;
            //itemAvto.id = id;
            itemAvto.model = model;
            itemAvto.number = number;
            itemAvto.color = color;
            //var avto = '.    Модель:' + model + '    Номер:' + number + '    Цвет:' + color;
            this.listAvto.push(itemAvto);
            console.log(itemAvto);
        },
        delAvto(index){
            this.listAvto.splice(index, 1);
        },
        editAvto(index, model,number,color){
            var editAvto = {};
            //editAvto.id = this.listAvto[index].id;
            editAvto.model = model;
            editAvto.number = number;
            editAvto.color = color;
            console.log("EditAvto= " + editAvto);
            Vue.set(this.listAvto, index, editAvto);
            console.log(this.listAvto[index]);
        }
    }
})