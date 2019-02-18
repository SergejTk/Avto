<template>
    <div class="listavto" v-on:click="closeModalOut">
        <div id="editAvto" style="display: none" class="modal">
            <div class="modal-content">
                    <span class="close" v-on:click="closeModal">&times;</span>
                    <h3>Edit Avto</h3>
                    <div id="carEdit">
                        <form>
                            <div class="form-group">
                                <label for="model">Модель:</label>
                                <input type="text" v-model="model" class="form-control" id="model">
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="number">Номер:</label>
                                <input type="text" v-model="number" class="form-control" id="number">
                            </div>
                            <div class="form-group">
                                <label for="color">Цвет:</label>
                                <input type="text" v-model="color" class="form-control" id="color">
                            </div>
                            <br />
                            <button type="button" class="btn btn-primary" v-on:click="save">Сохранить</button>
                            <!--span>AVTO: {{list}}</span-->
                        </form>
                    </div>
            </div>
        </div>
        <br />
        <br />
        <table border="2" width="100%">
            <tr>
                <th>№</th>
                <!--th>ID</th-->
                <th>Модель</th>
                <th>Номер</th>
                <th>Цвет</th>
                <th>Действие</th>
            </tr>
    
            <tr v-for="(item, index) in list" :key=item.index>
                    <td v-if="index >= begin && index <= end">{{index + 1}}</td>
                    <!--td v-if="index >= begin && index <= end">{{item.id}}</td-->
                    <td v-if="index >= begin && index <= end">{{item.model}}</td>
                    <td v-if="index >= begin && index <= end">{{item.number}}</td>
                    <td v-if="index >= begin && index <= end">{{item.color}}</td>
                    <td v-if="index >= begin && index <= end">
                        <button v-on:click="deleteItem(index)" >DEL</button>&nbsp;&nbsp;
                        <button v-on:click="editItem(index)" >EDIT</button>
                    </td>
            </tr>
        
        </table>
        <br />
        <br />
        <div class="inline">
            <span>Кол-во записей на странице: </span>
            <select v-model="size">
                <option>4</option>
                <option>8</option>
                <option>10</option>
            </select>&nbsp;&nbsp;
            <button :disabled="pageNumber === 0" v-on:click="prevPage">Previous</button>&nbsp;&nbsp;
            <button :disabled="pageNumber >= pageCount-1" v-on:click="nextPage">Next</button>
        </div>
    </div>
</template>
<script>
import Service from './Service.js';

export default {
    name: 'listavto',
    data(){
        return{
            list: [],
            model: '',
            number: '',
            color: '',
            index: Number,
            pageNumber: 0,
            size: 4
            
        }
    },
    components: {
        Service
       /// Avto
    },
    created(){
        this.list = Service.listAvto;
    },
    computed: {
        pageCount(){
            let l = this.list.length;
            return Math.ceil(l/this.size);
        },
        begin(){
            return this.pageNumber * this.size;
        },
        end(){
            return this.pageNumber * this.size + this.size - 1;
        }
    },
    methods:{
        deleteItem(index){
            console.log("INDEX= ", index);
            Service.delAvto(index);
        },
        editItem(index){
            document.getElementById("editAvto").style.display = "block";
            var avto = Service.listAvto[index];
            this.index = index;
            console.log(index);
            console.log(avto.model);
            this.model = avto.model;
            this.number = avto.number;
            this.color = avto.color;
        },
        save(){
            Service.editAvto(this.index, this.model, this.number, this.color);
            document.getElementById("editAvto").style.display = "none";
        },
        closeModal(){
            document.getElementById('editAvto').style.display = "none";
        },
        closeModalOut(event){
            if (event.target == document.getElementById('editAvto')) {
                document.getElementById('editAvto').style.display = "none";
            }
        },
        nextPage(){
            this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        }
    }
}
</script>

